import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import {
  removeFromCart,
  decrementQty,
  incrementQty,
} from "../redux/slices/CartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const ItemCard = ({ id, img, price, name, qty }) => {
  const dispatch = useDispatch();
  // console.log(asd.id , )
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3 overflow-hidden truncate">
      <MdDelete
        className="absolute right-7 text-gray-600 cursor-pointer"
        onClick={() => {
          dispatch(removeFromCart({ id }));
          toast(`${name} Removed! `, {
            icon: "👋🏻",
          });
        }}
      />
      <img
        src={img}
        alt="itmimg"
        className="w-[50px] h-[50px] "
        loading="lazy"
      />
      <div className="leading-5">
        <h3 className="font-bold text-gray-800 overflow-hidden truncate">
          {name}
        </h3>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹ {price}</span>
          <div className="flex items-center justify-center gap-2 absolute right-7">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 1)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-600 hover:border-none rounded-md p-1 transition-all ease-linear text-xl cursor-pointer"
            />
            <span> {qty} </span>
            <AiOutlinePlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-600 hover:border-none rounded-md p-1 transition-all ease-linear text-xl cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
