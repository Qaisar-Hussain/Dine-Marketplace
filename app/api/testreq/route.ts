import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const client = await db.connect();
  const payload = await request.json();

  const { userId, productId, productPrice, productName, quantity } = payload;

  await client.sql`INSERT INTO cart (user_id, product_id ,quantity) VALUES (${userId}, ${productId},${quantity});`;

  const cart = await client.sql`SELECT * FROM cart;`;
  return NextResponse.json({
    userId,
    productId,
    productPrice,
    productName,
    quantity,
  });
}
