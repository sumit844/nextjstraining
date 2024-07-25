import userModel from "@/model/users";

import connectMongoDB from "@/middlewares/connectMongoDB";

const handler=async (req,res)=>{

    if(req.method=="PUT"){
        var propertyname=req.body.propertyname;
        var newValue=req.body.newValue;
        var  oldValue=req.body.oldValue;
        var temp={}
        temp[propertyname]=oldValue
        var temp1={}
        temp1[propertyname]=newValue
      var data=await userModel.findOneAndUpdate(temp,temp1);

        return res.status(200).json(data)

    }
    else{

        return res.status(404).json({"Message":"You have to hit the PUT API ONLY"})
    }


}

export default connectMongoDB(handler);