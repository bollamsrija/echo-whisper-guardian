
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchAdminReports, updateReportStatus } from '@/lib/api';
import { Report } from '@/lib/models';
import { useToast } from '@/hooks/use-toast';
import AdminReportsList from '@/components/AdminReportsList';
import AdminReportDetail from '@/components/AdminReportDetail';
import { LogOut } from 'lucide-react';

interface AdminDashboardProps {
  user: {
    username: string;
    role: string;
  };
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user, onLogout }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [reports, setReports] = useState<Report[]>([]);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [activeTab, setActiveTab] = useState('reports');

  useEffect(() => {
    const loadReports = async () => {
      setLoading(true);
      try {
        const data = await fetchAdminReports();
        setReports(data);
      } catch (error) {
        toast({
          title: "Error loading reports",
          description: "There was a problem loading the reports.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    
    loadReports();
  }, [toast]);

  const handleReportClick = (report: Report) => {
    setSelectedReport(report);
    setActiveTab('detail');
  };

  const handleStatusUpdate = async (reportId: string, newStatus: string, message: string) => {
    try {
      const success = await updateReportStatus(reportId, newStatus, message);
      
      if (success) {
        // Update local reports state
        setReports(prevReports => 
          prevReports.map(report => {
            if (report.id === reportId) {
              const updatedReport = {
                ...report,
                status: newStatus as any,
                lastUpdated: new Date().toISOString().split('T')[0],
                updates: [
                  {
                    date: new Date().toISOString().split('T')[0],
                    message: message,
                    status: newStatus
                  },
                  ...report.updates
                ]
              };
              if (selectedReport?.id === reportId) {
                setSelectedReport(updatedReport);
              }
              return updatedReport;
            }
            return report;
          })
        );
        
        toast({
          title: "Status updated",
          description: `Report ${reportId} status updated to ${newStatus}`,
        });
      }
    } catch (error) {
      toast({
        title: "Error updating status",
        description: "There was a problem updating the report status.",
        variant: "destructive",
      });
    }
  };

  const handleBackToList = () => {
    setSelectedReport(null);
    setActiveTab('reports');
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-whistleblower-primary">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div>
              <span className="text-sm text-gray-500">Logged in as: </span>
              <span className="font-semibold">{user.username}</span>
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-whistleblower-primary/20 text-whistleblower-primary">
                {user.role}
              </span>
            </div>
            <Button 
              variant="outline"
              size="sm"
              onClick={onLogout}
              className="flex items-center"
            >
              <LogOut className="h-4 w-4 mr-1" />
              Logout
            </Button>
          </div>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="p-6">
        <TabsList className="mb-4">
          <TabsTrigger value="reports">Reports List</TabsTrigger>
          <TabsTrigger value="detail" disabled={!selectedReport}>Report Detail</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="reports">
          <AdminReportsList 
            reports={reports}
            loading={loading}
            onReportClick={handleReportClick}
          />
        </TabsContent>
        
        <TabsContent value="detail">
          {selectedReport && (
            <AdminReportDetail 
              report={selectedReport}
              onStatusUpdate={handleStatusUpdate}
              onBack={handleBackToList}
            />
          )}
        </TabsContent>
        
        <TabsContent value="settings">
          <div className="p-4 rounded-md bg-gray-50">
            <h2 className="text-xl font-semibold mb-4">Admin Settings</h2>
            <p className="text-gray-500">Admin settings functionality would be implemented here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
