import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div>
      <h1>India Insight</h1>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
