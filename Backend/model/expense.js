import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
    amount:{ type:Number, required:true },
    category:{ type:String, required:true },
    date:{ type:Date, defaault:Date.now },
    userId:{ type:mongoose.Schema.Types.ObjectId, 
        ref:'User', 
        required:true }
})

export default mongoose.model('Expense', expenseSchema);