
import express from 'express'
import { addToCart, getUserCart, updateCart } from '../controllers/cartController.js';
import auth from '../middleware/auth.js';


const cartRouter = express.Router();


cartRouter.post('/get',auth, getUserCart)
cartRouter.post('/update',auth, updateCart)
cartRouter.post('/add', auth, addToCart)


export default cartRouter;
