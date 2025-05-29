
import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {

  const {token} = req.headers;


  if(!token) {
    res.json({success : false, msg :'Not authorized please login again!'});
  }

  try {

    const decode_token = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decode_token.id;
    next();

  } catch (err){
    console.log(err)
    res.json({success:false , msg : 'something went wrong in authentication'});
  }

}


export default auth;
