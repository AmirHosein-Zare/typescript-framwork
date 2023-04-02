import mongoose, { model } from "mongoose";
import User from "../../Entities/User";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    number: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    }
})

export default model<User>('users', userSchema);