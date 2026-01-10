import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WelcomeEmailRequest {
  name: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email }: WelcomeEmailRequest = await req.json();

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const emailResponse = await resend.emails.send({
      from: "Ed3Hub <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to the Ed3Hub Waitlist! 🎉",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f4f4f5;">
          <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <div style="background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%); border-radius: 16px 16px 0 0; padding: 40px 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">Welcome to Ed3Hub! 🚀</h1>
            </div>
            <div style="background: white; border-radius: 0 0 16px 16px; padding: 40px 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <p style="color: #374151; font-size: 18px; line-height: 1.6; margin: 0 0 20px 0;">
                Hi <strong>${name}</strong>,
              </p>
              <p style="color: #6b7280; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
                Thank you for joining the Ed3Hub waitlist! We're thrilled to have you on board.
              </p>
              <p style="color: #6b7280; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
                Ed3Hub is building the future of Web3 education, and you'll be among the first to experience it. We'll notify you as soon as we're ready to launch.
              </p>
              <div style="background: #f9fafb; border-radius: 12px; padding: 20px; margin: 30px 0;">
                <p style="color: #374151; font-size: 14px; margin: 0; font-weight: 600;">What to expect:</p>
                <ul style="color: #6b7280; font-size: 14px; margin: 10px 0 0 0; padding-left: 20px; line-height: 1.8;">
                  <li>Early access to our courses</li>
                  <li>Exclusive community benefits</li>
                  <li>Updates on our launch progress</li>
                </ul>
              </div>
              <p style="color: #6b7280; font-size: 16px; line-height: 1.8; margin: 0;">
                Stay tuned! 🎓
              </p>
              <p style="color: #374151; font-size: 16px; margin: 30px 0 0 0; font-weight: 600;">
                The Ed3Hub Team
              </p>
            </div>
            <div style="text-align: center; padding: 20px;">
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                © 2024 Ed3Hub. All rights reserved.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Welcome email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending welcome email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
