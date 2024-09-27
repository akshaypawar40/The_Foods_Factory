import React, { lazy, Suspense } from "react";
import FoodData from "../data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
const FoodCard = lazy(() => import("./FoodCard"));

const FoodItems = () => {
  const handleToast = (e) => toast.success(` Added  ${e} to cart`);
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  console.log(search, "search");
  // console.log(FoodData,"FoodData")
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap lg:justify-start justify-center gap-10 mx-6 my-10">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <Suspense fallback={"...Loading"}>
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}
              handleToast={handleToast}
            />
          </Suspense>
        ))}
      </div>
    </>
  );
};

export default FoodItems;
