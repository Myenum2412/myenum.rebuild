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

    // Email content
    const mailOptions = {
      from: `"Myenum Website" <${process.env.EMAIL_USER}>`,
      to: 'developer@myenum.in',
      replyTo: validatedData.email,
      subject: `New Contact Form Submission - ${validatedData.service || 'General Inquiry'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          <div style="background-color: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #667eea; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Information</h2>
              <p style="margin: 10px 0;"><strong style="color: #555;">Name:</strong> <span style="color: #333;">${escapeHtml(validatedData.name)}</span></p>
              <p style="margin: 10px 0;"><strong style="color: #555;">Email:</strong> <a href="mailto:${escapeHtml(validatedData.email)}" style="color: #667eea; text-decoration: none;">${escapeHtml(validatedData.email)}</a></p>
              ${validatedData.phone ? `<p style="margin: 10px 0;"><strong style="color: #555;">Phone:</strong> <a href="tel:${escapeHtml(validatedData.phone)}" style="color: #667eea; text-decoration: none;">${escapeHtml(validatedData.phone)}</a></p>` : ''}
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #667eea; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Service Details</h2>
              <p style="margin: 10px 0;"><strong style="color: #555;">Service:</strong> <span style="color: #333;">${escapeHtml(validatedData.service || 'Not specified')}</span></p>
              ${validatedData.dateRange ? `<p style="margin: 10px 0;"><strong style="color: #555;">Preferred Date:</strong> <span style="color: #333;">${escapeHtml(validatedData.dateRange)}</span></p>` : ''}
              <p style="margin: 10px 0;"><strong style="color: #555;">Location:</strong> <span style="color: #333;">${escapeHtml(validatedData.district)}, ${escapeHtml(validatedData.state)}</span></p>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #667eea; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Message</h2>
              <div style="background-color: #f5f5f5; padding: 15px; border-radius: 4px; border-left: 4px solid #667eea; margin-top: 10px;">
                <p style="margin: 0; color: #333; white-space: pre-wrap;">${escapeHtml(validatedData.message || 'No message provided')}</p>
              </div>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              This email was sent from the Myenum Agency contact form.<br>
              You can reply directly to this email to contact ${escapeHtml(validatedData.name)}.
            </p>
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
