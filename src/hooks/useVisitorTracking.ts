import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useVisitorTracking = () => {
  useEffect(() => {
    const trackVisit = async () => {
      try {
        const { error } = await supabase
          .from('visitors')
          .insert({
            page_path: window.location.pathname,
            user_agent: navigator.userAgent,
          });

        if (error) {
          console.error('Error tracking visit:', error);
        }
      } catch (err) {
        console.error('Error tracking visit:', err);
      }
    };

    trackVisit();
  }, []);
};
