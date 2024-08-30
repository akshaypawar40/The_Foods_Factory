import React, { useState } from "react";
import { Suspense, lazy } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ItemCard = lazy(() => import('./ItemCard'));


const Cart = () => {
  const [activeCart, setActiveCart] = useState(true);
  const cartItems= useSelector((state)=>state.cart.cart);
  const totalQty= cartItems.reduce((totalQty,item)=> totalQty+item.qty,0)
  const totalPrice= cartItems.reduce((total,item)=>total+ item.qty* item.price,0) 
  const navigate= useNavigate();
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
            className="border border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-600 hover:border-red-300 cursor-pointer"
          />
        </div>
        {cartItems.length > 0 ? cartItems.map((food)=>(
          <Suspense fallback={<div>Loading...</div>}>
            <ItemCard 
            key={food.id}
            name={food.name}
            price={food.price}
            id={food.id}
            img={food.img}
            qty={food.qty}
            />
            </Suspense>
        )): <h2 className="text-xl text-gray-800 font-bold text-center">Your Cart is Empty</h2>}
        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items: {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">Total Amount: {totalPrice}</h3>
          <hr />
          <button onClick={()=>navigate("/success")} className="bg-green-500 font-bold py-2 text-white px-3 rounded-lg lg:w-[18vw] w-full my-5">
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`cursor-pointer rounded-full text-green-600 bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${totalQty >0 && "animate-bounce delay-700 transition-all"} `}
      />
    </>
  );
};

export default Cart;
