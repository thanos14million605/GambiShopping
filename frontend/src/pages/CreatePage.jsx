import React from "react";
import Navbar from "../ui/Navbar.jsx";
import ProductCreateForm from "../features/products/ProductCreateForm.jsx";

const CreatePage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-full md:h-[90%] w-full md:w-[70%] bg-gray-400 dark:bg-slate-800 md:rounded-2xl">
        <Navbar />
        <ProductCreateForm />
      </div>
    </div>
  );
};

export default CreatePage;
