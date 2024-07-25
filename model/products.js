import mongoose from "mongoose";

const {Schema}=mongoose;

var productSchema=new Schema({
title:{type:String},
description:{type:String},
price:{type:Number},
category:{type:String},
imageURL:{type:String},
id:{type:String,
unique:true,
required:true
}
})

var productDetailCollection=mongoose.models?.productdetails||mongoose.model("productdetails",productSchema);

export default productDetailCollection;