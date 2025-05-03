import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        await mongoose.connect(procees.env.MONGO_URI);
    } catch(error){

    }
}