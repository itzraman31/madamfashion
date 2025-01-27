const express=require('express')
const mongoose=require('mongoose')
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken')

const signup=new mongoose.Schema({
    firstname:{
        type:String,
        requried:true,
    },
    lastname:{
        type:String,
        requried:true,
    },
    number:{
        type:String,
        requried:true,
    },
    email:{
        type:String,
        requried:true,
    },
    password:{
        type:String,
        requried:true,
    }
})

signup.pre('save',async function(){
    let hashpass=await bcrypt.hash(this.password,10)
    this.password=hashpass;
})

signup.methods.checkpass = async function(pass)
{
    return bcrypt.compare(pass,this.password);
}

signup.methods.gettoken=async function(){
    return jwt.sign({
        userid:this._id.toString(),
        email:this.email
    },process.env.secret
    
    )
}

const Signup=new mongoose.model('signup',signup);
module.exports=Signup