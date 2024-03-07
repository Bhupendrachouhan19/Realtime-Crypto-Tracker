import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="AppLayout">
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
