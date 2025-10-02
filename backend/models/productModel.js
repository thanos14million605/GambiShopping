import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required."],
    },
    price: {
      type: Number,
      required: [true, "Product price is required."],
      validate: {
        validator: function (val) {
          return val > 0 || typeof val === "number";
        },
        message: "Product price must be number and greater than 0",
      },
    },
    image: {
      type: String,
      required: [true, "Product image is required"],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
