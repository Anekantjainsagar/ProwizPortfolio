"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LuEyeOff, LuEye } from "react-icons/lu";
import logo from "@/app/Assets/prowiz.png";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  let passwords = {
    email: "Prowiz",
    password: "Prowiz@123",
  };
  const history = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: passwords?.email,
    password: passwords?.password,
  });

    useEffect(() => {
      const video = document.createElement("video");
      video.autoplay = true;
      video.muted = true;
      video.controls = false;
      const source = document.createElement("source");
      source.src = "/main-video.mp4";
      let videoElement = document.getElementById(`video-container`);
      if (!videoElement.innerHTML.includes("main-video")) {
        video.appendChild(source);
        document.getElementById(`video-container`).appendChild(video);
      }
    }, []);

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
          <h2 className="text-white text-5xl leading-[60px] font-semibold">
            Welcome to <br />
            Prowiz Analytics Portfolio
          </h2>{" "}
          <h6 className="text-gray-300 text-2xl mt-3 mb-9">
            Please login here to continue
          </h6>
          <div className="flex flex-col my-5 text-gray-200">
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
      <div className="w-6/12 relative p-[3vw] flex flex-col items-center justify-between bg-gradient-to-br from-gradientMain/50 from-[50%] to-black/50 h-full">
        <div className="w-11/12 flex items-center justify-center min-[1600px]:mt-0 mt-10">
          <div id={`video-container`} className="rounded-[15px]"></div>
        </div>
        <Image
          src="/login bg.png"
          alt="Login bg"
          width={1000}
          height={1000}
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default App;
