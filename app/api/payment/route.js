import Stripe from 'stripe'
import { NextRequest,NextResponse } from 'next/server'

export async function POST (request){
    const stripe = new Stripe("sk_test_51NI8bkApxDtiPM7tzkFxOJHzrpzK87BBdryTaRMchBcmdDzMY98oEQj00Ap4aV0TjD0m1OMD1EHDFCn7TqU8v4oH00HUYv9YDl")
    let data = await request.json();
    let priceId = '1234';
    const session = await stripe.checkout.sessions.create({
        line_items:[
            
            {
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: 'T-shirt',
                  },
                  unit_amount: priceId*100,
                  tax_behavior: 'exclusive',
                },
                quantity: 1,
            }
        ],
        mode:'payment',
        success_url: 'http://localhost:3000',
        cancel_url: 'http://localhost:3000'
    })
    // session.url
    return NextResponse.json(session.url)
}