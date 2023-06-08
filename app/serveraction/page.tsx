'use server'
import { RequestCookie, ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { v4 as uuid } from "uuid";

export async function myAction() {
  const setCookies = cookies();
  let randomId = uuid();


  let user_id: RequestCookie | undefined = setCookies.get("user_id");

  if (!user_id) {
    const responseCookie: ResponseCookie = { name: "user_id", value: randomId };
    setCookies.set(responseCookie);
    user_id = responseCookie;
  }
  

  return user_id
}