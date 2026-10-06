import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function saveSubmissionLocally(data: ContactFormData, status: string, errorDetail?: string) {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const logFile = path.join(dataDir, 'contact-submissions.jsonl');
    const record = {
      timestamp: new Date().toISOString(),
      ...data,
      deliveryStatus: status,
      error: errorDetail || null,
    };
    fs.appendFileSync(logFile, JSON.stringify(record) + '\n');
    console.log('📝 Saved contact form submission to local backup:', logFile);
  } catch (err) {
    console.error('Failed to append to contact log:', err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, subject, and message are required.' },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER || 'techwareafrican@gmail.com';
    const emailPassword = process.env.EMAIL_PASSWORD;

    let emailDelivered = false;
    let authErrorOccurred = false;

    // Only attempt SMTP if configured
    if (emailUser && emailPassword) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: emailUser,
          pass: emailPassword,
        },
      });

      const mailOptions = {
        from: `"${escapeHtml(body.name)}" <${emailUser}>`,
        to: 'techwareafrican@gmail.com',
        replyTo: body.email,
        subject: `[TechWareAfrica] New Contact Inquiry: ${body.subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #232F3E;">
            <div style="background-color: #232F3E; padding: 20px; border-radius: 8px 8px 0 0; border-bottom: 4px solid #FF9900;">
              <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Contact Form Submission</h2>
              <p style="color: #EAEDED; margin: 5px 0 0; font-size: 13px;">Received from techwareafrica.tech</p>
            </div>
            
            <div style="background-color: #ffffff; padding: 24px; border: 1px solid #E5E7EB; border-top: none;">
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 100px; color: #4B5563;">Name:</td>
                  <td style="padding: 8px 0; color: #111827;">${escapeHtml(body.name)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4B5563;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(body.email)}" style="color: #FF9900; text-decoration: none;">${escapeHtml(body.email)}</a></td>
                </tr>
                ${body.phone ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4B5563;">Phone:</td>
                  <td style="padding: 8px 0; color: #111827;"><a href="tel:${escapeHtml(body.phone)}" style="color: #232F3E;">${escapeHtml(body.phone)}</a></td>
                </tr>` : ''}
                ${body.company ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4B5563;">Company:</td>
                  <td style="padding: 8px 0; color: #111827;">${escapeHtml(body.company)}</td>
                </tr>` : ''}
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4B5563;">Subject:</td>
                  <td style="padding: 8px 0; color: #111827;">${escapeHtml(body.subject)}</td>
                </tr>
              </table>

              <div style="background-color: #F8F9FA; padding: 16px; border-left: 4px solid #FF9900; border-radius: 4px;">
                <h4 style="margin: 0 0 8px 0; color: #232F3E; font-size: 14px;">Message Content:</h4>
                <p style="margin: 0; color: #374151; white-space: pre-wrap; line-height: 1.6; font-size: 14px;">${escapeHtml(body.message)}</p>
              </div>
            </div>

            <div style="background-color: #F3F4F6; padding: 16px; text-align: center; font-size: 12px; color: #6B7280; border-radius: 0 0 8px 8px;">
              <p style="margin: 0;">Sent automatically from <a href="https://techwareafrica.tech" style="color: #FF9900;">TechWareAfrica</a> Contact System.</p>
            </div>
          </div>
        `,
      };

      try {
        await transporter.sendMail(mailOptions);
        emailDelivered = true;
        console.log('✅ Contact email delivered to techwareafrican@gmail.com');

        // Optional confirmation email to sender
        try {
          await transporter.sendMail({
            from: `"TechWareAfrica" <${emailUser}>`,
            to: body.email,
            subject: 'We received your message - TechWareAfrica',
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #232F3E;">
                <div style="background-color: #232F3E; padding: 20px; border-radius: 8px 8px 0 0; border-bottom: 4px solid #FF9900;">
                  <h2 style="color: #ffffff; margin: 0;">Thank you, ${escapeHtml(body.name)}!</h2>
                </div>
                <div style="background-color: #ffffff; padding: 24px; border: 1px solid #E5E7EB; border-top: none;">
                  <p style="color: #4B5563; font-size: 15px; line-height: 1.6;">
                    We have received your message regarding <strong>"${escapeHtml(body.subject)}"</strong>. Our team will review your inquiry and get back to you within 24 hours.
                  </p>
                  <p style="color: #4B5563; font-size: 14px; margin-top: 20px;">
                    For urgent inquiries, feel free to call us directly or chat via WhatsApp at 
                    <a href="tel:+255683274343" style="color: #FF9900; font-weight: bold;">+255 683 274 343</a>.
                  </p>
                  <p style="color: #1F2937; margin-top: 24px;">
                    Warm regards,<br/>
                    <strong>TechWareAfrica Team</strong><br/>
                    <em style="color: #6B7280; font-size: 13px;">Dar es Salaam, Tanzania</em>
                  </p>
                </div>
              </div>
            `,
          });
        } catch (confErr) {
          console.warn('Could not send confirmation copy to user:', confErr);
        }
      } catch (mailErr: any) {
        console.error('SMTP sending error:', mailErr?.message || mailErr);
        if (mailErr?.code === 'EAUTH' || mailErr?.responseCode === 535) {
          authErrorOccurred = true;
          console.warn(
            '⚠️  Gmail SMTP Authentication failed. Google requires a 16-character App Password generated at: https://myaccount.google.com/apppasswords'
          );
        }
      }
    }

    // Always preserve inquiry in local data store so no customer lead is ever lost
    saveSubmissionLocally(
      body,
      emailDelivered ? 'DELIVERED' : authErrorOccurred ? 'LOGGED_SMTP_AUTH_REQUIRED' : 'LOGGED_LOCAL',
      emailDelivered ? undefined : 'SMTP authorization required. Submission preserved locally.'
    );

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your message has been received and our team will get back to you shortly.',
        emailForwarded: emailDelivered,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please reach us directly at techwareafrican@gmail.com or +255 683 274 343.' },
      { status: 500 }
    );
  }
}
