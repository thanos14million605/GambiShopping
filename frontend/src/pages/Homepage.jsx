import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../ui/Navbar.jsx";
import ProductCard from "./../features/products/ProductCard.jsx";

import useProductStore from "../store/product.js";
import ProductEditModal from "../ui/ProductEditModal.jsx";

const Homepage = () => {
  const [editingId, setEditingId] = useState(null);
  const [productToEdit, setProductToEdit] = useState(null);
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-full w-full md:w-[70%] bg-gray-400 dark:bg-slate-800 md:rounded-2xl">
          <Navbar />
          <h1 className="text-blue-500 text-center text-xl md:text-2xl mb-6">
            Current Products 🛍️
          </h1>

          {/* Grid Container */}
          <div className="px-6 pb-6">
            {products?.length > 0 ? (
              <div className="overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    editingId={editingId}
                    setEditingId={setEditingId}
                    setProductToEdit={setProductToEdit}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-20 flex flex-col items-center justify-center gap-3">
                <p className="text-blue-400 text-lg md:text-xl">
                  No products found
                </p>
                <Link to="/create">
                  <p className="text-blue-600 cursor-pointer text-lg hover:text-blue-500">
                    Create Product
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {editingId && (
        <ProductEditModal
          productToEdit={productToEdit}
          setEditingId={setEditingId}
          setProductToEdit={setProductToEdit}
          editingId={editingId}
        />
      )}
    </>
  );
};

export default Homepage;
