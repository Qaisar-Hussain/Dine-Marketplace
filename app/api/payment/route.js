import Stripe from 'stripe'
import { NextRequest,NextResponse } from 'next/server'

export async function POST (request){
    const stripe = new Stripe("sk_test_51NI8bkApxDtiPM7tzkFxOJHzrpzK87BBdryTaRMchBcmdDzMY98oEQj00Ap4aV0TjD0m1OMD1EHDFCn7TqU8v4oH00HUYv9YDl")
    let data = await request.json();
    // let price = data.total;
    // let price = '11122';
    let nameOfProduct=data.product_data.name
    let price=data.product_data.total
    // let img = data.price_data.image
    const session = await stripe.checkout.sessions.create({
        line_items:[
            
            {
                price_data: {
                  currency: 'usd',
                  product_data: {
                    // name: 'T-shirt',
                    name:nameOfProduct,
                    // image: [img[0]],
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
    // session.url
    return NextResponse.json(session.url)
    // return NextResponse.json(data)
}