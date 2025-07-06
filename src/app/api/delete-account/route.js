import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        // Basic email validation
        if (!email.includes('@')) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        console.log(`Account deletion request received for email: ${email}`);

        // Send email notification
        await sendDeletionRequestEmail(email);

        return NextResponse.json(
            { message: 'Account deletion request submitted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing deletion request:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

async function sendDeletionRequestEmail(userEmail) {
    try {
        // Create transporter using Gmail SMTP
        // Note: You'll need to set up environment variables for Gmail credentials
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.GMAIL_USER, // Your Gmail address
                pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail app password
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: 'mrntlu@gmail.com',
            subject: 'Account Deletion Request - Watchlistfy',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Account Deletion Request</h2>
          <p>A user has requested account deletion for <strong>Watchlistfy</strong>.</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #555;">Request Details:</h3>
            <p><strong>User Email:</strong> ${userEmail}</p>
            <p><strong>Request Date:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>App:</strong> Watchlistfy</p>
          </div>
          
          <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h4 style="margin-top: 0; color: #856404;">Action Required:</h4>
            <p>Please process this request within <strong>30 days</strong> as per Google Play Store requirements.</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="font-size: 12px; color: #666;">
              This is an automated message from the Watchlistfy account deletion system.
            </p>
          </div>
        </div>
      `,
            text: `
        Account Deletion Request - Watchlistfy
        
        A user has requested account deletion for Watchlistfy.
        
        User Email: ${userEmail}
        Request Date: ${new Date().toLocaleString()}
        App: Watchlistfy
        
        Please process this request within 30 days as per Google Play Store requirements.
      `
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log(`Deletion request email sent successfully for user: ${userEmail}`);
    } catch (error) {
        console.error('Error sending deletion request email:', error);
        throw error;
    }
} 