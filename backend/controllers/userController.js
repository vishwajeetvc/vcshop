import bcrypt from 'bcrypt'
import validator from 'validator'
import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'

const createToken = (id) =>  {
  return jwt.sign({id}, process.env.JWT_SECRET)
}

const loginUser = async (req, res) => {

  try {
    const {email, password} = req.body;

    const user = await userModel.findOne({email});

    if(!user) {
      return res.json({success:false, message : "User doesn't exists"});
    } 

    const isMatch = await bcrypt.compare(password, user.password);

    if(isMatch) {
      const token = createToken(user._id);
      res.json({success:true, token})
    } else {
      res.json({success:false, msg: "Invalid Credentials"});
    }

  } catch {
    console.log("login Error");
    res.json({success:false, msg: "Something went wrong"});
  }

}

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

  try {
    const {email, password} = req.body 

    if(email == process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASSWORD){

      const token = jwt.sign(email+password, process.env.JWT_SECRET);
      res.json({success:true, token})

    } else {
      res.json({success:false, msg : "Invalid Credentials"});
    }
  } catch (error) {
      res.json({success:false, msg : "Something went wrong"});
  }
}

export {loginUser, registerUser, adminLogin}
