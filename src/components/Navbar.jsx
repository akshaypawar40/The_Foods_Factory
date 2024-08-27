import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
      <div>
        <h1 className="text-2xl font-bold ">The Foods Factory</h1>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
      </div>
      <div>
        <input
          px="2"
          type="search"
          name="search"
          placeholder="Search here"
          autoComplete="off"
          className="p-3 border border-gray-400 rounded-lg text-sm outline-none w-full lg:w-[25vw] mt-3 md:mt-0"
        />
      </div>
    </nav>
  );
};

export default Navbar;
