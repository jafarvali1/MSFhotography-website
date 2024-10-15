// app/api/send-mail.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  // Parse the incoming request body
  const { name, contact, eventDate } = await req.json();

  // Create a transporter object using SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // Replace with your SMTP server
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'jafar45ro@gmail.com', // Your email
      pass: 'MadihaMaahin@1', // Your email password
    },
  });

  // Send mail
  try {
    await transporter.sendMail({
      from: '"Photographer" <jafar45ro@gmail.com>', // sender address (use your email here)
      to: 'recipient@example.com', // list of receivers (update this)
      subject: 'New Shoot Scheduled', // Subject line
      text: `Name: ${name}\nContact: ${contact}\nEvent Date: ${eventDate}`, // plain text body
    });

    // Return success response
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error); // Log the error for debugging
    // Return error response
    return new Response(JSON.stringify({ message: 'Failed to send email.' }), { status: 500 });
  }
}
