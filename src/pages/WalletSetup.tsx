import React, { useState } from 'react';
import { ethers } from 'ethers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { useWallet } from '@/contexts/WalletContext';
import { useNavigate } from 'react-router-dom';
import { 
  Wallet, 
  Key, 
  Download, 
  Upload, 
  Eye, 
  EyeOff, 
  Copy, 
  Check,
  Shield,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { toast } from 'sonner';

interface WalletData {
  address: string;
  privateKey: string;
  mnemonic?: string;
}

const WalletSetup = () => {
  const { connectWallet, isConnected } = useWallet();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('create');
  const [walletData, setWalletData] = useState<WalletData | null>(null);
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [showMnemonic, setShowMnemonic] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [importPrivateKey, setImportPrivateKey] = useState('');
  const [importMnemonic, setImportMnemonic] = useState('');
  const [importPassword, setImportPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Redirect to search if already connected
  React.useEffect(() => {
    if (isConnected) {
      navigate('/');
    }
  }, [isConnected, navigate]);

  const createNewWallet = async () => {
    setIsLoading(true);
    try {
      // Create a new wallet with mnemonic
      const wallet = ethers.Wallet.createRandom();
      
      const newWalletData: WalletData = {
        address: wallet.address,
        privateKey: wallet.privateKey,
        mnemonic: wallet.mnemonic.phrase
      };
      
      setWalletData(newWalletData);
      toast.success('New wallet created successfully!');
    } catch (error) {
      console.error('Error creating wallet:', error);
      toast.error('Failed to create wallet');
    } finally {
      setIsLoading(false);
    }
  };

  const importWalletFromPrivateKey = async () => {
    if (!importPrivateKey.trim()) {
      toast.error('Please enter a private key');
      return;
    }

    setIsLoading(true);
    try {
      // Remove 0x prefix if present
      const cleanPrivateKey = importPrivateKey.startsWith('0x') 
        ? importPrivateKey.slice(2) 
        : importPrivateKey;

      const wallet = new ethers.Wallet('0x' + cleanPrivateKey);
      
      const importedWalletData: WalletData = {
        address: wallet.address,
        privateKey: wallet.privateKey
      };
      
      setWalletData(importedWalletData);
      setImportPrivateKey('');
      toast.success('Wallet imported successfully!');
    } catch (error) {
      console.error('Error importing wallet:', error);
      toast.error('Invalid private key');
    } finally {
      setIsLoading(false);
    }
  };

  const importWalletFromMnemonic = async () => {
    if (!importMnemonic.trim()) {
      toast.error('Please enter a mnemonic phrase');
      return;
    }

    setIsLoading(true);
    try {
      const wallet = ethers.Wallet.fromMnemonic(importMnemonic.trim());
      
      const importedWalletData: WalletData = {
        address: wallet.address,
        privateKey: wallet.privateKey,
        mnemonic: wallet.mnemonic.phrase
      };
      
      setWalletData(importedWalletData);
      setImportMnemonic('');
      toast.success('Wallet imported successfully!');
    } catch (error) {
      console.error('Error importing wallet:', error);
      toast.error('Invalid mnemonic phrase');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast.success(`${field} copied to clipboard!`);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (error) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const downloadWallet = () => {
    if (!walletData) return;

    const walletInfo = {
      address: walletData.address,
      privateKey: walletData.privateKey,
      mnemonic: walletData.mnemonic || 'N/A',
      timestamp: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(walletInfo, null, 2)], {
      type: 'application/json'
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `wallet-${walletData.address.slice(0, 8)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success('Wallet data downloaded!');
  };

  const proceedToSearch = () => {
    if (walletData) {
      connectWallet(walletData);
      toast.success('Wallet connected! Redirecting to search...');
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full">
                <Wallet className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              DeepBook Wallet Setup
            </h1>
            <p className="text-cyan-300 text-lg">
              Create a new wallet or import an existing one to start searching
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="create" className="flex items-center gap-2">
                <Key className="w-4 h-4" />
                Create Wallet
              </TabsTrigger>
              <TabsTrigger value="import" className="flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Import Wallet
              </TabsTrigger>
            </TabsList>

            <TabsContent value="create" className="space-y-6">
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 border-cyan-400/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Key className="w-5 h-5 text-cyan-400" />
                    Create New Wallet
                  </CardTitle>
                  <CardDescription className="text-cyan-300">
                    Generate a new Ethereum wallet with a unique address and private key
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="bg-blue-500/10 border-blue-400/30">
                    <Shield className="h-4 w-4" />
                    <AlertDescription className="text-blue-300">
                      Your wallet will be generated locally and stored securely in your browser
                    </AlertDescription>
                  </Alert>
                  
                  <Button 
                    onClick={createNewWallet}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    ) : (
                      <Key className="w-4 h-4 mr-2" />
                    )}
                    Generate New Wallet
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="import" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Import from Private Key */}
                <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 border-cyan-400/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Key className="w-5 h-5 text-cyan-400" />
                      Import from Private Key
                    </CardTitle>
                    <CardDescription className="text-cyan-300">
                      Enter your private key to import an existing wallet
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Alert className="bg-yellow-500/10 border-yellow-400/30">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription className="text-yellow-300">
                        Never share your private key with anyone
                      </AlertDescription>
                    </Alert>
                    
                    <Input
                      type="password"
                      placeholder="Enter your private key (0x...)"
                      value={importPrivateKey}
                      onChange={(e) => setImportPrivateKey(e.target.value)}
                      className="bg-slate-700/50 border-cyan-400/30 text-white placeholder-cyan-300/60"
                    />
                    
                    <Button 
                      onClick={importWalletFromPrivateKey}
                      disabled={isLoading || !importPrivateKey.trim()}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white"
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      ) : (
                        <Upload className="w-4 h-4 mr-2" />
                      )}
                      Import Wallet
                    </Button>
                  </CardContent>
                </Card>

                {/* Import from Mnemonic */}
                <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 border-cyan-400/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Key className="w-5 h-5 text-cyan-400" />
                      Import from Mnemonic
                    </CardTitle>
                    <CardDescription className="text-cyan-300">
                      Enter your 12 or 24 word recovery phrase
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Alert className="bg-yellow-500/10 border-yellow-400/30">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription className="text-yellow-300">
                        Keep your mnemonic phrase secure and private
                      </AlertDescription>
                    </Alert>
                    
                    <Input
                      type="password"
                      placeholder="Enter your mnemonic phrase"
                      value={importMnemonic}
                      onChange={(e) => setImportMnemonic(e.target.value)}
                      className="bg-slate-700/50 border-cyan-400/30 text-white placeholder-cyan-300/60"
                    />
                    
                    <Button 
                      onClick={importWalletFromMnemonic}
                      disabled={isLoading || !importMnemonic.trim()}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white"
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      ) : (
                        <Upload className="w-4 h-4 mr-2" />
                      )}
                      Import Wallet
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Wallet Display */}
          {walletData && (
            <Card className="mt-8 bg-gradient-to-br from-slate-800/80 to-slate-700/80 border-green-400/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-green-400" />
                  Your Wallet
                </CardTitle>
                <CardDescription className="text-green-300">
                  Wallet successfully created/imported
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Address */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-cyan-300">Wallet Address</label>
                  <div className="flex items-center gap-2 p-3 bg-slate-700/50 rounded-lg border border-cyan-400/30">
                    <code className="flex-1 text-white font-mono text-sm break-all">
                      {walletData.address}
                    </code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(walletData.address, 'Address')}
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      {copiedField === 'Address' ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Private Key */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-cyan-300">Private Key</label>
                  <div className="flex items-center gap-2 p-3 bg-slate-700/50 rounded-lg border border-cyan-400/30">
                    <code className="flex-1 text-white font-mono text-sm break-all">
                      {showPrivateKey ? walletData.privateKey : '•'.repeat(66)}
                    </code>
                    <div className="flex gap-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setShowPrivateKey(!showPrivateKey)}
                        className="text-cyan-400 hover:text-cyan-300"
                      >
                        {showPrivateKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(walletData.privateKey, 'Private Key')}
                        className="text-cyan-400 hover:text-cyan-300"
                      >
                        {copiedField === 'Private Key' ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Mnemonic (if available) */}
                {walletData.mnemonic && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-cyan-300">Mnemonic Phrase</label>
                    <div className="flex items-center gap-2 p-3 bg-slate-700/50 rounded-lg border border-cyan-400/30">
                      <code className="flex-1 text-white font-mono text-sm break-all">
                        {showMnemonic ? walletData.mnemonic : '•'.repeat(50)}
                      </code>
                      <div className="flex gap-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setShowMnemonic(!showMnemonic)}
                          className="text-cyan-400 hover:text-cyan-300"
                        >
                          {showMnemonic ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(walletData.mnemonic!, 'Mnemonic')}
                          className="text-cyan-400 hover:text-cyan-300"
                        >
                          {copiedField === 'Mnemonic' ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    onClick={downloadWallet}
                    variant="outline"
                    className="flex-1 border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Wallet
                  </Button>
                  <Button
                    onClick={proceedToSearch}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white"
                  >
                    Continue to Search
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                <Alert className="bg-red-500/10 border-red-400/30">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription className="text-red-300">
                    <strong>Important:</strong> Save your private key and mnemonic phrase in a secure location. 
                    DeepBook cannot recover your wallet if you lose these credentials.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletSetup;
