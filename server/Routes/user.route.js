import express  from 'express';
import {pendingReq ,updatereq , getuserLogs } from '../Controller/user.controller.js';

const router = express.Router();

router.get('/pending' , pendingReq);

router.put('/update/:id',updatereq)

router.get('/userlogs' , getuserLogs)

export default router; 

