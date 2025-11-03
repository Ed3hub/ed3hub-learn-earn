-- Create visitors tracking table
CREATE TABLE public.visitors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  visited_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  page_path TEXT,
  user_agent TEXT,
  ip_address TEXT
);

-- Enable Row Level Security
ALTER TABLE public.visitors ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert visits (for tracking)
CREATE POLICY "Allow public visit tracking"
ON public.visitors
FOR INSERT
WITH CHECK (true);

-- No public read access (only you can view via dashboard)
CREATE POLICY "No public read access"
ON public.visitors
FOR SELECT
USING (false);

-- No updates or deletes
CREATE POLICY "No updates allowed"
ON public.visitors
FOR UPDATE
USING (false);

CREATE POLICY "No deletions allowed"
ON public.visitors
FOR DELETE
USING (false);

-- Create index for better query performance
CREATE INDEX idx_visitors_visited_at ON public.visitors(visited_at DESC);