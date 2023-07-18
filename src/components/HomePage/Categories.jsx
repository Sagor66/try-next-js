import getAllCategories from "@/utils/getAllCategories";
import React from "react";
import SingleCategory from "./SingleCategory";

const Categories = async () => {
  const categories = await getAllCategories();

  //   console.log({ categories })

  return (
    <div>
      <h1 className="text-xl">Categories</h1>
      <div className="container mx-auto">
        {categories.map((category) => (
          <SingleCategory
            category={category}
            key={category.id}
          ></SingleCategory>
        ))}
      </div>
    </div>
  );
};

export default Categories;
