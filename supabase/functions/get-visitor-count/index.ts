import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.1'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Create Supabase client with service role to bypass RLS
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )

    // Get total visitor count
    const { count, error } = await supabaseAdmin
      .from('visitors')
      .select('*', { count: 'exact', head: true })

    if (error) {
      console.error('Error fetching visitor count:', error)
      throw error
    }

    // Get unique visitors (by page load, approximate)
    const { data: recentVisits } = await supabaseAdmin
      .from('visitors')
      .select('visited_at')
      .gte('visited_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())
      .order('visited_at', { ascending: false })

    return new Response(
      JSON.stringify({
        total: count || 0,
        today: recentVisits?.length || 0
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Error in get-visitor-count function:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})
