"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { LuEyeOff, LuEye } from "react-icons/lu";
import logo from "@/app/Assets/prowiz.png";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  let passwords = {
    email: "Prowiz",
    password: "Prowiz@123",
  };
  const history = useRouter();
  const [showPassword, setShowPassword] = useState(true);
  const [user, setUser] = useState({
    email: passwords?.email,
    password: passwords?.password,
  });

  return (
    <div className="flex h-screen bg-darkPurple">
      <Toaster />
      <div className="w-6/12 p-10 flex flex-col items-start justify-between h-full">
        <Image
          src={logo}
          alt="Logo"
          width={1000}
          height={1000}
          className="w-[10vw] invert"
        />
        <div className="w-full px-2">
          <h2 className="text-white text-3xl min-[1600px]:text-4xl font-semibold">
            Login to continue
          </h2>{" "}
          <div className="flex flex-col my-6 text-gray-200">
            <label
              htmlFor="email"
              className="mb-1.5 text-sm min-[1600px]:text-base"
            >
              Username
            </label>
            <input
              id="email"
              value={user?.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              type="text"
              placeholder="Enter Username"
              className="bg-transparent w-8/12 outline-none border border-gray-300 px-4 py-2 rounded-lg min-[1600px]:text-lg"
            />
          </div>
          <label
            htmlFor="password"
            className="text-sm min-[1600px]:text-base text-gray-200"
          >
            Password
          </label>
          <div className="w-8/12 relative mt-1.5">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={user?.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              placeholder="Enter Password"
              className="bg-transparent w-full outline-none border text-white border-gray-300 px-4 py-2 rounded-lg min-[1600px]:text-lg"
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 text-gray-100 right-4 text-lg min-[1600px]:text-2xl cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <LuEye /> : <LuEyeOff />}
            </div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (
                user?.email === passwords?.email &&
                user?.password == passwords?.password
              ) {
                history.push("/home");
              } else {
                toast.error("Invalid Credentials");
              }
            }}
            className="text-white bg-newBlue mt-8 w-8/12 py-2.5 min-[1600px]:py-3 min-[1600px]:text-xl font-semibold rounded-lg"
          >
            Login
          </button>
        </div>
        <div className="py-10"></div>
      </div>
      <div className="w-6/12 bg-gray-900"></div>
    </div>
  );
};

export default App;
