import getSingleProduct from "@/utils/getSingleProduct";
import React from "react";

const SingleProductPage = async ({ params }) => {
  const product = await getSingleProduct(params.id);
  // console.log({ product })
  return <div>{ product.title }</div>;
};

export default SingleProductPage;
