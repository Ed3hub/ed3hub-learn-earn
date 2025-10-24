-- Prevent public read access to email addresses and names
-- This blocks anyone from querying and stealing subscriber data
CREATE POLICY "No public read access" 
ON public.email 
FOR SELECT 
USING (false);

-- Explicitly deny updates to email records
CREATE POLICY "No updates allowed" 
ON public.email 
FOR UPDATE 
USING (false);

-- Explicitly deny deletions of email records
CREATE POLICY "No deletions allowed" 
ON public.email 
FOR DELETE 
USING (false);