const mongoose = require('mongoose');

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_CONNECT_URI)
        console.log("MongoDB Connected Successfully");
    } catch(error) {
        console.log('connect failed' + error);
    }
}

module.exports = connectDB;