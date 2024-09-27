import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };
  return (
    <div className="flex flex-col justify-between items-center">
      <h2 className="text-xl font-bold my-4 mt-6">Login Page </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control mb-4">
          <label className="text-md font-bold" htmlFor="name">
            Enter Full Name
          </label>
          <input
            autoFocus
            className="w-full p-2 mt-3 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            value={name}
            type="name"
            id="name"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control mb-4">
          <label className="text-md font-bold" htmlFor="number">
            Enter Phone number
          </label>
          <input
            className="w-full p-2 mt-3 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            value={number}
            type="tel"
            id="number"
            placeholder="Enter Phone number"
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="form-control mb-4">
          <label className="text-md font-bold" htmlFor="email">
            Enter Email
          </label>
          <input
            className="w-full p-2 mt-3 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            value={email}
            type="email"
            id="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-control mb-4">
          <label className="text-md font-bold" htmlFor="password">
            Enter Password
          </label>
          <input
            className="w-full p-2 mt-3 border border-slate-300 rounded-md text-sm shadow-sm
      focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            value={password}
            type="password"
            id="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-500 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
