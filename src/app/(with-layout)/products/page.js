import getAllProducts from "@/utils/getAllProducts";
import SingleProduct from "./SingleProduct";

const ProductsPage = async ({ searchParams }) => {
// console.log({ serachParams })

  const products = await getAllProducts(searchParams.categoryId);

  return (
    <div>
      {products.map((product) => (
        <SingleProduct key={product.id} product={product}></SingleProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
