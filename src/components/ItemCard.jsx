import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const ItemCard = () => {
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete className="absolute right-7 text-gray-600 cursor-pointer" />
      <img
        src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        alt="itmimg"
        className="w-[50px] h-[50px] "
      />
      <div className="leading-5">
        <h3 className="font-bold text-gray-800 ">Onion Pizza</h3>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹ 190</span>
          <div className="flex items-center justify-center gap-2 absolute right-7">
            <AiOutlinePlus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-600 hover:border-none rounded-md p-1 transition-all ease-linear text-xl" />
            <span> 9 </span>
            <AiOutlineMinus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-600 hover:border-none rounded-md p-1 transition-all ease-linear text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
