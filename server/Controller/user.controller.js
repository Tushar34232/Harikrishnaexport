import { request , response } from "express";
import User from "../models/usermodel.js";
import UserLog from "../models/userlogsmodel.js";

export const pendingReq = async (req, res, next) => {
  try {
     const pendingRequests = await User.find({ "approvalStatus": 'pending' });

      
     
    res.json(pendingRequests);
    next();
  } catch (error) {
    next(error);
  }
};


export const updatereq = async (req, res, next) => {
    try {
      const data = {"approvalStatus": "approved"}
      
       let user = await User.findById(req.params.id);

       if(!user) {
        res.status(404).json({error: 'User not found'});
        next();
       }

     user = await User.findByIdAndUpdate(req.params.id, {$set: data},{new: true});
      res.json({"msg":"request has been approved","success":true});
      next();
    } catch (error) {
      next(error);
    }
  };

  export const getuserLogs = async (req, res, next) => {
    try {
      const userLogs = await UserLog.find().populate('userId', 'username');
      res.json(userLogs);
    } catch (error) {
      next(error);
    }
  };



export default pendingReq && updatereq  && getuserLogs;