
import { Report, AdminUser } from './models';

// Key names for localStorage
const REPORTS_KEY = 'whistleblower_reports';
const ADMIN_USERS_KEY = 'whistleblower_admin_users';

// Reports storage operations
export const getReports = (): Report[] => {
  const data = localStorage.getItem(REPORTS_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch (error) {
    console.error('Error parsing reports from localStorage:', error);
    return [];
  }
};

export const saveReport = (report: Report): void => {
  const reports = getReports();
  const existingReportIndex = reports.findIndex(r => r.id === report.id);
  
  if (existingReportIndex >= 0) {
    reports[existingReportIndex] = report;
  } else {
    reports.push(report);
  }
  
  localStorage.setItem(REPORTS_KEY, JSON.stringify(reports));
};

export const getReportById = (id: string): Report | null => {
  const reports = getReports();
  return reports.find(report => report.id === id) || null;
};

export const updateReportStatus = (reportId: string, status: string, message: string): boolean => {
  const reports = getReports();
  const reportIndex = reports.findIndex(r => r.id === reportId);
  
  if (reportIndex === -1) return false;
  
  const today = new Date().toISOString().split('T')[0];
  const report = reports[reportIndex];
  
  report.status = status as any;
  report.lastUpdated = today;
  report.updates.unshift({
    date: today,
    message: message,
    status: status
  });
  
  reports[reportIndex] = report;
  localStorage.setItem(REPORTS_KEY, JSON.stringify(reports));
  return true;
};

// Admin users storage operations
export const getAdminUsers = (): AdminUser[] => {
  const data = localStorage.getItem(ADMIN_USERS_KEY);
  if (!data) {
    // Initialize with default admin user if none exists
    const defaultAdmin: AdminUser = {
      id: '1',
      username: 'admin',
      passwordHash: 'admin123', // In a real app, this would be hashed
      role: 'admin',
      lastLogin: new Date().toISOString()
    };
    localStorage.setItem(ADMIN_USERS_KEY, JSON.stringify([defaultAdmin]));
    return [defaultAdmin];
  }
  
  try {
    return JSON.parse(data);
  } catch (error) {
    console.error('Error parsing admin users from localStorage:', error);
    return [];
  }
};

export const authenticateAdmin = (username: string, password: string): { authenticated: boolean; user?: { username: string; role: string } } => {
  const users = getAdminUsers();
  const user = users.find(u => u.username === username && u.passwordHash === password);
  
  if (!user) return { authenticated: false };
  
  // Update last login time
  user.lastLogin = new Date().toISOString();
  localStorage.setItem(ADMIN_USERS_KEY, JSON.stringify(users));
  
  return {
    authenticated: true,
    user: {
      username: user.username,
      role: user.role
    }
  };
};

// Initialize local storage with demo data if empty
export const initializeLocalStorage = (): void => {
  const reports = getReports();
  
  if (reports.length === 0) {
    // Add demo report
    const demoReport: Report = {
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
    
    saveReport(demoReport);
  }
  
  // Ensure admin users exist
  getAdminUsers();
};
