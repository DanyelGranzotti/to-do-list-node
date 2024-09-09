import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const BodyContainer = () => {
  return (
    <main className="body-container">
      <ToastContainer icon={false} />
      <Outlet />
    </main>
  );
};

export default BodyContainer;
