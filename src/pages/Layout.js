import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div>
      <h1 className="app-title">India Times</h1>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
