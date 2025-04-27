
import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

// Replace these with your Supabase project URL and anon key
const supabaseUrl = 'YOUR_SUPABASE_PROJECT_URL';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
