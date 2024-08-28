const express = require("express");
const router = express.Router();
import {authMiddleware} from "../middleware"

router.get("/balance",authMiddleware,async (req,res)=>{
const account = await Account.findOne({userId:req.userId})
    res.status(200).json({
        balance:account.balance
    })
})
router.post("/transfer",async (req,res)=>{
    const {amount, to}=req.body;
    const account = await Account

    const toAccount  = await  Account.findOne({userId:req.userIdTo})
    const 
    if(!to){
        res.status(400).json({message:"Invalid Account"})
    }
    if()
})
module.exports =router;