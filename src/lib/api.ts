
import { Report } from './models';

const API_URL = '/api'; // In a real app, this would be an actual API endpoint

// Mock function to simulate API calls - would be replaced with actual fetch calls
export const fetchReport = async (referenceCode: string): Promise<Report | null> => {
  // This is a mock function - in a real app, this would make an actual API call
  // For now it returns mock data for the demo reference code
  if (referenceCode.toUpperCase() === 'ABC123XY') {
    return {
      id: 'ABC123XY',
      title: 'Financial Misconduct Report',
      category: 'Financial Misconduct',
      description: 'Suspicious financial transactions were observed.',
      status: 'Under Review',
      lastUpdated: '2025-04-20',
      createdAt: '2025-04-15',
      updates: [
        { date: '2025-04-20', message: 'Your report has been assigned to an investigator.', status: 'Under Review' },
        { date: '2025-04-18', message: 'Your report has been received and is being assessed.', status: 'Submitted' },
        { date: '2025-04-15', message: 'Report submitted successfully.', status: 'Submitted' }
      ]
    };
  }
  return null;
};

export const submitReport = async (reportData: Partial<Report>): Promise<{success: boolean, referenceCode?: string}> => {
  // This is a mock function - in a real app, this would make an actual API call
  // Generate a random reference code
  const referenceCode = Math.random().toString(36).substring(2, 10).toUpperCase();
  
  // In a real app, this would send the data to the server
  console.log('Report submitted:', reportData);
  
  return {
    success: true,
    referenceCode
  };
};

export const fetchAdminReports = async (): Promise<Report[]> => {
  // This is a mock function - in a real app, this would make an actual API call
  return [
    {
      id: 'ABC123XY',
      title: 'Financial Misconduct Report',
      category: 'Financial Misconduct',
      description: 'Suspicious financial transactions were observed.',
      status: 'Under Review',
      lastUpdated: '2025-04-20',
      createdAt: '2025-04-15',
      updates: [
        { date: '2025-04-20', message: 'Your report has been assigned to an investigator.', status: 'Under Review' },
        { date: '2025-04-18', message: 'Your report has been received and is being assessed.', status: 'Submitted' },
        { date: '2025-04-15', message: 'Report submitted successfully.', status: 'Submitted' }
      ]
    },
    {
      id: 'DEF456ZY',
      title: 'Harassment Report',
      category: 'Harassment',
      description: 'Ongoing workplace harassment situation.',
      status: 'Investigation',
      lastUpdated: '2025-04-22',
      createdAt: '2025-04-10',
      updates: [
        { date: '2025-04-22', message: 'Investigation in progress.', status: 'Investigation' },
        { date: '2025-04-12', message: 'Report assigned to investigator.', status: 'Under Review' },
        { date: '2025-04-10', message: 'Report submitted successfully.', status: 'Submitted' }
      ]
    }
  ];
};

export const updateReportStatus = async (reportId: string, status: string, message: string): Promise<boolean> => {
  // This is a mock function - in a real app, this would make an actual API call
  console.log(`Report ${reportId} status updated to ${status} with message: ${message}`);
  return true;
};
