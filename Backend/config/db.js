import mongoose from 'mongoose';

const connectDB = async () =>{
    try{
        await mongoose.connect('mongodb://localhost:27017/expense_tracker');
        console.log('connected to mongodb');
    }catch(error){
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}
export default connectDB;