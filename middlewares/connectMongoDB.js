import mongoose from "mongoose";

const connectMongoDB=handler => async(req,res)=>{
    if(mongoose.connections[0].readyState){
        return handler(req,res);
    }
    var connectionString=process.env.Mongo_DB_Connect_String
    console.log(process.env.Mongo_DB_Connect_String)
    await mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    })

    return handler(req,res);
}

export default connectMongoDB