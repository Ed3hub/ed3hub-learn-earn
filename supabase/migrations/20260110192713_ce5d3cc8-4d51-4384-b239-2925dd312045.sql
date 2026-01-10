-- First, remove duplicate emails keeping only the first entry
DELETE FROM public.email a
USING public.email b
WHERE a.created_at > b.created_at
AND a.email = b.email;

-- Now add the unique constraint
ALTER TABLE public.email ADD CONSTRAINT email_unique UNIQUE (email);