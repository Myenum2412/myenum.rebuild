import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation schema
const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().optional(),
  source: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = newsletterSchema.parse(body);

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email credentials:', {
        hasUser: !!process.env.EMAIL_USER,
        hasPass: !!process.env.EMAIL_PASS
      });
      // Still return success to avoid showing errors to users
      // but log internally
      return NextResponse.json(
        { message: 'Subscribed successfully' },
        { status: 200 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Helper function to escape HTML
    const escapeHtml = (text: string) => {
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    };

    const source = validatedData.source || 'Newsletter Signup';

    // Email content for lead notification
    const mailOptions = {
      from: `"Myenum Website" <${process.env.EMAIL_USER}>`,
      to: 'developer@myenum.in',
      replyTo: validatedData.email,
      subject: `New Newsletter Signup - ${source}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Newsletter Signup</h1>
          </div>
          <div style="background-color: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #22c55e; margin-top: 0; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">Subscriber Details</h2>
              <p style="margin: 10px 0;"><strong style="color: #555;">Email:</strong> <a href="mailto:${escapeHtml(validatedData.email)}" style="color: #22c55e; text-decoration: none;">${escapeHtml(validatedData.email)}</a></p>
              ${validatedData.name ? `<p style="margin: 10px 0;"><strong style="color: #555;">Name:</strong> <span style="color: #333;">${escapeHtml(validatedData.name)}</span></p>` : ''}
              <p style="margin: 10px 0;"><strong style="color: #555;">Source:</strong> <span style="color: #333;">${escapeHtml(source)}</span></p>
              ${validatedData.message ? `<p style="margin: 10px 0;"><strong style="color: #555;">Message:</strong> <span style="color: #333;">${escapeHtml(validatedData.message)}</span></p>` : ''}
            </div>
          </div>

          <div style="text-align: center; margin-top: 20px; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              This email was sent from MyEnum Agency website.<br>
              Lead source: ${escapeHtml(source)}
            </p>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);
    console.log('Newsletter signup email sent:', result.messageId);

    return NextResponse.json(
      { message: 'Subscribed successfully', messageId: result.messageId },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter signup error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.issues },
        { status: 400 }
      );
    }

    // Still return success to avoid showing errors to users
    return NextResponse.json(
      { message: 'Subscribed successfully' },
      { status: 200 }
    );
  }
}