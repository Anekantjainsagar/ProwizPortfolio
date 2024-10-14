"use client";
import React, { useEffect, useRef } from "react";
import Leftbar from "../Components/Leftbar";
import Sidebar from "../Components/Sidebar";

const AiAgents = () => {
  useEffect(() => {
    const video = document.createElement("video");
    video.autoplay = true;
    video.muted = true;
    video.controls = true;
    const source = document.createElement("source");
    source.src = "/Inbillz.mp4";
    let videoElement = document.getElementById("video-container");
    if (!videoElement.innerHTML.includes("Why-consciousleap")) {
      video.appendChild(source);
      document.getElementById("video-container").appendChild(video);
    }
  }, []);

  return (
    <div className="flex bg-darkPurple">
      <Leftbar />
      <div className="dashboard-width">
        <Sidebar />
        <div id="video-container" className=""></div>
      </div>
    </div>
  );
};

export default AiAgents;
