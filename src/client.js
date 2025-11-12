import { createClient } from '@supabase/supabase-js'

const URL = 'https://mnukkmrvfnzgstjopxyf.supabase.co'

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1udWtrbXJ2Zm56Z3N0am9weHlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTg2OTIsImV4cCI6MjA3ODUzNDY5Mn0.NcejNnUe9wE0-Krv89xC4ZzGms-rsE9b6w5FRq5x1k8'

export const supabase = createClient(URL, API_KEY)