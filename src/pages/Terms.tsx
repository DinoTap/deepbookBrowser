import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Terms = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 border-b border-cyan-400/20 px-4 py-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-cyan-300 hover:bg-cyan-400/20 hover:text-cyan-100"
              onClick={handleBack}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl font-bold text-white">Terms and Conditions</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 rounded-xl p-8 border border-cyan-400/30 backdrop-blur-sm">
            <div className="prose prose-invert max-w-none">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Terms and Conditions</h2>
                <p className="text-cyan-300">Last updated: {new Date().toLocaleDateString()}</p>
              </div>

              <div className="space-y-8 text-gray-300">
                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h3>
                  <p className="leading-relaxed">
                    By accessing and using Deepbook ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">2. Description of Service</h3>
                  <p className="leading-relaxed">
                    Deepbook is a crypto browser that provides Web3 browsing capabilities, DeFi integration, and AI-powered trading features. The Service includes but is not limited to:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                    <li>Secure crypto wallet integration</li>
                    <li>DeFi protocol access and trading</li>
                    <li>AI-powered market analysis</li>
                    <li>Real-time portfolio tracking</li>
                    <li>Cross-chain transaction support</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">3. User Responsibilities</h3>
                  <p className="leading-relaxed mb-4">
                    As a user of Deepbook, you agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Maintain the security of your private keys and wallet credentials</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Not use the Service for illegal activities or fraud</li>
                    <li>Not attempt to reverse engineer or hack the Service</li>
                    <li>Report any security vulnerabilities you discover</li>
                    <li>Keep your software and security measures up to date</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">4. Financial Risks</h3>
                  <p className="leading-relaxed">
                    Cryptocurrency trading involves substantial risk of loss and is not suitable for all investors. You acknowledge that:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                    <li>Cryptocurrency prices are highly volatile</li>
                    <li>You may lose some or all of your invested capital</li>
                    <li>Past performance does not guarantee future results</li>
                    <li>You should only invest what you can afford to lose</li>
                    <li>You are responsible for your own trading decisions</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">5. Security and Privacy</h3>
                  <p className="leading-relaxed">
                    While Deepbook implements industry-standard security measures, you understand that:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                    <li>No system is completely secure</li>
                    <li>You are responsible for protecting your private keys</li>
                    <li>We cannot recover lost or stolen private keys</li>
                    <li>You should use additional security measures like hardware wallets</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">6. Limitation of Liability</h3>
                  <p className="leading-relaxed">
                    Deepbook and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">7. Intellectual Property</h3>
                  <p className="leading-relaxed">
                    The Service and its original content, features, and functionality are and will remain the exclusive property of Deepbook and its licensors. The Service is protected by copyright, trademark, and other laws.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">8. Termination</h3>
                  <p className="leading-relaxed">
                    We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">9. Governing Law</h3>
                  <p className="leading-relaxed">
                    These Terms shall be interpreted and governed by the laws of the jurisdiction in which Deepbook operates, without regard to its conflict of law provisions.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">10. Changes to Terms</h3>
                  <p className="leading-relaxed">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">11. Contact Information</h3>
                  <p className="leading-relaxed">
                    If you have any questions about these Terms and Conditions, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-slate-700/50 rounded-lg">
                    <p className="text-cyan-300">Email: legal@deepbook.com</p>
                    <p className="text-cyan-300">Telegram: @deepbookai</p>
                    <p className="text-cyan-300">Twitter: @deepbook_ai</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms; 