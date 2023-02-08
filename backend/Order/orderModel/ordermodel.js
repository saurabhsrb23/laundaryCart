const mongoose =require('mongoose')

const orderSchema =new mongoose.Schema(
    {
  
      shirts: {
        quantity: { type: Number,default:0  },
        washing: { type: Boolean,default:false },
        ironing: { type: Boolean,default:false },
        drycleaning: { type: Boolean,default:false },
        chemicalcleaning: { type: Boolean,default:false },
      },
      tshirts: {
        quantity: { type: Number,default:0   },
        washing: { type: Boolean,default:false },
        ironing: { type: Boolean,default:false },
        drying: { type: Boolean,default:false },
        chemicalcleaning: { type: Boolean,default:false },
      },
      trousers: {
        quantity: { type: Number,default:0   },
        washing: { type: Boolean,default:false },
        ironing: { type: Boolean,default:false },
        drycleaning: { type: Boolean,default:false },
        chemicalcleaning: { type: Boolean,default:false },
      },
      jeans: {
        quantity: { type: Number,default:0   },
        washing: { type: Boolean,default:false },
        ironing: { type: Boolean,default:false },
        drycleaning: { type: Boolean,default:false },
        chemicalcleaning: { type: Boolean,default:false },
      },
      boxers: {
        quantity: { type: Number,default:0   },
        washing: { type: Boolean,default:false },
        ironing: { type: Boolean,default:false },
        drying: { type: Boolean,default:false },
        chemicalcleaning: { type: Boolean,default:false },
      },
      joggers: {
        quantity: { type: Number,default:0   },
        washing: { type: Boolean,default:false },
        ironing: { type: Boolean,default:false },
        drywashing: { type: Boolean,default:false },
        chemicalcleaning: { type: Boolean,default:false },
      },
      others: {
        quantity: { type: Number,default:0   },
        washing: { type: Boolean,default:false },
        ironing: { type: Boolean, default:false},
        drycleaning: { type: Boolean,default:false },
        chemicalcleaning: { type: Boolean,default:false },
      },
  
  
    }
  
  );
mongoose.model("ORDER",orderSchema)











// {
//     "shirts": {
//         "quantity": 1,
//         "washing":"Yes",
//         "ironing":"No",
//         "drycleaning":"yes",
//         "chemicalcleaning":"yes"
//     },
//     "tshirts": {
//           "quantity": 1,
//         "washing":"Yes",
//         "ironing":"No",
//         "drycleaning":"yes",
//         "chemicalcleaning":"yes"
//     },
//     "trousers": {
//           "quantity": 1,
//         "washing":"Yes",
//         "ironing":"No",
//         "drycleaning":"yes",
//         "chemicalcleaning":"yes"
//     },
//     "boxers": {
//           "quantity": 1,
//         "washing":"Yes",
//         "ironing":"No",
//         "drycleaning":"yes",
//         "chemicalcleaning":"yes"
//     },
//     "joggers": {
//          "quantity": 1,
//         "washing":"Yes",
//         "ironing":"No",
//         "drycleaning":"yes",
//         "chemicalcleaning":"yes"
//     }
   
// }