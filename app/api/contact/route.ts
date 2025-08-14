import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, projectType, message } = await request.json()

    // Validate required fields
    if (!firstName || !lastName || !email || !projectType || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER || "anzekos11@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD, // This needs to be set in environment variables
      },
    })

    // Create email content
    const emailContent = `
New Contact Form Submission from Kos Production Website

Name: ${firstName} ${lastName}
Email: ${email}
Project Type: ${projectType}

Message:
${message}

---
This message was sent from the Kos Production website contact form.
    `.trim()

    // Send email
    await transporter.sendMail({
      from: process.env.GMAIL_USER || "anzekos11@gmail.com",
      to: "anzekos11@gmail.com",
      subject: `New Contact Form: ${projectType} - ${firstName} ${lastName}`,
      text: emailContent,
      replyTo: email,
    })

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
