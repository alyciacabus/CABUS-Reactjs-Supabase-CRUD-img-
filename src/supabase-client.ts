
import { createClient } from "@supabase/supabase-js";


const supabase_PROJECT_URL = 'https://vfatugurbayhygqrbbge.supabase.co';
const supabase_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmYXR1Z3VyYmF5aHlncXJiYmdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NTM1NDUsImV4cCI6MjA3NjEyOTU0NX0.yqPaqYWbmprsXWQW_9BmvXeeDnP3GBzUCRUWf1CRttQ';


export const supabase = createClient( supabase_PROJECT_URL, supabase_ANON_KEY);
