import React from "react";
import Footer from "../HomeComponents/Footer";
import Navbar from "../HomeComponents/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navbar exception={true} />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
