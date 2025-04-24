
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const WhyReport = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-whistleblower-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">Why Reporting Matters</h2>
            
            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-md">
                <h3 className="font-semibold text-xl mb-2">Protect Public Interest</h3>
                <p>Whistleblowers play a crucial role in exposing corruption, fraud, and abuse that might otherwise remain hidden.</p>
              </div>
              
              <div className="bg-white/10 p-4 rounded-md">
                <h3 className="font-semibold text-xl mb-2">Ensure Accountability</h3>
                <p>Your report can help hold individuals and organizations accountable for their actions and prevent further misconduct.</p>
              </div>
              
              <div className="bg-white/10 p-4 rounded-md">
                <h3 className="font-semibold text-xl mb-2">Promote Ethical Culture</h3>
                <p>By reporting wrongdoing, you contribute to a culture of integrity, transparency, and ethical behavior.</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Your Report Makes a Difference</h3>
              <p className="mb-6">
                Whistleblowers have been responsible for uncovering some of the most significant cases of corruption and fraud in history. 
                Your courage in reporting wrongdoing can lead to meaningful change and justice.
              </p>
              <p className="mb-6">
                Our platform is designed to protect you while ensuring that your information reaches the right authorities. 
                Your anonymity is our priority.
              </p>
              <Button 
                onClick={() => navigate('/report')}
                size="lg"
                className="bg-white text-whistleblower-primary hover:bg-gray-100 w-full">
                Submit a Secure Report Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyReport;
