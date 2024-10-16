import React from "react";
import { AiOutlineUser } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="py-5 px-4 border-b border-b-gray-900 text-white w-full hidden md:flex justify-between items-center">
      <h1 className="text-3xl font-semibold">Hello, Rishabh</h1>
      <AiOutlineUser className="text-3xl border border-white rounded-full cursor-pointer" />
    </div>
  );
};

export default Sidebar;
