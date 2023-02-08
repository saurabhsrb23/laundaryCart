const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const createorderSchema = new mongoose.Schema(
  {
    washtype: [],
    
    shirts: {
      quantity: { type:Number, default: 0 },
      washing: { type:Boolean,defalut: 0 },
      ironing: { type:Boolean,defalut: 0},
      drycleaning: { type:Boolean,defalut: 0},
      chemicalcleaning: { type:Boolean,defalut: 0},
    },
    tshirts: {
      quantity: { type:Number, default: 0 },
      washing: { type:Boolean, defalut: 0 },
      ironing: { type:Boolean, defalut: 0 },
      drying: { type:Boolean, defalut: 0 },
      chemicalcleaning: { type:Boolean, defalut: 0 },
    },
    trousers: {
      quantity: { type:Number, default: 0 },
      washing: { type:Boolean, defalut: 0 },
      ironing: { type:Boolean, defalut: 0 },
      drycleaning: { type:Boolean, defalut: 0 },
      chemicalcleaning: { type:Boolean, defalut: 0 },
    },
    jeans: {
      quantity: { type:Number, default: 0 },
      washing: { type:Boolean, defalut: 0 },
      ironing: { type:Boolean, defalut: 0 },
      drycleaning: { type:Boolean, defalut: 0 },
      chemicalcleaning: { type:Boolean, defalut: 0 },
    },
    boxers: {
      quantity: { type:Number, default: 0 },
      washing: { type:Boolean, defalut: 0 },
      ironing: { type:Boolean, defalut: 0 },
      drying: { type:Boolean, defalut: 0 },
      chemicalcleaning: { type:Boolean, defalut: 0 },
    },
    joggers: {
      quantity: { type:Number, default: 0 },
      washing: { type:Boolean, defalut: 0 },
      ironing: { type:Boolean, defalut: 0 },
      drywashing: { type:Boolean, defalut: 0 },
      chemicalcleaning: { type:Boolean, defalut: 0 },
    },
    others: {
      quantity: { type:Number, default: 0 },
      washing: { type:Boolean, defalut: 0 },
      ironing: { type:Boolean, defalut: 0 },
      drycleaning: { type:Boolean, defalut: 0 },
      chemicalcleaning: { type:Boolean, defalut: 0 },
    
    },
  
  },


  { timestamps: true }
);
const Order= mongoose.model("createOrder",createorderSchema);
module.exports = Order;
