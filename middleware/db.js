import mongoose from "mongoose";
const connectToDb = ()=>{
    console.log('connecting...')
    console.log(process.env.mongodb)
    mongoose.connect(process.env.mongodb,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log('connected to database')
    })
}
export default connectToDb