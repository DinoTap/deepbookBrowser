import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, ArrowLeft, RotateCcw, MoreVertical, Star, Shield, Globe, Bot, Zap, TrendingUp, Github, Twitter, FileText, ExternalLink, Wallet, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '@/contexts/WalletContext';
import axios from 'axios';
import { toast } from 'sonner';

interface OrganicResult {
  title: string;
  link: string;
  snippet?: string;
  displayed_link?: string;
}

interface GeminiSearchResult {
  title?: string;
  link?: string;
  snippet?: string;
  displayed_link?: string;
  url?: string;
  description?: string;
}

const Search = () => {
  const navigate = useNavigate();
  const { wallet, isConnected, disconnectWallet } = useWallet();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<OrganicResult[] | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Redirect to wallet setup if not connected
  useEffect(() => {
    if (!isConnected) {
      navigate('/wallet');
    }
  }, [isConnected, navigate]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleDisconnectWallet = () => {
    disconnectWallet();
    navigate('/wallet');
    toast.success('Wallet disconnected');
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    setHasSearched(true);
    
    try {
      // Using Gemini API with Google Search tool
      const prompt = `Search for "${searchQuery}" using Google Search.`;
      const payload = {
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }],
          },
        ],
        tools: [
          {
            function_declarations: [
              {
                name: 'google_search',
                description: 'API for google_search',
                parameters: {
                  type: 'object',
                  properties: {
                    queries: {
                      type: 'array',
                      items: {
                        type: 'string',
                      },
                    },
                  },
                  required: ['queries'],
                },
              },
            ],
          },
        ],
      };

      const apiKey = 'AIzaSyCShYoVI1RlWvYbeykRSUAD-WRws16a4K0';
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      // Debug: Log the response to see the structure
      console.log('Gemini API Response:', result);

      // Check if the response contains a function call
      if (
        result.candidates &&
        result.candidates.length > 0 &&
        result.candidates[0].content.parts[0].functionCall
      ) {
        const functionCall = result.candidates[0].content.parts[0].functionCall;
        console.log('Function call detected:', functionCall);
        
        // The model is calling the google_search function
        // We need to make a second API call to get the actual search results
        const searchQuery = functionCall.args.queries[0];
        
        // Make a second call to get the search results
        const searchPayload = {
          contents: [
            {
              role: 'user',
              parts: [{ text: `Search for "${searchQuery}" using Google Search and return the top 5 results in this exact JSON format:
[
  {
    "title": "Result Title",
    "link": "https://example.com",
    "snippet": "Brief description of the result",
    "displayed_link": "example.com"
  }
]
Only return the JSON array, no other text.` }],
            },
          ],
        };

        const searchResponse = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(searchPayload),
        });

        if (!searchResponse.ok) {
          throw new Error(`Search HTTP error! status: ${searchResponse.status}`);
        }

        const searchResult = await searchResponse.json();
        console.log('Search result response:', searchResult);

        // Try to extract results from the search response
        if (searchResult.candidates && searchResult.candidates.length > 0) {
          const searchText = searchResult.candidates[0].content.parts[0].text;
          console.log('Raw search text:', searchText);
          
          // Try to parse JSON from the text response
          try {
            // Look for JSON-like content in the response
            const jsonMatch = searchText.match(/\{[\s\S]*\}|\[[\s\S]*\]/);
            if (jsonMatch) {
              const parsedData = JSON.parse(jsonMatch[0]);
              console.log('Parsed search data:', parsedData);
              
              // Handle different possible formats
              let results = [];
              if (parsedData.results) {
                results = parsedData.results;
              } else if (Array.isArray(parsedData)) {
                results = parsedData;
              } else if (parsedData[0] && parsedData[0].results) {
                results = parsedData[0].results;
              }
              
              if (results.length > 0) {
                const formattedResults = results.map((item: GeminiSearchResult) => ({
                  title: item.title || item.snippet?.substring(0, 50) + '...' || 'No title',
                  link: item.link || item.url || '',
                  snippet: item.snippet || item.description || '',
                  displayed_link: item.displayed_link || item.link || item.url || ''
                }));
                
                setSearchResults(formattedResults);
                toast.success(`Found ${formattedResults.length} results`);
              } else {
                // Try to extract structured data from text
                const extractedResults = extractSearchResultsFromText(searchText);
                if (extractedResults.length > 0) {
                  setSearchResults(extractedResults);
                  toast.success(`Found ${extractedResults.length} results`);
                } else {
                  // Fallback: treat the text as a single result
                  setSearchResults([{
                    title: 'Search Results',
                    link: '',
                    snippet: searchText,
                    displayed_link: ''
                  }]);
                  toast.info('Received text response');
                }
              }
            } else {
              // No JSON found, try to extract structured data from text
              const extractedResults = extractSearchResultsFromText(searchText);
              if (extractedResults.length > 0) {
                setSearchResults(extractedResults);
                toast.success(`Found ${extractedResults.length} results`);
              } else {
                // Fallback: treat the text as a single result
                setSearchResults([{
                  title: 'Search Results',
                  link: '',
                  snippet: searchText,
                  displayed_link: ''
                }]);
                toast.info('Received text response');
              }
            }
          } catch (parseError) {
            console.error('Error parsing search results:', parseError);
            // Try to extract structured data from text
            const extractedResults = extractSearchResultsFromText(searchText);
            if (extractedResults.length > 0) {
              setSearchResults(extractedResults);
              toast.success(`Found ${extractedResults.length} results`);
            } else {
              // Fallback: treat the text as a single result
              setSearchResults([{
                title: 'Search Results',
                link: '',
                snippet: searchText,
                displayed_link: ''
              }]);
              toast.info('Received text response');
            }
          }
        } else {
          toast.error('No search results found');
        }
      } else {
        // Fallback for text-only responses
        console.warn('No function call detected. Showing a text response.');
        const textResponse = result.candidates[0].content.parts[0].text;
        setSearchResults([{ 
          title: 'Search Response',
          link: '',
          snippet: textResponse,
          displayed_link: ''
        }]);
        toast.info('Received text response instead of search results');
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      toast.error('Failed to perform search');
    } finally {
      setIsLoading(false);
    }
  };
  const extractSearchResultsFromText = (text: string): OrganicResult[] => {
    const results: OrganicResult[] = [];
    
    // Try to find numbered results (1., 2., 3., etc.)
    const numberedMatches = text.match(/(\d+)\.\s*([^\n]+?)(?:\n|$)/g);
    if (numberedMatches) {
      numberedMatches.forEach((match, index) => {
        const titleMatch = match.match(/(\d+)\.\s*([^\n]+)/);
        if (titleMatch) {
          const title = titleMatch[2].trim();
          
          // Try to find URL in the text
          const urlMatch = text.match(/https?:\/\/[^\s\n]+/g);
          const link = urlMatch && urlMatch[index] ? urlMatch[index] : '';
          
          // Try to find description/snippet
          const lines = text.split('\n');
          let snippet = '';
          for (let i = 0; i < lines.length; i++) {
            if (lines[i].includes(title)) {
              // Get next few lines as snippet
              snippet = lines.slice(i + 1, i + 3).join(' ').trim();
              break;
            }
          }
          
          results.push({
            title,
            link,
            snippet: snippet || 'No description available',
            displayed_link: link ? new URL(link).hostname : ''
          });
        }
      });
    }
    
    // If no numbered results, try to find bold titles
    if (results.length === 0) {
      const boldMatches = text.match(/\*\*([^*]+)\*\*/g);
      if (boldMatches) {
        boldMatches.forEach((match, index) => {
          const title = match.replace(/\*\*/g, '').trim();
          
          // Try to find URL
          const urlMatch = text.match(/https?:\/\/[^\s\n]+/g);
          const link = urlMatch && urlMatch[index] ? urlMatch[index] : '';
          
          results.push({
            title,
            link,
            snippet: 'Description not available',
            displayed_link: link ? new URL(link).hostname : ''
          });
        });
      }
    }
    
    // If still no results, try to extract from common patterns
    if (results.length === 0) {
      // Look for common search result patterns
      const patterns = [
        /([A-Z][^.!?]+(?:\.|!|\?))/g, // Sentences starting with capital letters
        /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/g // Title-like phrases
      ];
      
      patterns.forEach(pattern => {
        const matches = text.match(pattern);
        if (matches && matches.length > 0) {
          matches.slice(0, 5).forEach((match, index) => {
            if (match.length > 10 && match.length < 100) {
              results.push({
                title: match.trim(),
                link: '',
                snippet: 'Search result',
                displayed_link: ''
              });
            }
          });
        }
      });
    }
    
    return results.slice(0, 10); // Limit to 10 results
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Function to extract structured search results from text response


  const renderSearchResults = () => {
    if (!searchResults) return null;

    return (
      <div className="space-y-4">
        {/* Google-style search results */}
        {searchResults.map((result, index) => {
          const domain = result.displayed_link || result.link;
          const faviconUrl = domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=16` : '';
          
          return (
            <div key={index} className="max-w-3xl">
              {/* Result container */}
              <div className="group">
                {/* URL and favicon */}
                <div className="flex items-center gap-2 mb-1">
                  {faviconUrl && (
                    <img 
                      src={faviconUrl} 
                      alt=""
                      className="w-4 h-4 rounded-sm"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  )}
                  <span className="text-sm text-green-400 truncate">
                    {domain}
                  </span>
                </div>
                
                {/* Title - Google style */}
                <a 
                  href={result.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block mb-1"
                >
                  <h3 className="text-xl text-white hover:underline cursor-pointer leading-tight">
                    {result.title}
                  </h3>
                </a>
                
                {/* Snippet - Google style */}
                {result.snippet && (
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {result.snippet}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-r from-green-400/5 to-emerald-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Browser Chrome */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 border-b border-cyan-400/20 px-2 sm:px-4 py-2 sm:py-3 shadow-lg relative z-10">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Navigation buttons */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-300 hover:bg-cyan-400/20 hover:text-cyan-100 transition-all duration-200"
              onClick={handleBack}
            >
              <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-300 hover:bg-cyan-400/20 hover:text-cyan-100 transition-all duration-200"
              onClick={handleRefresh}
            >
              <RotateCcw className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
          
          {/* Address bar */}
          <div className="flex-1 max-w-none sm:max-w-2xl mx-auto">
            <div className="flex items-center bg-gradient-to-r from-slate-700 to-slate-600 rounded-full border border-cyan-400/30 px-2 sm:px-4 py-1 sm:py-2 shadow-lg backdrop-blur-sm">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 mr-1 sm:mr-2 flex-shrink-0" />
              <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400 mr-1 sm:mr-2 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-cyan-100 flex-1 font-mono truncate">
                {wallet ? `${wallet.address.slice(0, 6)}...${wallet.address.slice(-4)}` : 'https://search.deepbook.com'}
              </span>
              <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 ml-1 sm:ml-2 flex-shrink-0" />
            </div>
          </div>
          
          {/* Wallet disconnect button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-300 hover:bg-cyan-400/20"
            onClick={handleDisconnectWallet}
            title="Disconnect Wallet"
          >
            <LogOut className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>

      {/* Search Interface */}
      <div className="container mx-auto px-4 py-4 sm:py-8 relative z-10">
        {!hasSearched ? (
          // AI-themed search page
          <div className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh]">
            <div className="mb-6 sm:mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img 
                src="/lovable-uploads/32b93810-6223-4b36-aa9b-5da3e562b334.png" 
                alt="DeepBook" 
                className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 relative z-10 drop-shadow-2xl"
              />
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-center mb-2">DeepBook</h1>
              <p className="text-cyan-300 text-center text-base sm:text-lg font-light">AI-Powered Crypto Search Engine</p>
            </div>
            
            <div className="w-full max-w-xs sm:max-w-2xl mb-6 sm:mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <SearchIcon className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 text-cyan-400 h-4 w-4 sm:h-6 sm:w-6 z-10" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Search crypto protocols, AI trading strategies..."
                  className="pl-12 sm:pl-16 pr-4 sm:pr-6 py-3 sm:py-4 text-base sm:text-lg bg-gradient-to-r from-slate-800/80 to-slate-700/80 border-2 border-cyan-400/30 rounded-full hover:border-cyan-400/50 focus:border-cyan-400 text-white placeholder-cyan-300/60 shadow-2xl backdrop-blur-sm relative z-10"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-xs sm:max-w-md justify-center items-center">
              <Button 
                onClick={handleSearch}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                <SearchIcon className="w-4 h-4 mr-2" />
                DeepBook Search
              </Button>
              <Button 
                onClick={() => setSearchQuery('AI crypto trading')}
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white border-0 px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                <Bot className="w-4 h-4 mr-2" />
                I'm Feeling Lucky
              </Button>
            </div>

            {/* Quick access buttons */}
            <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-xs sm:max-w-2xl">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-3 sm:p-4 rounded-xl backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group">
                <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-white text-sm font-medium">AI Trading</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 p-3 sm:p-4 rounded-xl backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 cursor-pointer group">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-white text-sm font-medium">DeFi Analytics</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 p-3 sm:p-4 rounded-xl backdrop-blur-sm border border-green-400/30 hover:border-green-400/50 transition-all duration-300 cursor-pointer group">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-white text-sm font-medium">Fast Trades</div>
              </div>
            </div>
          </div>
        ) : (
          // Search results page
          <div>
            {/* Search header */}
            <div className="border-b border-cyan-400/20 pb-4 sm:pb-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-3 sm:gap-6 flex-col sm:flex-row">
                <img 
                  src="/lovable-uploads/32b93810-6223-4b36-aa9b-5da3e562b334.png" 
                  alt="DeepBook" 
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
                <div className="flex-1 w-full sm:max-w-2xl">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-lg opacity-50"></div>
                    <SearchIcon className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 h-4 w-4 sm:h-5 sm:w-5 z-10" />
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 border border-cyan-400/30 rounded-full text-white placeholder-cyan-300/60 relative z-10 text-sm sm:text-base"
                    />
                  </div>
                </div>
                <Button 
                  onClick={handleSearch} 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg text-sm sm:text-base"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  ) : (
                    <SearchIcon className="w-4 h-4 mr-2" />
                  )}
                  Search
                </Button>
              </div>
            </div>

            {/* Search Results */}
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="w-6 h-6 sm:w-8 sm:h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <div className="max-w-4xl mx-auto">
                {/* Results header */}
                {searchResults && searchResults.length > 0 && (
                  <div className="mb-6 pb-4 border-b border-gray-600">
                    <p className="text-sm text-gray-300">
                      About {searchResults.length} results
                    </p>
                  </div>
                )}
                {renderSearchResults()}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
