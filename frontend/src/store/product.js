import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  setProducts: (product) => {
    set((state) => {
      const newProducts = [...state.products, product];
      return { products: newProducts };
    });
  },
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return {
        status: "fail",
        message: "Please fill in all fields",
      };
    }

    const res = await fetch("/api/v1/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const data = await res.json();
    // console.log(data);
    if (data.status !== "success") {
      return {
        status: data.status,
        message: data.message,
      };
    }

    set((state) => {
      const newProducts = [...state.products, data.data.product];
      return {
        products: newProducts,
      };
    });

    return { status: data.status, message: data.message };
  },
  fetchProducts: async () => {
    const res = await fetch("/api/v1/products");

    const data = await res.json();

    set(() => {
      return {
        products: data.data.products,
      };
    });
  },
  deleteProduct: async (id) => {
    const res = await fetch(`/api/v1/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(id);

    const data = await res.json();
    if (data.status !== "success") {
      return {
        status: data.status,
        message: data.message,
      };
    }
    console.log(data);
    set((state) => {
      const newProducts = state.products.filter(
        (product) => product._id !== id
      );
      return {
        products: newProducts,
      };
    });

    return {
      status: data.status,
      message: data.message,
    };
  },
  // TODO: UPDATE Product
  updateProduct: async (newData, id) => {
    const res = await fetch(`/api/v1/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    const data = await res.json();

    if (data.status !== "success") {
      return {
        status: data.status,
        message: data.message,
      };
    }

    set((state) => {
      const newProducts = state.products.map((product) =>
        product._id === id
          ? {
              ...product,
              ...newData,
            }
          : product
      );

      return {
        products: newProducts,
      };
    });

    return {
      status: data.status,
      message: data.message,
    };
  },
}));

export default useProductStore;
