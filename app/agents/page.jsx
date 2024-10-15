"use client";
import React, { useEffect, useRef } from "react";
import Leftbar from "../Components/Leftbar";
import Sidebar from "../Components/Sidebar";

const AiAgents = () => {
  return (
    <div className="flex bg-darkPurple">
      <Leftbar />
      <div className="dashboard-width">
        <Sidebar />
        <div className="py-4 px-5 grid grid-cols-3 gap-5">
          <Block id="1" />
          <Block id="2" />
          <Block id="3" />
          <Block id="4" />
          <Block id="5" />
        </div>
      </div>
    </div>
  );
};

const Block = ({ id }) => {
  useEffect(() => {
    const video = document.createElement("video");
    video.autoplay = false;
    video.muted = true;
    video.controls = true;
    const source = document.createElement("source");
    source.src = "/Inbillz.mp4";
    let videoElement = document.getElementById(`video-container${id}`);
    if (!videoElement.innerHTML.includes("Inbillz")) {
      video.appendChild(source);
      document.getElementById(`video-container${id}`).appendChild(video);
    }
  }, []);

  return (
    <div className="bg-gray-700/10 border-gray-300/20 rounded-[15px] border text-white text-xl p-4">
      <div id={`video-container${id}`} className="rounded-[15px]"></div>
      <p className="text-center mt-3">Temporary Name</p>
    </div>
  );
};

export default AiAgents;
