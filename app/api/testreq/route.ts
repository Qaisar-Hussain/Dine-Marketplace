import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request: NextRequest, response: NextResponse) {
  const client = await db.connect();
  const payload = await request.json();

  const { userId, productId, productPrice, productName, quantity } = payload;

  await client.sql`INSERT INTO cart (user_id, product_id ,quantity, price) VALUES (${userId}, ${productId},${quantity},${productPrice});`;


  // const cart = await client.sql`SELECT * FROM cart;`;
  const cart = await client.sql`SELECT * FROM cart;`;
  return NextResponse.json( 
    { 
    userId,
    productId,
    productPrice,
    productName,
    quantity,
  }
  );
}
