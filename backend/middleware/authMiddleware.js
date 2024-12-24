const jwt = require('jsonwebtoken')

function authentication(req,res,next){
  const authHeader = req.headers['authorization'];
    if(!authHeader){
       return res.status(401).json({success:false,message:"not authenticate"});
      }
    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ success: false, message: 'Not authenticated: Token missing' });
    }
  try {
    const decodedPayload = jwt.verify(token, process.env.JWT_SECRET_KEY); //it will return the payload i.e. user
    req.user = decodedPayload;
    next();
  }
   catch (err) {
    res.status(401).json({ success: false, message: 'Invalid token', error: err });
  }
  
}


module.exports = {authentication}
