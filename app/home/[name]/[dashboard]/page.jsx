"use client";
import React, { useEffect, useRef, useState } from "react";
import Leftbar from "@/app/Components/Leftbar";
import { mainData } from "@/app/data/main";
import { EmbedPDF } from "@simplepdf/react-embed-pdf";

const ViewLive = ({ params }) => {
  const [data, setData] = useState();
  const { dashboard, name } = params;
  const [url, setUrl] = useState();
  const ref = useRef(null);

  useEffect(() => {
    let temp = mainData?.find(
      (e, i) => e?.title?.toLowerCase()?.replaceAll(" ", "-") == name
    );
    temp = temp?.reports?.find((e) => {
      return e?.title?.toLowerCase()?.replaceAll(" ", "-") === dashboard;
    });
    setData(temp);
    setUrl(temp?.link);
  }, [name]);

  useEffect(() => {
    const loadTableauScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://public.tableau.com/javascripts/api/tableau-2.8.0.min.js";
      script.onload = initViz;
      document.body.appendChild(script);
    };

    const initViz = () => {
      if (window.tableau) {
        new window.tableau.Viz(ref.current, url);
      }
    };

    if (window.tableau) {
      initViz();
    } else {
      loadTableauScript();
    }
  }, [url]);

  return (
    <div className="flex bg-darkPurple">
      <Leftbar />
      <div className="dashboard-width h-[100vh] overflow-y-auto">
        {data?.type == "pdf" ? (
          <>
            {/* <EmbedPDF
              mode="inline"
              style={{
                width: "100%",
                height: "100%",
                margin: 0,
                padding: 0,
                border: "none",
                overflow: "hidden",
              }}
              documentURL={data?.link}
            /> */}{" "}
            <iframe
              src={data?.link}
              width="100%"
              height="600px"
              title="PDF Viewer"
              className="w-full h-[100vh]"
            />
          </>
        ) : data?.type == "tableu" ? (
          <div style={setVizStyle} ref={ref} />
        ) : (
          <iframe
            src={data?.link}
            frameBorder="0"
            style={{ border: "none" }}
            className="w-full h-[100vh]"
            allowFullScreen={true}
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          ></iframe>
        )}
      </div>
    </div>
  );
};

const setVizStyle = {
  width: "100%",
  height: "100%",
  magin: "auto",
};

export default ViewLive;
