import React, { useState } from "react";
import toast from "react-hot-toast";

import InputField from "./InputField";

import useProductStore from "../store/product";

const ProductEditModal = ({
  productToEdit,
  editingId,
  setEditingId,
  setProductToEdit,
}) => {
  const [formData, setFormData] = useState(productToEdit);

  const { updateProduct } = useProductStore();

  const handleEditProduct = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.image) {
      toast.error("All fields are required.");
      return;
    }

    const { status, message } = await updateProduct(formData, editingId);
    if (status === "success") {
      toast.success(message);
    } else {
      toast.error(message);
    }

    setEditingId(null);
    setProductToEdit(null);
  };

  return (
    <div className="bg-[rgba(0, 0, 0, 0.4)] absolute top-0 left-0 h-screen w-full  z-10 flex items-center justify-center">
      <div className="relative w-full md:w-[50%] z-20">
        <form className="mx-2 bg-slate-900 md:mx-auto flex flex-col items-center space-y-6 px-4 pb-6 pt-6 md:pt-8 rounded-lg">
          <h1 className="text-center text-white text-xl md:text-2xl">
            Edit Product
          </h1>
          <InputField
            placeholder="Product name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <InputField
            placeholder="Price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
          <InputField
            placeholder="Image URL"
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
          />
          <div className="flex items-center justify-around w-[70%]">
            <button
              onClick={handleEditProduct}
              className="bg-blue-700 rounded-lg text-white py-2 px-4 cursor-pointer hover:bg-blue-600 transition-all duration-150"
            >
              Save Changes
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setEditingId(null);
                setProductToEdit(null);
              }}
              className="bg-cyan-700 rounded-lg text-white py-2 px-4 cursor-pointer hover:bg-cyan-600 transition-all duration-150"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductEditModal;
