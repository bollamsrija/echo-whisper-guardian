
import React from 'react';
import { Shield, Lock, Mail, File, Bell, Search } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Anonymous Reporting",
    description: "Submit reports without revealing your identity. Our system is designed to protect whistleblowers from retaliation."
  },
  {
    icon: Lock,
    title: "Encrypted Communication",
    description: "All data is encrypted using AES-256 encryption, ensuring that your information remains confidential and secure."
  },
  {
    icon: Mail,
    title: "Secure Messaging",
    description: "Communicate with investigators through our encrypted messaging system without compromising your identity."
  },
  {
    icon: File,
    title: "Secure File Uploads",
    description: "Submit evidence and documentation securely. All files are encrypted and metadata is stripped to protect your identity."
  },
  {
    icon: Search,
    title: "Case Tracking",
    description: "Track the progress of your report using a unique identifier while maintaining your anonymity."
  },
  {
    icon: Bell,
    title: "Anonymous Updates",
    description: "Receive updates on your case without revealing your identity through our secure notification system."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-whistleblower-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-whistleblower-primary mb-4">
            Secure Whistleblowing Features
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform is designed with security and anonymity as the highest priorities. 
            We use advanced technologies to ensure your information is protected.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="inline-block p-3 bg-whistleblower-primary/10 rounded-full mb-4">
                <feature.icon className="h-6 w-6 text-whistleblower-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-whistleblower-text">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
