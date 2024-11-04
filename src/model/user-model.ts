import mongoose from "mongoose";

const user = new mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    }
})

const UserModel = mongoose.models.users ||  mongoose.model("users",user);

export default UserModel;
