import productDetailCollection from "@/model/products";
import connectMongoDB from "@/middlewares/connectMongoDB";

const handler=async(req,res)=>{

    const {id}=req.query;
    console.log(id)
  var data=await productDetailCollection.findOne({id:id})
    return res.status(200).json(data)

}

export default handler