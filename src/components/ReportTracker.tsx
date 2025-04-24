
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ReportTracker = () => {
  const { toast } = useToast();
  const [referenceCode, setReferenceCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<null | {
    id: string;
    status: string;
    lastUpdated: string;
    updates: Array<{ date: string; message: string }>;
  }>(null);

  // Mock data for demo purposes
  const mockReport = {
    id: 'ABC123XY',
    status: 'Under Review',
    lastUpdated: '2025-04-20',
    updates: [
      { date: '2025-04-20', message: 'Your report has been assigned to an investigator.' },
      { date: '2025-04-18', message: 'Your report has been received and is being assessed.' },
      { date: '2025-04-15', message: 'Report submitted successfully.' }
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!referenceCode.trim()) {
      toast({
        title: "Reference code required",
        description: "Please enter your report reference code.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      
      if (referenceCode.toUpperCase() === 'ABC123XY') {
        setReport(mockReport);
      } else {
        toast({
          title: "Report not found",
          description: "No report found with the provided reference code. Please check and try again.",
          variant: "destructive",
        });
        setReport(null);
      }
    }, 1500);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-6">
        <Search className="h-5 w-5 text-whistleblower-primary mr-2" />
        <h2 className="text-2xl font-bold text-whistleblower-primary">Track Your Report</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="space-y-2 mb-4">
          <Label htmlFor="referenceCode">Enter Your Reference Code</Label>
          <Input 
            id="referenceCode"
            value={referenceCode}
            onChange={(e) => setReferenceCode(e.target.value)}
            placeholder="e.g., ABC123XY"
            className="uppercase"
          />
          <p className="text-sm text-gray-500">
            The unique code you received when you submitted your report.
          </p>
        </div>
        
        <Button 
          type="submit" 
          disabled={loading}
          className="w-full bg-whistleblower-primary hover:bg-whistleblower-primary/90"
        >
          {loading ? 'Searching...' : 'Track Report'}
        </Button>
      </form>
      
      {report && (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 p-4 border-b border-gray-200">
            <h3 className="font-semibold text-lg text-whistleblower-primary">Report Status</h3>
            <p className="text-sm text-gray-500">Reference Code: {report.id}</p>
          </div>
          
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="font-medium">Current Status:</span>
                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {report.status}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                Last Updated: {report.lastUpdated}
              </div>
            </div>
            
            <h4 className="font-medium mb-3">Status Updates</h4>
            <div className="space-y-3">
              {report.updates.map((update, index) => (
                <div key={index} className="relative pl-6 pb-4">
                  {index !== report.updates.length - 1 && (
                    <div className="absolute h-full w-px bg-gray-200 left-2 top-2"></div>
                  )}
                  <div className="absolute w-4 h-4 rounded-full bg-whistleblower-accent left-0 top-1"></div>
                  <div>
                    <p className="text-sm font-medium">{update.date}</p>
                    <p className="text-sm text-gray-600">{update.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Check back regularly for updates on your report. All communication remains anonymous and secure.
            </p>
          </div>
        </div>
      )}
      
      {!report && !loading && (
        <div className="text-center py-6 border border-dashed border-gray-300 rounded bg-gray-50">
          <Search className="h-12 w-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">
            Enter your reference code above to track your report status.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            For demonstration purposes, try using code: ABC123XY
          </p>
        </div>
      )}
    </div>
  );
};

export default ReportTracker;
