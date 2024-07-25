import mongoose from 'mongoose'

const Schema=mongoose.Schema;

var userSchema=new Schema({
userId:{
    type:String,
    required:true,
    unique:true
},
Name:{
    type:String,
    required:true
},
Email:{
    type:String,
    required:true
}
,
Password:{
    type:String,
    required:true
}
,
MobileNumber:{
    type:String,
    required:true
}

})

var userModel= mongoose.models.users || mongoose.model('users',userSchema)

export default userModel