
import { Report } from './models';
import { supabase } from './supabase';

export const fetchReport = async (referenceCode: string): Promise<Report | null> => {
  const { data, error } = await supabase
    .from('reports')
    .select('*')
    .eq('id', referenceCode.toUpperCase())
    .single();
    
  if (error || !data) return null;
  return data as Report;
};

export const submitReport = async (reportData: Partial<Report>): Promise<{success: boolean, referenceCode?: string}> => {
  const referenceCode = Math.random().toString(36).substring(2, 10).toUpperCase();
  
  const newReport: Report = {
    id: referenceCode,
    title: reportData.title || '',
    category: reportData.category || '',
    description: reportData.description || '',
    date: reportData.date,
    location: reportData.location,
    personsInvolved: reportData.personsInvolved,
    evidenceDescription: reportData.evidenceDescription,
    status: 'Submitted',
    lastUpdated: new Date().toISOString().split('T')[0],
    createdAt: new Date().toISOString().split('T')[0],
    updates: [{ 
      date: new Date().toISOString().split('T')[0], 
      message: 'Report submitted successfully.',
      status: 'Submitted'
    }],
    files: reportData.files
  };
  
  const { error } = await supabase
    .from('reports')
    .insert(newReport);
  
  return {
    success: !error,
    referenceCode: !error ? referenceCode : undefined
  };
};

export const fetchAdminReports = async (): Promise<Report[]> => {
  const { data, error } = await supabase
    .from('reports')
    .select('*')
    .order('created_at', { ascending: false });
    
  if (error) throw error;
  return data as Report[];
};

export const updateReportStatus = async (reportId: string, status: string, message: string): Promise<boolean> => {
  // First get the current report to update its updates array
  const { data: currentReport } = await supabase
    .from('reports')
    .select('updates')
    .eq('id', reportId)
    .single();
    
  if (!currentReport) return false;
  
  const today = new Date().toISOString().split('T')[0];
  const updates = [
    {
      date: today,
      message,
      status
    },
    ...(currentReport.updates as any[] || [])
  ];
  
  const { error } = await supabase
    .from('reports')
    .update({
      status,
      last_updated: today,
      updates
    })
    .eq('id', reportId);
    
  return !error;
};

export const deleteReport = async (reportId: string): Promise<boolean> => {
  const { error } = await supabase
    .from('reports')
    .delete()
    .eq('id', reportId);
    
  return !error;
};
