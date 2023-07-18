import getAllProducts from "@/utils/getAllProducts";
import SingleProduct from "./SingleProduct";

const ProductsPage = async ({ serachParams }) => {
// console.log({ serachParams })

  const products = await getAllProducts(serachParams.categoryId);

  return (
    <div>
      {products.map((product) => (
        <SingleProduct key={product.id} product={product}></SingleProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
