import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Extract fields
    const name = formData.get("name");
    const email = formData.get("email");
    const country = formData.get("country");
    const company = formData.get("company");
    const phone = formData.get("phone");
    const product = formData.get("product");
    const service = formData.get("service");
    const message = formData.get("message");
    const file = formData.get("attachment") as File | null;

    console.log("=== Received Lead Submission ===");
    console.log({
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
    });

    // SIMULATED ACTIONS:
    // 1. Send admin alert mail:
    //    `await sendEmail({ to: 'admin@orionglobal.jp', subject: 'New Lead', content: ... })`
    // 2. Send automatic confirmation email to user:
    //    `await sendEmail({ to: email, subject: 'Inquiry Received', content: ... })`
    // 3. Save to Notion or Supabase database:
    //    `await supabase.from('leads').insert({ name, email, ... })`

    // Validate minimum required fields
    if (!name || !email || !country || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Return success
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
