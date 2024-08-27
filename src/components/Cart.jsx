import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-full lg:w-[20vw] bg-white p-5 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl text-gray-800 font-bold">My Orders</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>
        <ItemCard />
        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items:</h3>
          <h3 className="font-semibold text-gray-800">Total Amount:</h3>
          <hr />
          <button className="bg-green-500 font-bold py-2 text-white px-3 rounded-lg lg:w-[18vw] w-full my-5">
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className="rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 "
      />
    </>
  );
};

export default Cart;
