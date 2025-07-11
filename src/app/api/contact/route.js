import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { type, subject, message } = await request.json();

        if (!type || !subject || !message) {
            return NextResponse.json(
                { error: 'Type, subject, and message are required' },
                { status: 400 }
            );
        }

        console.log(`Contact form submission - Type: ${type}, Subject: ${subject}`);

        // Send email notification
        await sendContactEmail(type, subject, message);

        return NextResponse.json(
            { message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

async function sendContactEmail(type, subject, message) {
    try {
        // Create transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Get type-specific labels
        const typeLabels = {
            'question': 'Question',
            'feature-request': 'Feature Request',
            'feedback': 'Feedback'
        };

        const typeLabel = typeLabels[type] || 'Contact';
        const typeColors = {
            'question': '#2563eb',
            'feature-request': '#059669',
            'feedback': '#dc2626'
        };
        const typeColor = typeColors[type] || '#2563eb';

        // Email content
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: 'mrntlu@gmail.com',
            subject: `${typeLabel} - Watchlistfy: ${subject}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">${typeLabel} - Watchlistfy</h2>
          <p>A new ${typeLabel.toLowerCase()} has been submitted for <strong>Watchlistfy</strong>.</p>

          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #555;">Message Details:</h3>
            <p><strong>Type:</strong> <span style="color: ${typeColor}; font-weight: bold;">${typeLabel}</span></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 10px; border-radius: 3px; margin: 10px 0; border-left: 4px solid ${typeColor};">
              ${message.replace(/\n/g, '<br>')}
            </div>
            <p><strong>Submission Date:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>App:</strong> Watchlistfy</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="font-size: 12px; color: #666;">
              This is an automated message from the Watchlistfy contact form.
            </p>
          </div>
        </div>
      `,
            text: `
        ${typeLabel} - Watchlistfy

        A new ${typeLabel.toLowerCase()} has been submitted for Watchlistfy.

        Type: ${typeLabel}
        Subject: ${subject}
        Message: ${message}
        Submission Date: ${new Date().toLocaleString()}
        App: Watchlistfy

        This is an automated message from the Watchlistfy contact form.
      `
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log(`Contact email sent successfully - Type: ${type}`);
    } catch (error) {
        console.error('Error sending contact email:', error);
        throw error;
    }
}