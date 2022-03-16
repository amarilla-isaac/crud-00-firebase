import React from "react";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container p-4">
        <div className="row">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
