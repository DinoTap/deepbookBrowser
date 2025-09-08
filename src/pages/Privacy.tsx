import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
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
            <h1 className="text-2xl font-bold text-white">Privacy Policy</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 rounded-xl p-8 border border-cyan-400/30 backdrop-blur-sm">
            <div className="prose prose-invert max-w-none">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Privacy Policy</h2>
                <p className="text-cyan-300">Last updated: {new Date().toLocaleDateString()}</p>
              </div>

              <div className="space-y-8 text-gray-300">
                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">1. Introduction</h3>
                  <p className="leading-relaxed">
                    Deepbook ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our crypto browser and related services.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">2. Information We Collect</h3>
                  
                  <h4 className="text-lg font-medium text-cyan-300 mb-3">2.1 Personal Information</h4>
                  <p className="leading-relaxed mb-4">
                    We may collect personal information that you voluntarily provide, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                    <li>Email address (if you choose to register)</li>
                    <li>Username or display name</li>
                    <li>Profile information</li>
                    <li>Communication preferences</li>
                  </ul>

                  <h4 className="text-lg font-medium text-cyan-300 mb-3">2.2 Usage Information</h4>
                  <p className="leading-relaxed mb-4">
                    We automatically collect certain information about your use of Deepbook:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>IP address and general location</li>
                    <li>Pages visited and features used</li>
                    <li>Time spent on different sections</li>
                    <li>Error logs and performance data</li>
                  </ul>

                  <h4 className="text-lg font-medium text-cyan-300 mb-3">2.3 Blockchain Information</h4>
                  <p className="leading-relaxed mb-4">
                    When you connect your wallet or perform transactions:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Public wallet addresses (never private keys)</li>
                    <li>Transaction history and amounts</li>
                    <li>Token balances and holdings</li>
                    <li>DeFi protocol interactions</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">3. How We Use Your Information</h3>
                  <p className="leading-relaxed mb-4">
                    We use the collected information for the following purposes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide and maintain the Deepbook service</li>
                    <li>Process transactions and DeFi operations</li>
                    <li>Improve user experience and functionality</li>
                    <li>Analyze usage patterns and optimize performance</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Send important updates and security notifications</li>
                    <li>Comply with legal obligations and prevent fraud</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">4. Information Sharing and Disclosure</h3>
                  <p className="leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share information in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Service Providers:</strong> With trusted third-party services that help us operate Deepbook</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">5. Data Security</h3>
                  <p className="leading-relaxed mb-4">
                    We implement industry-standard security measures to protect your information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>End-to-end encryption for sensitive data</li>
                    <li>Secure servers and infrastructure</li>
                    <li>Regular security audits and updates</li>
                    <li>Access controls and authentication</li>
                    <li>Monitoring for suspicious activities</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">6. Your Rights and Choices</h3>
                  <p className="leading-relaxed mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                    <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                    <li><strong>Object:</strong> Object to certain processing activities</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">7. Cookies and Tracking</h3>
                  <p className="leading-relaxed mb-4">
                    We use cookies and similar technologies to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Improve website functionality and performance</li>
                    <li>Provide personalized content and features</li>
                  </ul>
                  <p className="leading-relaxed">
                    You can control cookie settings through your browser preferences. However, disabling cookies may affect some features of Deepbook.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">8. Third-Party Services</h3>
                  <p className="leading-relaxed mb-4">
                    Deepbook integrates with various third-party services and protocols:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Blockchain networks and DeFi protocols</li>
                    <li>Price feeds and market data providers</li>
                    <li>Analytics and monitoring services</li>
                    <li>Customer support platforms</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    These services have their own privacy policies. We encourage you to review them.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">9. Data Retention</h3>
                  <p className="leading-relaxed">
                    We retain your personal information for as long as necessary to provide our services and comply with legal obligations. When we no longer need your information, we will securely delete or anonymize it.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">10. International Data Transfers</h3>
                  <p className="leading-relaxed">
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">11. Children's Privacy</h3>
                  <p className="leading-relaxed">
                    Deepbook is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you believe we have collected such information, please contact us immediately.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">12. Changes to This Policy</h3>
                  <p className="leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-4">13. Contact Us</h3>
                  <p className="leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="p-4 bg-slate-700/50 rounded-lg">
                    <p className="text-cyan-300">Email: privacy@deepbook.com</p>
                    <p className="text-cyan-300">Telegram: @deepbookai</p>
                    <p className="text-cyan-300">Twitter: @deepbook_ai</p>
                    <p className="text-cyan-300">Address: [Your Business Address]</p>
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

export default Privacy; 