import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
  try {
    const result = await sql`CREATE TABLE Addresses (
        id SERIAL PRIMARY KEY,
        street VARCHAR(255) NOT NULL,
        suite VARCHAR(255),
        city VARCHAR(255) NOT NULL,
        zipCode VARCHAR(20) NOT NULL,
        lat VARCHAR(50),
        lng VARCHAR(50)
    );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
