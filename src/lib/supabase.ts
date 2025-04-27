
import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = 'https://wtfgvpwnkpximcufvlad.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0Zmd2cHdua3B4aW1jdWZ2bGFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3NjM0NDgsImV4cCI6MjA2MTMzOTQ0OH0.JATg3bb1QwKGoN5Ib_MBWbdQM6smvrlPMD709nqngAk';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
