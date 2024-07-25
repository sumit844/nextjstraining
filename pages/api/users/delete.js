
import userModel from "@/model/users";
import connectMongoDB from "@/middlewares/connectMongoDB";
const handler=async(req,res)=>{

    if(req.method=="DELETE"){
        

        var propertyName=req.body.propertyname;
        var deleteValue=req.body.deleteValue;

        var temp={}
        temp[propertyName]=deleteValue
        var data=await userModel.deleteMany(temp)  
       
        res.status(200).json(data)

    }else{
        res.status(404).json({"Message":"You have to hit the DELETE API ONLY"})
    }

}

export default handler;