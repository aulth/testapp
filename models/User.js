import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
})
export default (mongoose.models && mongoose.models.User? mongoose.models.User: mongoose.model('User', UserSchema));