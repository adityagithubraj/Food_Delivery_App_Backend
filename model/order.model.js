
const mongoose=require("mongoose");
require("dotenv").config()

  
const addrSchema=new mongoose.Schema({
      street: String,
      city: String,
      state: String,
      country: String,
      zip: String
})

const schema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    restaurant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    items:[
        {
            name:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                required:true
            },
            quantity:{
                type:String,
                required:true
            }
        }
    ],
    totalprice:{
        type:String,
        required:true
    },
    deliveryAddress: {
            street: String,
            city: String,
            state: String,
            country: String,
            zip: String
     },
     status:{
        type:String,
        enum:["placed", "preparing", "on the way", "delivered"],
     }

})


const Order=mongoose.model("order",schema);



module.exports={Order}