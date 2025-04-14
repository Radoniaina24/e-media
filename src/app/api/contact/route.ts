import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { fullname, email, subject, phone, message } = await req.json();
    // Configurer le transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      // host: process.env.NEXT_PUBLIC_EMAIL_HOST,
      // port: parseInt(process.env.NEXT_PUBLIC_EMAIL_PORT || "587"),
      // secure: process.env.NEXT_PUBLIC_EMAIL_SECURE === "true",
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER, // Ton email
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS, // Ton mot de passe ou App Password
      },
    });

    // Contenu de l'email
    const mailOptions = {
      from: `"From Africa IT Summit"`,
      to: "scolarite@e-mediauniversity.io",
      cc: "dir.enligne@e-mediauniversity.io",
      subject: `📩 Nouvelle contact - Site E-media Madagascar`,
      html: `
   <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 8px; background: #f4f4f4; color: #333;">
      
      <div style="background: #3396f3; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
        <h2 style="color: white; margin: 0;">📩 Nouveau message</h2>
        <p style="color: #ddd; margin: 0;">Contact via E-media</p>
      </div>

      <div style="padding: 20px; background: white;">
        <p><strong>👤 Full Name :</strong> ${fullname}</p>
        <p><strong>📧 Email :</strong> <a href="mailto:${email}" style="color: #003366; text-decoration: none;">${email}</a></p>
        <p><strong>💬 Message :</strong></p>
        <blockquote style="border-left: 4px solid #003366; padding-left: 10px; margin: 10px 0; color: #555;">${message}</blockquote>
      </div>

      <div style="background: #3396f3; padding: 15px; border-radius: 0 0 8px 8px; text-align: center;">
        <p style="color: white; margin: 0;">E-media Madagascar</p>
      </div>

    </div>
  `,
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    // console.error("Erreur détaillée:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 },
    );
  }
}
