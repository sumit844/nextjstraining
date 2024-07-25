import productDetailCollection from "@/model/products"
import connectMongoDB from "@/middlewares/connectMongoDB"

const myinfonew=async (req,res)=>{
    
var data=await productDetailCollection.find();
  
res.status(200).json(data);

}
export default connectMongoDB(myinfonew);