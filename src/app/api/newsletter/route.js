import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { email, name, message } = await request.json();

    // Validate email
    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ message: "Please enter a valid email address" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Create transporter for Outlook
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com", // Outlook SMTP server
      port: 587, // Outlook recommended port
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.OUTLOOK_USER,
        pass: process.env.OUTLOOK_PASSWORD,
      },
      tls: {
        ciphers: "SSLv3", // Sometimes needed for Outlook
      },
    });

    // Email to subscriber (confirmation)
    const subscriberMailOptions = {
      from: `"Ocean Updates" <${process.env.OUTLOOK_USER}>`,
      to: email,
      subject: "Thanks for subscribing to Ocean Updates!",
      text: `Thank you for subscribing to our newsletter! You'll receive updates about our ocean conservation efforts.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0066cc;">Thank you for subscribing!</h2>
          <p>You've successfully subscribed to our Ocean Updates newsletter.</p>
          <p>You'll receive periodic updates about our ocean conservation efforts, research findings, and ways you can help protect our oceans.</p>
          ${message ? `<p>Your message: ${message}</p>` : ""}
          <p>If this was a mistake, you can ignore this email.</p>
          <p style="margin-top: 30px;">Best regards,</p>
          <p>The Ocean Conservation Team</p>
        </div>
      `,
    };

    // Email to admin (lead notification)
    const adminMailOptions = {
      from: `"Newsletter Signup" <${process.env.OUTLOOK_USER}>`,
      to: process.env.LEADS_EMAIL || process.env.OUTLOOK_USER, // Can use separate email for leads
      subject: `New ${
        message ? "contact form submission" : "newsletter subscriber"
      }: ${email}`,
      text: `You have a new ${message ? "contact" : "newsletter subscriber"}:
Email: ${email}
${name ? `Name: ${name}\n` : ""}
${message ? `Message: ${message}\n` : ""}
Timestamp: ${new Date().toISOString()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0066cc;">New ${
            message ? "Contact" : "Subscriber"
          }</h2>
          <p><strong>Email:</strong> ${email}</p>
          ${name ? `<p><strong>Name:</strong> ${name}</p>` : ""}
          ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
          <p><strong>Timestamp:</strong> ${new Date().toString()}</p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(subscriberMailOptions);
    await transporter.sendMail(adminMailOptions);

    return new Response(
      JSON.stringify({
        message: message
          ? "Thank you for contacting us! We'll get back to you soon."
          : "Subscription successful! Please check your email.",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        message: "Error processing your request. Please try again later.",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function GET() {
  return new Response(JSON.stringify({ message: "Method not allowed" }), {
    status: 405,
    headers: { "Content-Type": "application/json" },
  });
}
