import Link from "next/link";
import React from "react";

const SingleCategory = ({ category }) => {
  const { id, name } = category;
//    console.log({ id, name })

  return (
    <Link href={`/products?categoryId=${id}`}>
      <h1>{name}</h1>
    </Link>
  );
};

export default SingleCategory;
