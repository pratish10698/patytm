const express=required("express");
const userRouter=require("./user");
const accountRouter = require("./account")

const router=express.Router();
const app=express()
router.use("/user",userRouter)
router.use("/account",accountRouter)

module.export=router;
