import Stripe from 'stripe'

import { NextRequest,NextResponse } from 'next/server'

export async function GET(request, response){
    const stripe = new Stripe("sk_test_51NI8bkApxDtiPM7tzkFxOJHzrpzK87BBdryTaRMchBcmdDzMY98oEQj00Ap4aV0TjD0m1OMD1EHDFCn7TqU8v4oH00HUYv9YDl");
    const prices = await stripe.prices.list({
         limit:4,
    });
    // prices.data.reverse()
    return NextResponse.json( prices.data.reverse())
}