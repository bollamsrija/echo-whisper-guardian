
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReportForm from '@/components/ReportForm';

const Report = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-whistleblower-primary mb-2 text-center">
            Submit a Secure Report
          </h1>
          <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Use this secure form to anonymously report corruption, fraud, or unethical conduct. 
            Your identity is protected throughout the process.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <ReportForm />
          </div>
          
          <div className="max-w-3xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold text-whistleblower-primary mb-4">
              Important Information About Your Report
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Anonymity Protection:</strong> Your IP address is not stored, and all identifying information is removed 
                from your report. You can submit completely anonymously.
              </p>
              <p>
                <strong>Reference Code:</strong> After submission, you'll receive a unique reference code. 
                Store this securely as it's the only way to track your report or provide additional information.
              </p>
              <p>
                <strong>Evidence Handling:</strong> All uploaded files are encrypted and have metadata (like creator information) 
                automatically removed to protect your identity.
              </p>
              <p>
                <strong>Follow-up:</strong> If you opt to receive updates, you can check the status of your report using your 
                reference code without revealing your identity.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Report;
