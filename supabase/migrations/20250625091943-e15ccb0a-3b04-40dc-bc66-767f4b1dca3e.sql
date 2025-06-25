
-- Create a policy to allow public access for inserting emails
CREATE POLICY "Allow public email signup" 
ON public.email 
FOR INSERT 
WITH CHECK (true);
