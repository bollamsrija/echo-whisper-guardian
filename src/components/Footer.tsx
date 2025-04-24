
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-whistleblower-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6" />
              <span className="text-lg font-semibold">Anonymous Whistleblower</span>
            </div>
            <p className="text-sm text-gray-300">
              A secure platform for reporting unethical conduct, corruption, and misconduct 
              while protecting your identity.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/report" className="text-gray-300 hover:text-whistleblower-accent transition-colors">
                  Submit a Report
                </Link>
              </li>
              <li>
                <Link to="/track" className="text-gray-300 hover:text-whistleblower-accent transition-colors">
                  Track Your Report
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-whistleblower-accent transition-colors">
                  Whistleblowing Resources
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-whistleblower-accent transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Security Information</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">
                <span className="font-medium">Encryption:</span> End-to-end encryption for all communications
              </li>
              <li className="text-gray-300">
                <span className="font-medium">Anonymity:</span> No IP logging or user tracking
              </li>
              <li className="text-gray-300">
                <span className="font-medium">Data:</span> Secured with AES-256 encryption
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-sm text-center text-gray-400">
          <p>© {new Date().getFullYear()} Anonymous Whistleblower Platform. All rights reserved.</p>
          <p className="mt-2">This platform is designed to protect your identity. No personal information is stored.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
