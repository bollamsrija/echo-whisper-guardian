
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReportTracker from '@/components/ReportTracker';

const Track = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-whistleblower-primary mb-2 text-center">
            Track Your Report
          </h1>
          <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Enter your reference code to securely check the status of your report and view any updates 
            while maintaining your anonymity.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <ReportTracker />
          </div>
          
          <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold text-whistleblower-primary mb-4">
              About Report Tracking
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Secure Access:</strong> Your reference code is the only way to access information about your report. 
                No personal information is required to check your report status.
              </p>
              <p>
                <strong>Anonymous Communication:</strong> You can provide additional information or respond to questions 
                about your report without revealing your identity.
              </p>
              <p>
                <strong>Protection:</strong> All communication between you and our system is encrypted and secure. 
                Your anonymity is maintained throughout the process.
              </p>
              <p>
                <strong>Lost Reference Code:</strong> For security reasons, we cannot retrieve your reference code if it's lost. 
                Please store it securely.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Track;
