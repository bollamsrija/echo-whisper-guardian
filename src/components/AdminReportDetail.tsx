
import React, { useState } from 'react';
import { Report } from '@/lib/models';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft } from 'lucide-react';

interface AdminReportDetailProps {
  report: Report;
  onStatusUpdate: (reportId: string, newStatus: string, message: string) => Promise<void>;
  onBack: () => void;
}

const statusOptions = [
  'Submitted',
  'Under Review',
  'Investigation',
  'Closed',
  'Rejected'
];

const AdminReportDetail: React.FC<AdminReportDetailProps> = ({ report, onStatusUpdate, onBack }) => {
  const [newStatus, setNewStatus] = useState(report.status);
  const [updateMessage, setUpdateMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!updateMessage.trim()) {
      return;
    }
    
    setIsSubmitting(true);
    try {
      await onStatusUpdate(report.id, newStatus, updateMessage);
      setUpdateMessage('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onBack} 
        className="mb-4 flex items-center"
      >
        <ArrowLeft className="h-4 w-4 mr-1" /> Back to List
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-whistleblower-primary">{report.title}</h2>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {report.status}
              </span>
            </div>
            
            <div className="mb-4">
              <span className="text-sm font-medium text-gray-500">Reference ID:</span>
              <span className="ml-1 font-mono">{report.id}</span>
            </div>
            
            <div className="mb-4">
              <span className="text-sm font-medium text-gray-500">Category:</span>
              <span className="ml-1">{report.category}</span>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Description:</h3>
              <div className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap">
                {report.description}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {report.date && (
                <div>
                  <span className="text-sm font-medium text-gray-500">Date of Incident:</span>
                  <span className="ml-1">{report.date}</span>
                </div>
              )}
              
              {report.location && (
                <div>
                  <span className="text-sm font-medium text-gray-500">Location:</span>
                  <span className="ml-1">{report.location}</span>
                </div>
              )}
            </div>
            
            {report.personsInvolved && (
              <div className="mb-6">
                <h3 className="font-medium mb-2">Persons Involved:</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  {report.personsInvolved}
                </div>
              </div>
            )}
            
            {report.evidenceDescription && (
              <div className="mb-6">
                <h3 className="font-medium mb-2">Evidence Information:</h3>
                <div className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap">
                  {report.evidenceDescription}
                </div>
              </div>
            )}
            
            {report.files && report.files.length > 0 && (
              <div className="mb-6">
                <h3 className="font-medium mb-2">Attached Files:</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <ul className="list-disc list-inside space-y-1">
                    {report.files.map((file, index) => (
                      <li key={index}>{file}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-6">
            <h3 className="font-medium mb-4">Update Status</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="status">New Status</Label>
                <Select value={newStatus} onValueChange={setNewStatus}>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select new status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Update Message</Label>
                <Textarea
                  id="message"
                  value={updateMessage}
                  onChange={(e) => setUpdateMessage(e.target.value)}
                  placeholder="Enter status update message"
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting || !updateMessage.trim()}
                className="w-full bg-whistleblower-primary hover:bg-whistleblower-primary/90"
              >
                {isSubmitting ? 'Updating...' : 'Save Update'}
              </Button>
            </form>
          </div>
          
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <h3 className="font-medium mb-4">Status History</h3>
            
            <div className="space-y-4">
              {report.updates.map((update, index) => (
                <div key={index} className="border-l-2 border-whistleblower-primary pl-4 pb-4">
                  <p className="text-sm font-medium">{update.date}</p>
                  <p className="text-sm">
                    {update.status && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 mr-2">
                        {update.status}
                      </span>
                    )}
                    {update.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReportDetail;
