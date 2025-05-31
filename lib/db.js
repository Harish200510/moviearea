import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const connectDB=async()=>{
   try{
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('MongoDB connected successfully');  
}
   catch(error){
    console.error(error.message)
    process.exit(1); // Exit process with failure
   }
}

export default connectDB;
// Export the connectDB function to be used in other files