import bcrypt from 'bcrypt'
import validator from 'validator'
import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'

const createToken = (id) =>  {
  return jwt.sign({id}, process.env.JWT_SECRET)
}

const loginUser = async (req, res) => {}

const registerUser = async (req, res)=> {

  try {
    const {name, email, password} = req.body;
    const exits = await userModel.findOne({email})

    if(exits) {
      return res.json({success: false, msg : "User Already Exists!"})
    }

    if(!validator.isEmail(email)){
      return res.json({success: false, msg : "Incorrect Email"})
    }

    if(password.length < 8){
      return res.json({success: false, msg : "Please enter the strong password"})
    }

    const salt  =  await bcrypt.genSalt(10)
    const hashedPassword =  await  bcrypt.hash(password, salt)

    const newUser = new userModel({
      name, email, password : hashedPassword
    }) 

    const user = await newUser.save()
    const token = createToken(user._id)

    res.json({success: true, token})
  } catch {
    console.log("Error in Registration")
    res.json({success:false, msg : "Error in registration"});

  }
}

const adminLogin = async (req, res) => {

}

export {loginUser, registerUser, adminLogin}
