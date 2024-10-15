import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Body() {
  return (
    <div className="grid grid-flow-col h-screen w-full ">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Body;
