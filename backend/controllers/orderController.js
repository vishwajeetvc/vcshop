import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js";

const placeOrderCOD = async (req, res)=>{

  try {
    const  { userId, items, amount, address } = req.body

    const orderData  = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment : false,
      date : Date.now()
    }

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findOneAndUpdate({userId}, {cartData : {}})

    res.json({success : true, message : "Order Placed"});

  } catch (error){
    console.log(error)
    console.log("Error in COD ORDER")
    res.json({success : false, message : "Can't place order"});
  }

}
const placeOrderStripe = async (req, res)=>{

}
const placeOrderRazorpay = async (req, res)=>{

}
const getUserOrders = async (req, res) => {

}



//============================= For Admin Panel only ====================================
const updateOrderStatus = async (req, res) => {

}
const getAllOrders = async (req, res) => {

}

export {placeOrderCOD, placeOrderStripe, placeOrderRazorpay, getUserOrders, updateOrderStatus, getAllOrders}
