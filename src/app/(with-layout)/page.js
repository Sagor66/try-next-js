import Categories from "@/components/HomePage/Categories";
import PopularProducts from "@/components/HomePage/PopularProducts";
import { Suspense } from "react";

export const revalidate = false;

const HomePage = () => {
  return (
    <main>
      <h1>Home Page</h1>
      <Categories></Categories>
      <Suspense
        fallback={
          <h1 className="text-center font-semibold text-2xl">Loading...</h1>
        }
      >
        <PopularProducts></PopularProducts>
      </Suspense>
    </main>
  );
};

export default HomePage;
