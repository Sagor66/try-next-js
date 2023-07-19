"use client";
import { useRef, useState, useTransition } from "react";
import ManageSingleProduct from "./ManageSingleProduct";
import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";

const ManageProduct = ({ products }) => {
  const modelRef = useRef(null);
  const [updateData, setUpdateData] = useState(null);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);

  const isLoading = isPending || loading;

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
      setLoading(true);
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
        form.reset();
        closeModal();
        setLoading(false);
        startTransition(() => {
          router.refresh();
        });
      } catch (error) {
          console.log(error.message);
          setLoading(false);
      }
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      });
      const result = await res.json();

      startTransition(() => {
        router.refresh();
      });
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <table
        className={`border-collapse w-full ${
          isLoading ? "opacity-50" : "opacity-100"
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
      <Modal
        ref={modelRef}
        closeModal={closeModal}
        updateData={updateData}
        handleSubmit={handleSubmit}
      ></Modal>
    </div>
  );
};

export default ManageProduct;
