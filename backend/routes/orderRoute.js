import expresss from 'express'
import { placeOrderCOD, placeOrderStripe, placeOrderRazorpay, getUserOrders, updateOrderStatus, getAllOrders } from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import auth from '../middleware/auth.js';


const orderRouter = expresss.Router();


// Admin only
orderRouter.post('/all', adminAuth, getAllOrders);
orderRouter.post('/status', adminAuth, updateOrderStatus);


// payment features 
orderRouter.post('/cod', auth, placeOrderCOD);
orderRouter.post('/stripe', auth, placeOrderStripe);
orderRouter.post('/razorpay', auth, placeOrderRazorpay);


// user Feature

orderRouter.post('/userorders', auth, getUserOrders )

export  default orderRouter



