import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center  mx-6">
        <div className="w-max rounded overflow-hidden shadow-lg bg-white p-8 mb-8">
          <h2 className="font-bold text-xl mb-4 ">
            Welcome To The Food<span className="text-green-500">'s</span>{" "}
            Factory
          </h2>
          <div className="flex justify-between">
            <div>
              <h3 className="mb-3">New to us ?</h3>
              <button
                className="bg-green-500 text-white font-bold py-2 px-4 rounded-l-lg hover:bg-gray-500 focus:outline-none"
                onClick={() => navigate("register")}
              >
                Register
              </button>
            </div>
            <div className="text-right">
              <h3 className="mb-3">Already a User ?</h3>
              <button
                className="bg-slate-400	 text-white font-bold py-2 px-4 hover:bg-green-500 focus:outline-none rounded-r-lg"
                onClick={() => navigate("login")}
              >
                Login
              </button>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
