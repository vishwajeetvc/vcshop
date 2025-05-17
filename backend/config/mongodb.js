import mongoose from "mongoose";

const connectDB = async() =>{

  mongoose.connection.on('connected',()=>{
    console.log("Connected to DB successfully");
  } )

  try{
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
  } catch (error){
    console.log("Error in db Connection");
  }

}

export default connectDB;
