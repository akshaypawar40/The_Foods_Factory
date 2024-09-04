import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import ProtectecRoute from "./components/ProtectedRoute";
import Abc from "./components/Abc";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Abc />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/success" element={<ProtectecRoute element={<Success/>} />} />
        <Route path="/*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
