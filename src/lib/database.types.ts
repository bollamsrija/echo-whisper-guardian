
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      reports: {
        Row: {
          id: string
          title: string
          category: string
          description: string
          date: string | null
          location: string | null
          persons_involved: string | null
          evidence_description: string | null
          status: 'Submitted' | 'Under Review' | 'Investigation' | 'Closed' | 'Rejected'
          last_updated: string
          created_at: string
          updates: Json[]
          files: string[] | null
        }
        Insert: {
          id: string
          title: string
          category: string
          description: string
          date?: string | null
          location?: string | null
          persons_involved?: string | null
          evidence_description?: string | null
          status?: 'Submitted' | 'Under Review' | 'Investigation' | 'Closed' | 'Rejected'
          last_updated?: string
          created_at?: string
          updates?: Json[]
          files?: string[] | null
        }
        Update: {
          id?: string
          title?: string
          category?: string
          description?: string
          date?: string | null
          location?: string | null
          persons_involved?: string | null
          evidence_description?: string | null
          status?: 'Submitted' | 'Under Review' | 'Investigation' | 'Closed' | 'Rejected'
          last_updated?: string
          created_at?: string
          updates?: Json[]
          files?: string[] | null
        }
      }
    }
  }
}
