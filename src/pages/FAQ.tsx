
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
  {
    question: "What is whistleblowing?",
    answer: "Whistleblowing is the act of reporting waste, fraud, abuse, corruption, or dangers to public health and safety to someone who is in a position to rectify the wrongdoing. A whistleblower is a person who exposes information or activity that is deemed illegal, unethical, or incorrect within a private or public organization."
  },
  {
    question: "How is my anonymity protected on this platform?",
    answer: "Our platform employs multiple layers of security to ensure your anonymity: 1) No IP logging - your IP address is not recorded, 2) End-to-end encryption for all communications, 3) Metadata stripping from all uploaded files, 4) No user accounts or personal identifiers required, 5) Access to reports only via secure reference codes, and 6) Option to use Tor for additional anonymity."
  },
  {
    question: "What kind of misconduct can I report?",
    answer: "You can report various types of misconduct, including but not limited to: corruption, fraud, bribery, conflicts of interest, harassment, discrimination, safety violations, environmental violations, financial misconduct, legal/regulatory violations, and ethical breaches. Any information about illegal or unethical activities in the public interest can be reported."
  },
  {
    question: "What happens after I submit a report?",
    answer: "After submission, your report is securely reviewed and assessed for authenticity and actionable information. If necessary, you may receive follow-up questions through the secure platform. Valid reports are forwarded to appropriate authorities or oversight bodies while maintaining your anonymity. You can track the progress of your report using your unique reference code."
  },
  {
    question: "How detailed should my report be?",
    answer: "Your report should be as detailed as possible without revealing your identity (unless you choose to). Include specific information about what happened, when and where it occurred, who was involved, how the misconduct was carried out, and why you believe it's wrongdoing. Supporting evidence such as documents, photos, or recordings strengthens your report, but only include what you have legally obtained."
  },
  {
    question: "What evidence should I include?",
    answer: "Include any evidence that supports your allegations, such as documents, emails, photos, videos, audio recordings, meeting minutes, financial records, or internal communications. Be specific about dates, locations, people involved, and the sequence of events. Only share evidence that you have legally obtained and have the right to disclose."
  },
  {
    question: "Is there a risk of retaliation?",
    answer: "While many jurisdictions have laws protecting whistleblowers from retaliation, the risk can never be completely eliminated. Our platform helps minimize this risk by protecting your identity. For maximum protection, avoid sharing identifiable information in your report, use secure devices when accessing the platform, and consider consulting with a lawyer who specializes in whistleblower protection."
  },
  {
    question: "I lost my reference code. Can I recover access to my report?",
    answer: "For security reasons, we cannot recover lost reference codes. Since we don't collect personal information that could verify your identity, there's no way to prove you're the original submitter. If you lose your reference code, you would need to submit a new report. We strongly recommend storing your reference code securely, such as in an encrypted note or password manager."
  },
  {
    question: "Can I communicate with investigators after submitting?",
    answer: "Yes, you can communicate with investigators while maintaining your anonymity. When you check your report status using your reference code, you'll see any questions or requests for additional information from investigators. You can respond to these without revealing your identity. All communications remain encrypted and secure."
  },
  {
    question: "What devices and browsers are recommended for maximum security?",
    answer: "For maximum security, we recommend: 1) Using the Tor Browser, which anonymizes your internet connection, 2) Using a device that is not connected to your personal or work accounts, 3) Connecting from a public Wi-Fi network rather than home or work, 4) Using a virtual machine or Tails OS for advanced anonymity, and 5) Ensuring your device is free of malware and keyloggers."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-whistleblower-primary mb-2 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Find answers to common questions about whistleblowing, our platform's security, 
            and how to effectively report misconduct.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md border border-gray-200">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-8 p-6 bg-whistleblower-primary text-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Still Have Questions?</h2>
              <p className="mb-4">
                For security reasons, we don't offer direct contact options. However, you can submit 
                general questions through our secure reporting form.
              </p>
              <p className="text-sm opacity-80">
                Note: For specific questions about an existing report, please use the report tracking system 
                with your reference code.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
