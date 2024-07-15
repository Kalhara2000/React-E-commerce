import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//placing user order for frontend
const placeOrder = async (req, res) => {

  const frontend_url = "http://localhost:3000";

  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save(); //save order in DB
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    //get item
    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "LKR",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price,
      },
      quantity: item.quantity,
    }));

    //
    line_items.push({
      price_data: {
        currency: "LKR",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 200,
      },
      quantity: 1,
    });

    //create session for orders
    const session = await stripe.checkout.sessions.create({
        line_items: line_items,
        mode: 'payment',
        success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
      });
      

    res.json({ success: true, session_url: session.url });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};


//user order for frontend - done
const userOrders = async (req,res) =>{
  try {
    const orders = await orderModel.find({userId:req.body.userId});
    res.json({ success: true, data:orders })
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "user orders Error" });
  }
}

export { placeOrder,userOrders };
