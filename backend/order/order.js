const express = require('express')
const { default: mongoose, Model } = require('mongoose')
const Order = require('./orderModel/createorderModel')

const router = express.Router()
const ORDER =mongoose.model("ORDER")

router.get('/allorder', async(req, res) => {
    try{

        const result= await ORDER.find().then(data=>res.json(data))
        res.send(result)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

router.get('/products', async(req, res) => {
    try{
        
        const data = await ORDER.find().sort({_id:-1});
        res.json(data);
    }
    catch(e){
        res.status(406).json({
            status:"Failed",
            message:e.message,
        })
    }
})

router.post('/createorder',async(req,res)=>{

    try{
        await ORDER.create({user:req.user, ...req.body});
            res.status(201).json({
                status : "success",
                message: "data added"
            });
        }
        catch(e){
            res.status(406).json({
                status:"Failed",
                message:e.message,
            })
        }
   
})

router.patch('/update/:id',async(req,res)=>{
    try{
        const id =req.params.id;
        const updateOrder =req.body;
        const result=await Model.findByIdAndUpdate(
            id,updateOrder
        )
        res.send(result)
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
})
router.delete('/delete/:id',async(req,res)=>{
    try{
        const id =req.params.id;
        const deleteORDER=await Model.findByIdAndDelete(id)
        res.send(`data deleted ${deleteORDER.jeans}`)
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
})


module.exports=router

// try{
//     const object={
//         quantity,
//         washing,
//         ironing,
//         drycleaning,
//         chemicalcleaning
//     }
//     const {shirts,tshirts,trousers,jeans,boxers,joggers}=req.body;       
//     const data= await new Model.create({
   
//     })
//     data.save().then(user=>{res.json({message:"success"})})
// }
// catch(err){
//     res.status(500).json({message:err.message})
// }