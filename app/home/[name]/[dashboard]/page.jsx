"use client";
import React, { useEffect, useState } from "react";
import { reportsData } from "@/app/data/Reports";
import Leftbar from "@/app/Components/Leftbar";

const ViewLive = ({ params }) => {
  const [data, setData] = useState();
  const { dashboard, name } = params;

  useEffect(() => {
    let temp = reportsData?.find((e) => {
      return e?.title?.toLowerCase()?.replaceAll(" ", "-") === dashboard;
    });
    setData(temp);
  }, [dashboard, reportsData]);

  return (
    <div className="flex bg-darkPurple">
      <Leftbar showDashboards={true} name={name} />
      <div className="dashboard-width">
        <iframe
          src={data?.link}
          frameBorder="0"
          style={{ border: "none" }}
          className="w-full h-[100vh]"
          allowfullscreen
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        ></iframe>
      </div>
    </div>
  );
};

export default ViewLive;
