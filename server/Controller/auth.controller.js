import { request , response } from "express";
import User from "../models/usermodel.js";
import UserLog from "../models/userlogsmodel.js";
import bcryptjs from 'bcryptjs'
import Jwt from "jsonwebtoken"


 export const Signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username ,email, password: hashedPassword });
    try {
      await newUser.save();
      res.status(201).json('User created successfully!');
      next();
    } catch (error) {
      
    }
  }

export const Signin = async (request, response, next) => {
  const { email, password } = request.body;

  try {
      
      const validUser = await User.findOne({ email });

      if (!validUser) {
          return response.status(404).json({ success: false, message: "User not Found" });
      }  
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) {
          return response.status(401).json({ success: false, message: "Invalid email or password" });
      }

      const userLog = new UserLog({
          userId: validUser._id,
          username: validUser.username, 
          action: 'login',
          timestamp: new Date(),
      });
      await userLog.save();
      const token = Jwt.sign({ id: validUser.id }, process.env.JWT);   
      const { password: pass, ...rest } = validUser._doc;
      response.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
    
  } catch (error) {
      next(error);
  }
};
