import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
// import LandingPage from "./components/LandingPage";
import ProtectecRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Register from "./components/Register";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LandingPage />}> */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* </Route> */}
        <Route path="/home" element={<Home />} />
        <Route
          path="/success"
          element={<ProtectecRoute element={<Success />} />}
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
