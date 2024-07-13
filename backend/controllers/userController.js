import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// login user
const loginUser = async (req, res) => {
  const {email,password} = req.body;
  try {
    const user = await userModel.findOne({email});
    if (!user) {
        return res.json({success:false, message:"User Doesn't Exixtes ..!"})  
    }

    const isMatch = await bcrypt.compare(password,user.password);
    if (!isMatch) {
         return res.json({success:false, message:"Invalid password..!"})  
    }

    const token = createToken(user._id);
    res.json({success:true,token})

  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Error" })
    
  }
};

// Create token for users
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' }); // Added token expiration
};

// register user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    // checking user already available or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists..!" });
    }

    // validating email format
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter valid email address..!" });
    }

    // Strong password min 8 charcters
    if (password.length < 8) {
        return res.json({success:false,message:"Please enter Storng passwords..!"})
    }

    // Encryption password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    //Save DB new user
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Server error" });
  }
};

export { loginUser, registerUser };
