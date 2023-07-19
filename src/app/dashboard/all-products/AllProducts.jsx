"use client";

import { useRef, useState } from "react";
import ManageSingleProduct from "../manage-product/ManageSingleProduct";
import Modal from "@/components/Modal";
import useProducts from "@/hooks/useProducts";

const AllProducts = () => {
  const { products, isLoading, isValidating, mutate } = useProducts();
  const modelRef = useRef(null);
  const [updateData, setUpdateData] = useState(null);

  const openModal = (product) => {
    setUpdateData(product);
    modelRef.current.showModal();
  };

  const closeModal = () => {
    setUpdateData(null);
    modelRef.current.close();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const data = { title, price };

    if (title && price) {
      try {
        const res = await fetch(
          `http://localhost:5000/products/${updateData?.id}`,
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const result = await res.json();
        mutate()
        form.reset();
        closeModal();
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      mutate()
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
        {isLoading && <h1 className="text-center text-2xl font-semibold">Loading...</h1>}
      {!isLoading && (
        <table
          className={`border-collapse w-full ${
            isValidating ? "opacity-50" : "opacity-100"
          }`}
        >
          <thead>
            <tr>
              <th className="border border-slate-400">Title</th>
              <th className="border border-slate-400">Price</th>
              <th className="border border-slate-400">Update</th>
              <th className="border border-slate-400">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ManageSingleProduct
                key={product.id}
                product={product}
                openModal={openModal}
                handleDelete={handleDelete}
              ></ManageSingleProduct>
            ))}
          </tbody>
        </table>
      )}
      <Modal
        ref={modelRef}
        closeModal={closeModal}
        updateData={updateData}
        handleSubmit={handleSubmit}
      ></Modal>
    </div>
  );
};

export default AllProducts;
