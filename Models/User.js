import mongoose, { Mongoose } from "mongoose";


let  UserSchema = new mongoose.Schema(
    {
        _id:{
            type:String,
            required:true
        },

        userName :{
            type:String,
            required:true
        },
        emailId :{
            type:String,
            required:true,
            unique:true
        },
        imageUrl:{
            type:String,
            required:true
        },
        cartItems:{
            type:Object,
            default:{}
        }
    },{minimize:false}
)


const User =   mongoose.models.User || mongoose.model("User",UserSchema);

export default User;
