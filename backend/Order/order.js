const express = require('express')
const { default: mongoose, Model } = require('mongoose')

const router = express.Router()
const ORDER =mongoose.model("ORDER")


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

router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await ORDER.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.patch('/update/:id',async(req,res)=>{
    try{
        const id =req.params.id;
        const updateOrder =req.body;
        const result=await ORDER.findByIdAndUpdate(
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
        const deleteORDER=await ORDER.findByIdAndDelete(id)
        res.send(`data deleted ${deleteORDER}`)
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