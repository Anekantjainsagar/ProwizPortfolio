"use client";
import Leftbar from "@/app/Components/Leftbar";
import Sidebar from "@/app/Components/Sidebar";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { mainData } from "@/app/data/main";

const Reports = ({ params }) => {
  const { name } = params;
  const history = useRouter();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    let temp = mainData?.find(
      (e, i) => e?.title?.toLowerCase()?.replaceAll(" ", "-") == name
    );
    setData(temp.reports);
  }, [name]);

  return (
    <div className="flex bg-darkPurple">
      <Leftbar />
      <div className="dashboard-width">
        <Sidebar />
        <div className="pt-6 px-6">
          <div className="w-full flex justify-end">
            <input
              type="search"
              value={search}
              autoFocus={true}
              placeholder="Search Here...."
              onChange={(e) => setSearch(e.target.value)}
              className="bg-gray-300/20 text-white px-5 py-1.5 w-3/12 rounded-md text-lg outline-none"
            />
          </div>
          <div className="grid grid-cols-3 gap-y-10 gap-x-6 mt-4 overflow-y-auto h-[82vh] pr-5">
            {data
              ?.filter((e, i) => {
                if (search.trim()) {
                  return e?.title
                    ?.toLowerCase()
                    ?.includes(search?.toLowerCase());
                }
                return e;
              })
              .map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      history.push(
                        `/home/${name}/${item?.title
                          ?.toLowerCase()
                          ?.replaceAll(" ", "-")}`
                      );
                    }}
                    className="border cursor-pointer border-gray-300/20 rounded-[15px] h-fit flex flex-col text-white gap-1 bg-gray-700/10 shadow-lg shadow-gray-600/40"
                  >
                    <img
                      className="h-[40vh] object-cover object-top rounded-[25px] w-[100vw] lg:w-[50vw] md:w-[23vw] p-3"
                      src={item?.headings[0].images}
                      alt="Image"
                    />
                    <div className="flex justify-center pb-4 text-lg font-medium items-center">
                      {item?.title}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
