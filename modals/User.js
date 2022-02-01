import mongoose, { models } from 'mongoose'

const userSchema = new mongoose.Schema({
    full_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
})

export default mongoose.models.User || mongoose.model('User',userSchema)