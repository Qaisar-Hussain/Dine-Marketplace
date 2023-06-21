import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const client = await db.connect();
  const payload = await request.json();
  const{user_id, product_id, id}=payload.deletedItem

  const result = await client.query(
    `DELETE FROM cart WHERE id = $1 AND user_id = $2 AND product_id = $3 RETURNING *`,
    [id, user_id, product_id]
  );

  // return NextResponse.json(result);
  return NextResponse.json({user_id, product_id, id ,payload});
}