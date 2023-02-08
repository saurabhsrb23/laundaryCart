const mongoose =require('mongoose')

const orderSchema =new mongoose.Schema(
    {
        jeans:{
            type:String
        }
    }
)
mongoose.model("ORDER",orderSchema)