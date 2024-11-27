import { NextResponse } from "next/server"
import { hash } from "bcrypt"
import { sql } from "@vercel/postgres"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // If email and password aren't null
    if (!email || !password) {
      return NextResponse.json(
        { errors: { email: "Email is required", password: "Password is required" } },
        { status: 400 }
      );
    }

    // If a user already exists with this email
    const existingUser = await sql`
      SELECT * FROM users WHERE email = ${email}
    `

    if (existingUser.rowCount > 0) {
      return NextResponse.json(
        { errors: { email: "User with this email already exists" } },
        { status: 400 }
      );
    }

    const hashedPassword = await hash(password, 10)
    await sql`
      INSERT INTO users (email, password)
      VALUES (${email}, ${hashedPassword})
    `

    return NextResponse.json({ message: "success" }, { status: 200 })
  } catch (e) {
    console.error("Server Error:", e)
    return NextResponse.json(
      { errors: { general: "Server error occured" } },
      { status: 500 }
    );
  }
}