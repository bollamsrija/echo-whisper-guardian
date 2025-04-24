
import React from 'react';
import { ShieldCheck, Lock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-whistleblower-primary to-whistleblower-secondary py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Safe & Anonymous Whistleblowing
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Report corruption, fraud, and unethical conduct without revealing your identity. 
              Your information is secure and encrypted.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={() => navigate('/report')}
                size="lg"
                className="bg-white text-whistleblower-primary hover:bg-gray-100">
                Submit a Report
              </Button>
              <Button 
                onClick={() => navigate('/track')}
                variant="outline" 
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-whistleblower-primary">
                Track Your Report
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl w-full max-w-md">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">100% Anonymous</h3>
                    <p className="text-gray-200">Your identity is protected. No personal information is recorded or stored.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Lock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">End-to-End Encrypted</h3>
                    <p className="text-gray-200">All communications are secured with military-grade encryption.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Eye className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Secure File Sharing</h3>
                    <p className="text-gray-200">Safely share evidence and documentation with our secure upload system.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
