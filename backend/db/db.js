import mongoose from "mongoose";

const connectToDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("DB Connection Successful");
  } catch (err) {
    console.log("DB Connection Failed", err);
  }
};

export default connectToDB;
