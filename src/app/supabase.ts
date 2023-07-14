import { createClient } from "@supabase/supabase-js";  

const supabase = createClient (
    "https://ywnfgaytseudiyhlahtm.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3bmZnYXl0c2V1ZGl5aGxhaHRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkyNDUxNjQsImV4cCI6MjAwNDgyMTE2NH0.BSOOR6UciGaSyYEUPJGkvmUGB_t36wpJK27ufGcbwmY" 
)

export default supabase;