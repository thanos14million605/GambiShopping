import React from "react";
import toast from "react-hot-toast";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import useProductStore from "../../store/product";

const ProductCard = ({ product, setEditingId, setProductToEdit }) => {
  const { deleteProduct } = useProductStore();

  const handleDeleteProduct = async (id) => {
    const { status, message } = await deleteProduct(id);
    if (status === "success") {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-slate-700 shadow-md">
      <div className="h-40 overflow-hidden rounded-t-lg">
        <img
          src={product?.image}
          alt={product?.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <p className="text-lg text-white font-semibold">{product?.name}</p>
        <p className="text-lg text-white font-bold">${product?.price}</p>
        <div className="flex flex-row gap-3 mt-2">
          <button className="p-2 rounded-md bg-cyan-500 hover:bg-cyan-400">
            <FiEdit
              onClick={() => {
                setEditingId(product._id);
                setProductToEdit(product);
              }}
              className="text-slate-700 text-lg"
            />
          </button>
          <button className="p-2 rounded-md bg-red-300 hover:bg-red-400">
            <RiDeleteBin5Fill
              onClick={() => handleDeleteProduct(product._id)}
              className="text-slate-700 text-lg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
