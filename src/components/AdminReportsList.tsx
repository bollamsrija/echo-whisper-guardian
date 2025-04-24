
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Report } from '@/lib/models';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

interface AdminReportsListProps {
  reports: Report[];
  loading: boolean;
  onReportClick: (report: Report) => void;
}

const AdminReportsList: React.FC<AdminReportsListProps> = ({ reports, loading, onReportClick }) => {
  const getStatusClassName = (status: string) => {
    switch (status) {
      case 'Submitted':
        return 'bg-blue-100 text-blue-800';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Investigation':
        return 'bg-purple-100 text-purple-800';
      case 'Closed':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Loading reports...</p>
      </div>
    );
  }

  if (!reports.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No reports found.</p>
      </div>
    );
  }

  return (
    <Table>
      <TableCaption>List of whistleblower reports</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Reference ID</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last Updated</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reports.map((report) => (
          <TableRow key={report.id}>
            <TableCell className="font-mono">{report.id}</TableCell>
            <TableCell>{report.category}</TableCell>
            <TableCell>{report.title}</TableCell>
            <TableCell>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClassName(report.status)}`}>
                {report.status}
              </span>
            </TableCell>
            <TableCell>{report.lastUpdated}</TableCell>
            <TableCell>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onReportClick(report)}
                className="flex items-center"
              >
                <Eye className="h-4 w-4 mr-1" /> View
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AdminReportsList;
