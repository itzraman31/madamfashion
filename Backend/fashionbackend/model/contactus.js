const mongoose=require('mongoose')

const contactus=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const Contactus=new mongoose.model('contactus',contactus);

module.exports=Contactus;