import mongoose from "mongoose";

//here we are making a connection to mongodb compass using mongoose.connect
//will export this connectToMongoose function
const connectToMongooseDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to Mongo DB");
  } catch (error) {
    console.log("Error connecting to MongoDb", error.message);
  }
};

export default connectToMongooseDb;
