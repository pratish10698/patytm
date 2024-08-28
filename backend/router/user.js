const express=require("express")
const jwt = require("jsonwebtoken")
const zod=require("zod")
const router= express.Router();

const signupSchema=zod.object({
    username:zod.string(),
    password:zod.string(),
    firstName:zod.string(),
    password:zod.string()
})
const signinSchema=zod.object({
    username:zod.string().email(),
    password:zod.strig()
})
const updateBody=zod.object({
    password:zod.string().optional(),
    firstName:zod.string().optional(),
    lastName:zod.string().optional()
})
router.post("/signup",async (req,res)=>{
    const body = req.body;
    const{success}=signupSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message:"Email is already taken / Incorrect input"
        })
    }
    const user=User.findOne({
        username:body.username
    })
    if(user_id){
        return res.status(411).json({
            message:"User Already exist"
        })
    }

    const dbUser=await User.create(body);
    const userID = dbUser.user._id;
    await Account.create({
        userId,
        balance:1+Math.random()*10000
    })
    const token = jwt.sign({
        userId:dbUser._id,

    },JWT_SECRET)
    
    res.status(200).json({
        message:"User created successfullly",
        token:token
    })
    

})
router.get("/signin",async (req,res)=>{

const {success}=signinSchema.safeParse(req.body)
if(!success){
    return res.status(411).json({
        message:"Incorrect inputs"
    })
}
const user =await User.finsOne({
    username:req.body.username,
    password:req.body.password
});
if(user){
    const token=jwt.sign({
        userId:iser._id
    },JWT_SECRET);
    res.status(200).json({
        token:token
    })
    return;
}
res.status(411).json({
    meassage:"Error whild logging in"
})
})
router.put("/",authMiddleware,async (req,res)=>{
    const {success} = updateBody.safeParse(req.body);
    if(!success){
        res.status(411).json({
            message:"Error while updating information"
        })
    }
    await User.updateOne({_id:req.userId},req.body);
    res.json({
        message:"update successfull"
    })
})
router.get("/bulk",async ()=>{
const filter=req.query.filter || "";
const users = await User.find({
    $or:[{
        firstName:{
            "$regex":filter
        }
    },{
        lastName:{
            "regex":filter
        }
    }]
})
res.json({
    user:users.map(user=>({
        username:user.username,
        firstName:user.firstName,
        lastName:user.lastName,
        _id:user._id
    }))
})
})
module.exports=router