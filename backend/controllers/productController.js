import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/ProductModel.js";

const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, bestseller} = req.body;

    const image1= req.files.image1?.[0];
    const image2= req.files.image2?.[0];
    const image3= req.files.image3?.[0];
    const image4= req.files.image4?.[0];

    const images = [image1, image2, image3, image4].filter(item => item !== undefined);

    const imagesUrl = await Promise.all(
      images.map( async (img)=> {
        console.log(img.path)
          let result = await cloudinary.uploader.upload(img.path, {resource_type : 'image'});
          return result.secure_url;
      })
    )

    const productData = {
      name,
      description,
      price : +price,
      subCategory,
      category,
      bestseller: bestseller == "true" ? true: false,
      sizes: JSON.parse(sizes),
      image : imagesUrl,
      date : Date.now()
    }

    const product = new productModel(productData) 

    await product.save();

    res.json({success : true , msg : 'Product Added'});
  }  catch (error) {
    console.log(error)
    res.json({success: false, msg : "Couldn't add you product"});

  }
}

const listProduct = async (req, res) => {
  try {

    const products = await productModel.find({});

    res.json({success :true, products})
    
  } catch (error) {

    res.json({success :true, msg: "can't get products" });
  }
}

const removeProduct = async (req, res) => {

  try {

    await productModel.findByIdAndDelete(req.body.id)

    res.json({success :true, msg: "Product removed" });
    
  } catch (error) {

    res.json({success :false, msg: "Can't remove the product" });
  }
}

const getSingleProduct = async (req, res) => {

  try {
    
    const product = await productModel.findById(req.body.id)
    res.json({success :true, product});

  } catch (error) {

    res.json({success :false, msg: "Product Not found" });
  }

}

export {addProduct, listProduct, removeProduct, getSingleProduct}
