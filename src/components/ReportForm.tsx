import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Lock } from 'lucide-react';
import { submitReport } from '@/lib/api';

const categories = [
  'Corruption',
  'Fraud',
  'Harassment',
  'Discrimination',
  'Safety Violations',
  'Environmental Violations',
  'Financial Misconduct',
  'Other'
];

const ReportForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    personsInvolved: '',
    evidenceDescription: ''
  });
  const [fileAttached, setFileAttached] = useState(false);
  const [anonymousUpdates, setAnonymousUpdates] = useState(false);
  const [reportId, setReportId] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileAttached(e.target.files !== null && e.target.files.length > 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !category) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields to submit your report.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    try {
      const result = await submitReport({
        title: formData.title,
        description: formData.description,
        category: category,
        date: formData.date,
        location: formData.location,
        personsInvolved: formData.personsInvolved,
        evidenceDescription: formData.evidenceDescription,
        status: 'Submitted',
        lastUpdated: new Date().toISOString().split('T')[0],
        createdAt: new Date().toISOString().split('T')[0],
        updates: [{ 
          date: new Date().toISOString().split('T')[0], 
          message: 'Report submitted successfully.',
          status: 'Submitted'
        }]
      });
      
      setLoading(false);
      
      if (result.success && result.referenceCode) {
        setReportId(result.referenceCode);
        toast({
          title: "Report submitted successfully",
          description: `Your report has been submitted securely. Your reference code is: ${result.referenceCode}`,
        });
        
        // Reset form
        setFormData({
          title: '',
          description: '',
          date: '',
          location: '',
          personsInvolved: '',
          evidenceDescription: ''
        });
        setCategory('');
        setFileAttached(false);
        setAnonymousUpdates(false);
      }
    } catch (error) {
      setLoading(false);
      toast({
        title: "Error submitting report",
        description: "There was a problem submitting your report. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-6">
        <Lock className="h-5 w-5 text-whistleblower-primary mr-2" />
        <h2 className="text-2xl font-bold text-whistleblower-primary">Secure Report Submission</h2>
      </div>
      
      {reportId ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-green-700 mb-2">Report Submitted Successfully</h3>
          <p className="mb-4">Your report has been submitted securely and anonymously.</p>
          <div className="bg-white p-4 rounded-md inline-block mb-4">
            <p className="text-sm text-gray-500 mb-1">Your Reference Code:</p>
            <p className="text-2xl font-mono font-bold tracking-wider">{reportId}</p>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            Please save this code securely. You will need it to check the status of your report.
          </p>
          <Button 
            onClick={() => window.location.href = '/track'} 
            className="bg-whistleblower-primary hover:bg-whistleblower-primary/90"
          >
            Track Your Report
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <Label htmlFor="category">Category <span className="text-red-500">*</span></Label>
            <Select value={category} onValueChange={setCategory} required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select report category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="title">Report Title <span className="text-red-500">*</span></Label>
            <Input 
              id="title"
              name="title"
              placeholder="Brief title of the incident"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="description">Detailed Description <span className="text-red-500">*</span></Label>
            <Textarea 
              id="description"
              name="description"
              placeholder="Provide a detailed account of the incident or misconduct"
              value={formData.description}
              onChange={handleInputChange}
              className="min-h-[150px]"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="date">When did it happen?</Label>
              <Input 
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="location">Where did it happen?</Label>
              <Input 
                id="location"
                name="location"
                placeholder="Location of the incident"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="personsInvolved">Persons Involved</Label>
            <Input 
              id="personsInvolved"
              name="personsInvolved"
              placeholder="Names or positions of people involved"
              value={formData.personsInvolved}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="evidenceDescription">Evidence Information</Label>
            <Textarea 
              id="evidenceDescription"
              name="evidenceDescription"
              placeholder="Describe any evidence you have (documents, emails, recordings, etc.)"
              value={formData.evidenceDescription}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="fileUpload">Attach Files (Optional)</Label>
            <div className="border border-gray-300 rounded-md p-4">
              <Input 
                id="fileUpload"
                type="file"
                multiple
                onChange={handleFileChange}
                className="mb-2"
              />
              <p className="text-sm text-gray-500">
                Files are encrypted and metadata is removed to protect your identity. 
                Max file size: 25MB. Supported formats: PDF, JPG, PNG, MP3, MP4.
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch 
              id="anonymousUpdates"
              checked={anonymousUpdates}
              onCheckedChange={setAnonymousUpdates}
            />
            <Label htmlFor="anonymousUpdates" className="cursor-pointer">
              I want to receive anonymous updates on this report
            </Label>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-600">
            <p className="font-medium text-whistleblower-primary mb-2">Privacy & Security Notice:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Your IP address is not logged</li>
              <li>All data is encrypted end-to-end</li>
              <li>File metadata (including author information) is automatically removed</li>
              <li>This form doesn't collect personal information unless you choose to provide it</li>
            </ul>
          </div>
          
          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-whistleblower-primary hover:bg-whistleblower-primary/90"
          >
            {loading ? 'Submitting Securely...' : 'Submit Secure Report'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ReportForm;
