import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Extract fields
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const country = formData.get("country")?.toString() || "";
    const company = formData.get("company")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const product = formData.get("product")?.toString() || "";
    const service = formData.get("service")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    const file = formData.get("attachment") as File | null;

    console.log("=== Received Lead Submission ===");
    const leadData = {
      name,
      email,
      country,
      company,
      phone,
      product,
      service,
      message,
      fileName: file ? file.name : "None",
      fileSize: file ? `${(file.size / 1024).toFixed(2)} KB` : "0 KB"
    };
    console.log(leadData);

    // Validate minimum required fields
    if (!name || !email || !country || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.MAIL_TO || "info@orionglobal.jp";

    // If Resend API Key is configured, attempt real email transmission
    if (resendApiKey) {
      console.log("Resend API Key found. Sending real email...");

      let attachments: any[] = [];
      if (file && file.size > 0) {
        const buffer = await file.arrayBuffer();
        const base64Content = Buffer.from(buffer).toString("base64");
        attachments.push({
          filename: file.name,
          content: base64Content,
        });
      }

      // Build HTML content for email
      const emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; rounded: 8px;">
          <h2 style="color: #06162D; border-bottom: 2px solid #C89235; padding-bottom: 10px;">
            【Orion Global】ホームページから新しいお問い合わせがありました
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eeeeee; font-weight: bold; width: 30%;">お名前</td>
              <td style="padding: 10px; border-bottom: 1px solid #eeeeee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eeeeee; font-weight: bold;">メールアドレス</td>
              <td style="padding: 10px; border-bottom: 1px solid #eeeeee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eeeeee; font-weight: bold;">対象国（配送先）</td>
              <td style="padding: 10px; border-bottom: 1px solid #eeeeee;">${country}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eeeeee; font-weight: bold;">会社名</td>
              <td style="padding: 10px; border-bottom: 1px solid #eeeeee;">${company || "未記入"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eeeeee; font-weight: bold;">電話番号 / WhatsApp</td>
              <td style="padding: 10px; border-bottom: 1px solid #eeeeee;">${phone || "未記入"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eeeeee; font-weight: bold;">興味のある商材</td>
              <td style="padding: 10px; border-bottom: 1px solid #eeeeee;">${product || "未指定"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eeeeee; font-weight: bold;">ご希望のサービス</td>
              <td style="padding: 10px; border-bottom: 1px solid #eeeeee;">${service || "未指定"}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #f9f9f9; border-radius: 5px; border-left: 4px solid #C89235;">
            <h3 style="margin-top: 0; color: #06162D;">お問い合わせ内容・詳細</h3>
            <p style="white-space: pre-wrap; font-size: 15px; line-height: 1.6; color: #333333;">${message}</p>
          </div>
          
          ${file ? `<p style="font-size: 12px; color: #666666; margin-top: 20px;">📎 添付ファイル: <strong>${file.name}</strong> (${(file.size / 1024).toFixed(2)} KB)</p>` : ""}
          
          <hr style="border: none; border-top: 1px solid #eaeaea; margin-top: 30px;" />
          <p style="font-size: 11px; color: #999999; text-align: center;">
            ※このメールは Orion Global 公式サイトのお問い合わせフォームから自動送信されています。
          </p>
        </div>
      `;

      // Set sender. If the domain is verified on Resend, you can use e.g. "inquiry@orionglobal.jp".
      // By default before domain verification, you can only send from onboarding@resend.dev to verified emails.
      // We check if the destination is local. If it's verified, we use custom domain.
      const fromEmail = recipientEmail.endsWith("@orionglobal.jp") 
        ? "Orion Global Website <inquiry@orionglobal.jp>"
        : "Orion Global Website <onboarding@resend.dev>";

      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${resendApiKey}`
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [recipientEmail],
          subject: `【Orion Global】お問い合わせ: ${name}様`,
          html: emailHtml,
          attachments: attachments.length > 0 ? attachments : undefined
        })
      });

      if (!resendResponse.ok) {
        const errorText = await resendResponse.text();
        console.error("Resend API returned an error:", errorText);
        throw new Error(`Resend mailer failed: ${errorText}`);
      }

      console.log("Email successfully dispatched via Resend.");
    } else {
      console.log("No RESEND_API_KEY configured. Running in simulation mode.");
    }

    return NextResponse.json({
      success: true,
      message: "Lead successfully recorded"
    });
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
