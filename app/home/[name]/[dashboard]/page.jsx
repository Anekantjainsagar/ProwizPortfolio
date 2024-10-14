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

  // useEffect(() => {
  //   // Function to dynamically load the Tableau script
  //   const loadTableauScript = () => {
  //     const script = document.createElement("script");
  //     script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
  //     script.async = true;
  //     document.body.appendChild(script);
  //   };

  //   loadTableauScript();
  // }, []);

  return (
    <div className="flex bg-darkPurple">
      <Leftbar />
      <div className="dashboard-width h-[100vh] overflow-hidden">
        {/* <div
          style={{ position: "relative", width: "100%", height: "100vh" }}
          className="tableauPlaceholder w-full h-[100vh]"
          id="viz1728924793065"
        >
          <noscript>
            <a href="#">
              <img
                alt="Executive Summary Dashboard (3)"
                src="https://public.tableau.com/static/images/Re/RetailSalesAnalytics_16919140330630/ExecutiveSummaryDashboard3/1_rss.png"
                style={{ border: "none" }}
              />
            </a>
          </noscript>
          <object className="tableauViz" style={{ display: "none" }}>
            <param
              name="host_url"
              value="https%3A%2F%2Fpublic.tableau.com%2F"
            />
            <param name="embed_code_version" value="3" />
            <param name="site_root" value="" />
            <param
              name="name"
              value="RetailSalesAnalytics_16919140330630/ExecutiveSummaryDashboard3"
            />
            <param name="tabs" value="no" />
            <param name="toolbar" value="yes" />
            <param
              name="static_image"
              value="https://public.tableau.com/static/images/Re/RetailSalesAnalytics_16919140330630/ExecutiveSummaryDashboard3/1.png"
            />
            <param name="animate_transition" value="yes" />
            <param name="display_static_image" value="yes" />
            <param name="display_spinner" value="yes" />
            <param name="display_overlay" value="yes" />
            <param name="display_count" value="yes" />
            <param name="language" value="en-US" />
          </object>
        </div>{" "} */}
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
