import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  dateRange: z.string().optional(),
  state: z.string().min(1, 'Please select a state'),
  district: z.string().min(1, 'Please select a district'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  // Keep phone for backward compatibility
  phone: z.string().min(10, 'Phone number must be at least 10 digits').optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email credentials:', {
        hasUser: !!process.env.EMAIL_USER,
        hasPass: !!process.env.EMAIL_PASS
      });
      return NextResponse.json(
        { error: 'Email configuration is missing' },
        { status: 500 }
      );
    }

    console.log('Attempting to send email to: developer@myenum.in');

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('Email transporter verified successfully');
    } catch (verifyError) {
      console.error('Email transporter verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    // Helper function to escape HTML
    const escapeHtml = (text: string) => {
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    };

    const mailOptions = {
      from: `"MyEnum Website" <${process.env.EMAIL_USER}>`,
      to: 'developer@myenum.in',
      replyTo: validatedData.email,
      subject: `[Lead] Contact Form: ${validatedData.service || 'Inquiry'} from ${validatedData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f7f6;">
          <div style="background: linear-gradient(135deg, #10b981 0%, #064e3b 100%); padding: 40px 20px; border-radius: 16px 16px 0 0; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h1 style="color: white; margin: 0; font-size: 28px; letter-spacing: 1px;">New Contact Lead</h1>
            <p style="color: rgba(255,255,255,0.8); margin-top: 10px; font-size: 14px;">Contact Form Submission</p>
          </div>
          
          <div style="background-color: white; padding: 35px; border-radius: 0 0 16px 16px; border: 1px solid #e2e8f0; border-top: none; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 30px;">
              <h2 style="color: #10b981; font-size: 18px; margin-top: 0; border-bottom: 1px solid #edf2f7; padding-bottom: 12px; text-transform: uppercase; letter-spacing: 1px;">Client Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 100px;">Name:</td>
                  <td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${escapeHtml(validatedData.name)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${validatedData.email}" style="color: #10b981; text-decoration: none; font-weight: 600;">${escapeHtml(validatedData.email)}</a></td>
                </tr>
                ${validatedData.phone ? `
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Phone:</td>
                  <td style="padding: 8px 0;"><a href="tel:${validatedData.phone}" style="color: #10b981; text-decoration: none;">${escapeHtml(validatedData.phone)}</a></td>
                </tr>
                ` : ''}
              </table>
            </div>

            <div style="margin-bottom: 30px;">
              <h2 style="color: #10b981; font-size: 18px; margin-top: 0; border-bottom: 1px solid #edf2f7; padding-bottom: 12px; text-transform: uppercase; letter-spacing: 1px;">Service Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 100px;">Service:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${escapeHtml(validatedData.service || 'General Inquiry')}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Location:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${escapeHtml(validatedData.district)}, ${escapeHtml(validatedData.state)}</td>
                </tr>
                ${validatedData.dateRange ? `
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Preferred Date:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${escapeHtml(validatedData.dateRange)}</td>
                </tr>
                ` : ''}
              </table>
            </div>

            <div style="margin-top: 30px;">
              <h2 style="color: #10b981; font-size: 18px; margin-top: 0; border-bottom: 1px solid #edf2f7; padding-bottom: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</h2>
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 12px; border-left: 4px solid #10b981; margin-top: 15px;">
                <p style="margin: 0; color: #334155; white-space: pre-wrap; font-style: italic;">"${escapeHtml(validatedData.message)}"</p>
              </div>
            </div>

            <div style="margin-top: 40px; text-align: center;">
              <a href="mailto:${validatedData.email}" style="background-color: #10b981; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px; display: inline-block;">Reply to Client</a>
            </div>
          </div>

          <div style="text-align: center; margin-top: 30px; color: #94a3b8; font-size: 11px; letter-spacing: 0.5px;">
            <p>© ${new Date().getFullYear()} MyEnum Agency Website Lead Management</p>
            <p>You received this email because someone submitted a form on your website.</p>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);

    return NextResponse.json(
      { message: 'Email sent successfully', messageId: result.messageId },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.issues },
        { status: 400 }
      );
    }

    // Handle specific nodemailer errors
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        name: error.name,
        stack: error.stack
      });
    }

    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
