import jwt from "jsonwebtoken"


const authMiddleware = async(req,res,next) =>{

    const {token} = req.header;
    if (!token) {
        return res.json({success:false,message:"Not Authorized Login Again..!"})        
    }
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
    } catch (error) {
        
    }
}

export default authMiddleware;