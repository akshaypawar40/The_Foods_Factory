import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ img, desc, rating, name, id, price,handleToast }) => {
  const dispatch = useDispatch();
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2 h-[310px] relative">
      <img
        src={img}
        alt="foodimg"
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out object-fit"
      />
      <div className=" text-sm flex justify-between">
        <h2 className="overflow-hidden truncate">{name}</h2>
        <span className="text-green-500"> ₹ {price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 45)}... </p>
      <div className="absolute bottom-5 left-5 right-5">
        <div className="flex justify-between w-full">
          <span className="flex justify-center items-center">
            <AiFillStar className="mr-1 text-yellow-400" /> {rating}
          </span>
          <button
            onClick={() =>{
              dispatch(
                addToCart({ id, img, name, price, rating, desc, qty: 1 })
              );
              handleToast(name)

             }}
            className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
