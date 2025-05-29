import userModel from "../models/userModel.js";

const addToCart = async (req, res) => {

  try {

    const {userId, itemId, size} = req.body;

    const userData = await userModel.findById(userId);

    const cartData = await userData.cartData

    if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
        cartData[itemId] = {}
        cartData[itemId][size] = 1;
    }

    await userModel.findByIdAndUpdate(userId, {cartData})

    res.json({success : true, message : "Added to cart"});

  } catch (error) {
    console.log("Error while add to cart") ;
    res.json({success : false, message : "Can't add to cart"});
  }

}

const updateCart = async (req, res) => {

  try {
    const {userId, itemId, size, quantity} = req.body;

    const userData = await userModel.findById(userId);
    const cartData = userData.cartData;

    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, {cartData})

    res.json({success : true, message : "Added to cart"});

  } catch (error) {

    console.log("Error while updating to cart") ;
    res.json({success : false, message : "Can't update the cart"});

  }


}

const getUserCart = async (req, res) => {

  try {
   
    const {userId} = req.body;

    const userData = await userModel.findById(userId);
    const cartData = await userData.cartData;

    res.json({success : true, cartData});

  } catch (error) {
    
    console.log("Error while getting cart") ;
    res.json({success : false, message : "Can't get cart"});

  }

}

export { addToCart, updateCart, getUserCart}

