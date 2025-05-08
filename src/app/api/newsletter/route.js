import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ message: "Please enter a valid email address" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Email to subscriber
    const subscriberMailOptions = {
      from: `"Ocean Updates" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Thanks for subscribing to Ocean Updates!",
      text: `Thank you for subscribing to our newsletter! You'll receive updates about our ocean conservation efforts.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0066cc;">Thank you for subscribing!</h2>
          <p>You've successfully subscribed to our Ocean Updates newsletter.</p>
          <p>You'll receive periodic updates about our ocean conservation efforts, research findings, and ways you can help protect our oceans.</p>
          <p>If this was a mistake, you can ignore this email.</p>
          <p style="margin-top: 30px;">Best regards,</p>
          <p>The Ocean Conservation Team</p>
        </div>
      `,
    };

    // Email to admin (your gmail)
    const adminMailOptions = {
      from: `"Newsletter Signup" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New newsletter subscriber: ${email}`,
      text: `You have a new newsletter subscriber: ${email}`,
    };

    // Send both emails
    await transporter.sendMail(subscriberMailOptions);
    await transporter.sendMail(adminMailOptions);

    return new Response(
      JSON.stringify({
        message: "Subscription successful! Please check your email.",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        message: "Error processing subscription. Please try again later.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// Optionally add other HTTP methods if needed
export async function GET() {
  return new Response(JSON.stringify({ message: "Method not allowed" }), {
    status: 405,
    headers: { "Content-Type": "application/json" },
  });
}
