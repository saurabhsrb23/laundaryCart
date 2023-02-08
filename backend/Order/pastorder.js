const express = require('express')
const { default: mongoose, Model } = require('mongoose')

const router = express.Router()
const ORDER =mongoose.model("ORDER")



router.get('/allorder', async(req, res) => {
    try{

        const result= await ORDER.find().then(data=>res.json(data))
        // res.send(result)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})


router.post('/post',(req,res)=>{

    try{

        const {jeans}=req.body;
        
        const data=new ORDER({
            jeans
        })
        
        data.save().then(user=>{res.json({message:"success"})})
    }
    catch(err){
        res.status(500).json({message:err.message})
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