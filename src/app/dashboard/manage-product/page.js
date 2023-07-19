import getAllProducts from "@/utils/getAllProducts";
import ManageProduct from "./ManageProduct";

export const metadata = {
    title: "Manage Product - Dashboard | Next Hero",
    description: "HAHA",
  };

const ManageProductPage = async () => {
    const products = await getAllProducts()

    return (
        <div className="w-full mt-10">
            <h1 className="mb-5 text-2xl font-semibold">Manage Product page</h1>
            <ManageProduct products={products}></ManageProduct>
        </div>
    );
};

export default ManageProductPage;