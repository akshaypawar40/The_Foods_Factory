import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";

const FoodItems = () => {
  return (
    <div className="flex flex-wrap lg:justify-start justify-center gap-10 mx-6 my-10">
      {FoodData.map((food) => {
        return (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
          />
        );
      })}
    </div>
  );
};

export default FoodItems;
