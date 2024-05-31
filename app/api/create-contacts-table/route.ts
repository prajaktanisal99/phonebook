import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result = await sql`CREATE TABLE Contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        username VARCHAR(255) NOT NULL,
        address_id INTEGER NOT NULL,
        phone VARCHAR(20),
        website VARCHAR(255),
        email VARCHAR(255),
        description TEXT,
        tag TEXT[],  -- Array of strings
        CONSTRAINT fk_address
            FOREIGN KEY(address_id) 
            REFERENCES Addresses(id)
    );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
