
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Access Securely",
    description: "Visit our platform using a secure browser. For enhanced anonymity, consider using the Tor browser.",
  },
  {
    number: "02",
    title: "Submit Your Report",
    description: "Fill out the secure form with details of the incident. Be specific and provide as much information as possible.",
  },
  {
    number: "03",
    title: "Receive Reference Code",
    description: "You'll receive a unique reference code to track your report. Store it securely as it's the only way to access your case.",
  },
  {
    number: "04",
    title: "Stay Updated",
    description: "Check back using your reference code to see updates, answer follow-up questions, or provide additional information.",
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-whistleblower-primary mb-4">
            How Secure Whistleblowing Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our process is designed to be simple while maintaining the highest level of security and anonymity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative"
            >
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="text-4xl font-bold text-whistleblower-accent/30 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-whistleblower-primary">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-1 bg-whistleblower-accent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
