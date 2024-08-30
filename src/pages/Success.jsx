import React, { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (

  <div className="flex flex-col justify-center items-center h-screen">
    {loading ? (
      <PropagateLoader color="#36d7b7" />
    ) : (
      <>
      <h1 className="font-bold text-3xl mb-4">Order Successful !</h1>
      <p>Your Order has been placed Successfully</p>
      </>
    )}
    </div>
    )

};

export default Success;
