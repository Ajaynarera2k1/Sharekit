import dotenv from 'dotenv'
dotenv.config()

import Razorpay from 'razorpay'
import { v4 as uniqueId } from 'uuid'

const razor = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
})

export const createOrder = async (req, res)=>{
    try {
        const order = await razor.orders.create({
            amount: (req.body.amount*100),
            currency: 'INR',
            receipt: 'SKT_'+uniqueId()
        })
        res.status(200).json(order)
    }
    catch(err)
    {
        res.status(500).json({
            message: err.message
        })
    }
}