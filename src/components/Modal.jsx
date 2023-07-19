import React, { forwardRef, useRef } from "react";

const Modal = ({ closeModal, updateData, handleSubmit }, ref) => {
  const formRef = useRef(null);

  return (
    <dialog ref={ref} className="w-[98%] max-w-[500px] rounded-md p-6">
      <div className="text-right mb-4">
        <button
        className="text-red-500"
          onClick={() => {
            closeModal();
            formRef.current.reset();
          }}
        >
          Close
        </button>
      </div>
      <form onSubmit={handleSubmit} ref={formRef}>
        <input
          className="w-full mb-2 p-2 border border-black"
          type="text"
          placeholder="title"
          name="title"
          defaultValue={updateData?.title}
        />
        <input
          className="w-full mb-2 p-2 border border-black"
          type="number"
          placeholder="price"
          name="price"
          defaultValue={updateData?.price}
        />
        <button className="text-white px-2 py-1 bg-blue-500 rounded">
          Submit
        </button>
      </form>
    </dialog>
  );
};

export default forwardRef(Modal);
