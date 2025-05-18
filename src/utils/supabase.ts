import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ijlsmjmiuvnnlmaedeao.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqbHNtam1pdXZubmxtYWVkZWFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1NzU1OTksImV4cCI6MjA2MzE1MTU5OX0.PJAXc4nDuB9UJNAL_zauKYxfMipdzbNPMu__SRy317Y';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
