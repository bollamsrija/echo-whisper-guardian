
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-whistleblower-primary mb-2 text-center">
            Whistleblower Resources
          </h1>
          <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Educational materials and resources to help whistleblowers understand their rights,
            protect their identity, and make effective reports.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Know Your Rights</CardTitle>
                <CardDescription>Understanding whistleblower protections</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Learn about legal protections available to whistleblowers in different jurisdictions,
                  and how to qualify for whistleblower protection programs.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Digital Security</CardTitle>
                <CardDescription>Tools and techniques for staying secure online</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Discover tools and practices to protect your digital identity, secure your communications,
                  and avoid surveillance when reporting sensitive information.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Document Collection</CardTitle>
                <CardDescription>Guidelines for gathering evidence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Best practices for safely collecting, storing, and submitting documentary evidence
                  of wrongdoing while protecting yourself from legal risks.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-whistleblower-primary mb-6">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md border border-gray-200">
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  What is whistleblowing?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Whistleblowing is the act of reporting waste, fraud, abuse, corruption, or dangers to public health and safety
                    to someone who is in a position to rectify the wrongdoing. A whistleblower is a person who exposes information
                    or activity that is deemed illegal, unethical, or incorrect within a private or public organization.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  How is my anonymity protected?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Our platform uses advanced encryption and security measures to protect your identity. We don't log IP addresses,
                    we strip metadata from all uploaded files, and we use end-to-end encryption for all communications. You're
                    identified only by a randomly generated reference code, and no personal information is required to submit or
                    track reports.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  What happens after I submit a report?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    After submission, your report is reviewed by our team to ensure it contains sufficient information to act upon.
                    If more information is needed, you'll be notified when you check your report status. Valid reports are forwarded
                    to the appropriate authorities or oversight bodies while maintaining your anonymity. You can track the progress
                    using your report reference code.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  What type of evidence should I include?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Include any evidence that supports your report such as documents, emails, photos, videos, or audio recordings.
                    Be specific about dates, locations, and people involved. Remember to only upload files that you have legally
                    obtained and have the right to share. The more detailed and well-documented your report, the more likely it is
                    to be acted upon.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Am I legally protected as a whistleblower?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Legal protections for whistleblowers vary by country and jurisdiction. Many countries have laws that prohibit
                    retaliation against whistleblowers, but the scope and strength of these protections vary widely. We recommend
                    consulting with a legal professional who specializes in whistleblower protection before reporting if you have
                    concerns about potential legal implications or workplace retaliation.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <h2 className="text-xl font-semibold text-whistleblower-primary mb-4">
                Additional Resources
              </h2>
              <div className="space-y-4">
                <div className="p-4 border border-gray-100 rounded hover:bg-gray-50 transition-colors">
                  <h3 className="font-medium mb-1">Digital Security Tools</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Tools to protect your digital identity and secure your communications.
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    <li>Tor Browser - For anonymous web browsing</li>
                    <li>Signal - For encrypted messaging</li>
                    <li>VeraCrypt - For file encryption</li>
                    <li>Tails OS - A secure, amnesic operating system</li>
                  </ul>
                </div>
                
                <div className="p-4 border border-gray-100 rounded hover:bg-gray-50 transition-colors">
                  <h3 className="font-medium mb-1">Organizations Supporting Whistleblowers</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    These organizations offer guidance and support to whistleblowers.
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    <li>Government Accountability Project</li>
                    <li>Whistleblower Aid</li>
                    <li>National Whistleblower Center</li>
                    <li>International Network for Environmental Compliance and Enforcement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
