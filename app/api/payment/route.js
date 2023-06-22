import Stripe from 'stripe'
import { NextRequest,NextResponse } from 'next/server'

export async function POST (request){
    const stripe = new Stripe("sk_test_51NI8bkApxDtiPM7tzkFxOJHzrpzK87BBdryTaRMchBcmdDzMY98oEQj00Ap4aV0TjD0m1OMD1EHDFCn7TqU8v4oH00HUYv9YDl")
    let data = await request.json();
    
    let nameOfProduct=data.product_data.name
    let price=data.product_data.total
    
    const session = await stripe.checkout.sessions.create({
        line_items:[
            
            {
                price_data: {
                  currency: 'usd',
                  product_data: {
                   
                    name:nameOfProduct,
                   
                  },
                  unit_amount: price*100,
                  tax_behavior: 'exclusive',
                },
                quantity: 1,
            }
        ],
        mode:'payment',
        success_url: 'https://dine-marketplace.vercel.app/pages/success',
        cancel_url: 'https://dine-marketplace.vercel.app/pages/cancel'


    })
   
    return NextResponse.json(session.url)
    
}
// success_url: process.env.SUCCESS_URL || 'http://localhost:3000/pages/success',
// cancel_url: process.env.CANCEL_URL || 'http://localhost:3000/pages/cancel',