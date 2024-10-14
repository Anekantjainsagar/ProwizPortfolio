"use client";
import React, { useEffect, useState } from "react";
import Leftbar from "@/app/Components/Leftbar";
import { mainData } from "@/app/data/main";
import { EmbedPDF } from "@simplepdf/react-embed-pdf";

const ViewLive = ({ params }) => {
  const [data, setData] = useState();
  const { dashboard, name } = params;

  useEffect(() => {
    let temp = mainData?.find(
      (e, i) => e?.title?.toLowerCase()?.replaceAll(" ", "-") == name
    );
    temp = temp?.reports?.find((e) => {
      return e?.title?.toLowerCase()?.replaceAll(" ", "-") === dashboard;
    });
    setData(temp);
  }, [name, dashboard]);

  return (
    <div className="flex bg-darkPurple">
      <Leftbar />
      <div className="dashboard-width h-[100vh] overflow-hidden">
        {data?.type == "pdf" ? (
          <>
            <EmbedPDF
              mode="inline"
              style={{ width: "100%", height: "100%" }}
              documentURL={data?.link}
            />
          </>
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

export default ViewLive;
