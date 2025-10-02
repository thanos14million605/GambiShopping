import React, { useState } from "react";
import toast from "react-hot-toast";

import InputField from "../../ui/InputField";
import ButtonSubmit from "../../ui/ButtonSubmit";
import useProductStore from "../../store/product";

const ProductCreateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, price, image } = formData;
    console.log(name, price, image, formData);

    const { status, message } = await createProduct(formData);

    console.log("Success", status);
    console.log("Message", message);
    if (status === "success") {
      toast.success(message);
    } else {
      toast.error(message);
    }

    setFormData({
      name: "",
      price: "",
      image: "",
    });
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:w-[70%]">
        <h3 className="mb-6 text-white dark:text-blue-600 text-xl md:text-2xl tracking-wider text-center font-bold">
          Create Product
        </h3>
        <form
          onSubmit={handleSubmit}
          className="mx-2 bg-slate-700 md:mx-auto flex flex-col items-center space-y-6 px-4 pb-6 pt-6 md:pt-8 rounded-lg"
        >
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
          <ButtonSubmit />
        </form>
      </div>
    </div>
  );
};

export default ProductCreateForm;
