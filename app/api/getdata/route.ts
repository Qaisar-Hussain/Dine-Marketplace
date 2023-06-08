// import { db } from '@vercel/postgres';
// import { NextApiRequest, NextApiResponse } from 'next';
// import {NextResponse} from "next/server" 
// export async function GET(
//   request: NextApiRequest,
//   response: NextApiResponse,
// ) {
//   const client = await db.connect();
 
  
 
//   const data = await client.sql`SELECT * FROM Cart;`;
//   return NextResponse.json(data.rows);
  
// }
import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const client = await db.connect();
  const payload = await request.json();

  const {userId} = payload;

  // await client.sql`INSERT INTO cart (user_id, product_id ,quantity) VALUES (${userId}, ${productId},${quantity});`;

  // const cart = await client.sql`SELECT * FROM cart;`;
  const result = await client.sql`
  SELECT *
  FROM cart
  WHERE user_id = ${userId};
`;

  return NextResponse.json(
    result.rows
   
  );
}
