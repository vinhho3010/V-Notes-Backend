import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async function () {
  try {
    const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@v-notes.hcm2ciy.mongodb.net/?retryWrites=true&w=majority`;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connect to Database Successfully!!!");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
