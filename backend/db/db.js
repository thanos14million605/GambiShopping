import mongoose from "mongoose";

const connectToDB = async (url) => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(url, { dbName: "GambiShopping" });
    console.log("DB Connected Successfully ✅");
  } catch (err) {
    console.error("DB Connection Failed ❌", err);
  }
};

export default connectToDB;
