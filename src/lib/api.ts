
import { Report } from './models';
import { getReportById, saveReport, getReports, updateReportStatus as updateReportStatusInStorage } from './localStorage';

export const fetchReport = async (referenceCode: string): Promise<Report | null> => {
  return getReportById(referenceCode.toUpperCase());
};

export const submitReport = async (reportData: Partial<Report>): Promise<{success: boolean, referenceCode?: string}> => {
  // Generate a random reference code (8 characters, uppercase)
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
  
  saveReport(newReport);
  
  return {
    success: true,
    referenceCode
  };
};

export const fetchAdminReports = async (): Promise<Report[]> => {
  return getReports();
};

export const updateReportStatus = async (reportId: string, status: string, message: string): Promise<boolean> => {
  return updateReportStatusInStorage(reportId, status, message);
};
