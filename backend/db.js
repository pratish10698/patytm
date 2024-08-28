const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/paytm")
//simple solution

// const userSchema = mongoose.Schema({
//     username:String,
//     password:String,
//     firstName:String,
//     lastName:String
// })

// correct approach

const userSchema= mongoose.Schema({
    user:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:true,
        maxLength:30
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    }
})
const accountSchema = new mongoose.Schema[{
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true

    },
    balance:{
        type:Number,
        required:true
    }
}]
const Account=mongoose.model("Account",accountSchema)
const User = mongoose.model("User",userSchema);
module.exports={
    User
}