import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const AdminVisitorCounter = () => {
  const [visitorData, setVisitorData] = useState<{ total: number; today: number } | null>(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('get-visitor-count');
        
        if (error) {
          console.error('Error fetching visitor count:', error);
          return;
        }

        setVisitorData(data);
      } catch (err) {
        console.error('Error fetching visitor count:', err);
      }
    };

    fetchVisitorCount();
  }, []);

  if (!visitorData) return null;

  return (
    <Badge variant="outline" className="gap-2 px-3 py-1 bg-background/50 backdrop-blur-sm">
      <Eye className="h-3.5 w-3.5" />
      <span className="text-xs">
        {visitorData.today} today / {visitorData.total} total
      </span>
    </Badge>
  );
};
