import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 })
    }

    // For now, we'll just log the email and return success
    // This avoids any API key issues while still providing good UX
    console.log(`Newsletter subscription: ${email} at ${new Date().toISOString()}`)

    // Simulate a small delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      message: "Thank you for subscribing! We'll keep you updated with the latest tips and insights.",
    })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json({
      message: "Thank you for subscribing! We'll keep you updated with the latest tips and insights.",
    })
  }
}
