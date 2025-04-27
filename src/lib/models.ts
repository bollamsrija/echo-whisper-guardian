
export interface Report {
  id: string;
  title: string;
  category: string;
  description: string;
  date?: string | null;
  location?: string | null;
  personsInvolved?: string | null;
  evidenceDescription?: string | null;
  status: 'Submitted' | 'Under Review' | 'Investigation' | 'Closed' | 'Rejected';
  lastUpdated: string;
  createdAt: string;
  updates: Array<{
    date: string;
    message: string;
    status?: string;
  }>;
  files?: string[] | null;
}

export interface AdminUser {
  id: string;
  username: string;
  passwordHash: string;
  role: 'admin' | 'investigator' | 'viewer';
  lastLogin?: string;
}
