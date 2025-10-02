import asyncHandler from "./../utils/asyncHandler.js";
import AppError from "./../utils/AppError.js";
import Product from "../models/productModel.js";

const createProduct = asyncHandler(async (req, res, next) => {
  const { name, price, image } = req.body;

  const newProduct = await Product.create({
    name,
    price,
    image,
  });

  if (!newProduct) {
    return next(new AppError("Couldn't create product.", 500));
  }

  res.status(201).json({
    status: "success",
    message: "Product created successfully.",
    data: {
      product: newProduct,
    },
  });
});

const getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new AppError("Product not found.", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

const getAllProducts = asyncHandler(async (_, res, next) => {
  const products = await Product.find({});
  if (products?.length === 0) {
    return next(new AppError("No products found.", 400));
  }

  res.status(200).json({
    status: "success",
    results: products.length,
    data: {
      products,
    },
  });
});

const deleteProduct = asyncHandler(async (req, res, next) => {
  const productToDelete = await Product.findOneAndDelete({
    _id: req.params?.id,
  });

  if (!productToDelete) {
    return next(new AppError("Product not found.", 404));
  }

  res.status(200).json({
    status: "success",
    message: "Product deleted successfully.",
  });
});

const updateProduct = asyncHandler(async (req, res, next) => {
  const productToUpdate = await Product.findOne({ _id: req.params?.id });
  if (!productToUpdate) {
    return next(new AppError("Product not found."));
  }

  const allowedFields = ["name", "price", "image"];
  const updates = {};
  allowedFields.forEach((allowedField) => {
    if (req.body[allowedField] !== undefined) {
      updates[allowedField] = req.body[allowedField];
    }
  });

  const updatedProduct = await Product.findOneAndUpdate(
    { _id: req.params?.id },
    updates,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    message: "Product updated successfully.",
    data: {
      product: updatedProduct,
    },
  });
});

export default {
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
};
