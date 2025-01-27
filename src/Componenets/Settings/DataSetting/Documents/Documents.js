import React, { useState } from "react";
import { Button, Grid, Space, Table } from "antd";
import { MdDownloadForOffline } from "react-icons/md";
import Offers from "./Doc_Offers";
import User_Management from "./Doc_UserManagement";
import Advertisement from "./Doc_Ads";
import Promo from "./Doc_Promo";
import Request_Management from "./Doc_Requestmanagement";

const Documents = () => {
  const [selectItems, setSelectItems] = useState();
  const handleOnClick = (record) => {
    setSelectItems(record);
  };

  const [selectedTab, setSelectedTab] = useState("user management");
  const data = [
    {
      key: "1",
      name: "Daily Report .xlsx",
      modified: "12/10/2024",
      size: "1.2 MB",
    },
    {
      key: "2",
      name: "Weekly Report .xlsx",
      modified: "12/10/2024",
      size: "10 MB",
    },
    {
      key: "3",
      name: "Monthly Report .xlsx",
      modified: "12/10/2024",
      size: "22.5 MB",
    },
    {
      key: "4",
      name: "Yearly Report .xlsx",
      modified: "12/10/2024",
      size: "35.2 MB",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    // {
    //     title: 'Name',
    //     dataIndex: 'name',
    //     sorter: (a, b) => a.name.length - b.name.length,
    //     sortDirections: ['descend'],
    // },
    {
      title: "Modified",
      dataIndex: "modified",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.modified - b.modified,
    },
    {
      title: "Size",
      dataIndex: "size",
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <div className="px-[1vw]  py-[2vw]">
        <div className="flex items-center gap-x-[3vw]">
          <div
            className={` cursor-pointer ${
              selectedTab == "user management"
                ? "border-b-[0.25vw] font-bold border-[#1f487c]"
                : ""
            } `}
            onClick={() => {
              setSelectedTab("user management");
            }}
          >
            <p className="text-[1.3vw] text-[#1f487c] text-center">
              User Management
            </p>
          </div>
          <div
            className={` cursor-pointer ${
              selectedTab == "request management"
                ? "border-b-[0.25vw] font-bold border-[#1f487c]"
                : ""
            } `}
            onClick={() => setSelectedTab("request management")}
          >
            <div className="text-[1.3vw] text-[#1f487c] text-center">
              Request Management
            </div>
          </div>
          <div
            className={` cursor-pointer ${
              selectedTab == "offers"
                ? "border-b-[0.25vw] font-bold border-[#1f487c]"
                : ""
            } `}
            onClick={() => setSelectedTab("offers")}
          >
            <div className="text-[1.3vw] text-[#1f487c] text-center">
              Offers & Deals
            </div>
          </div>
          <div
            className={` cursor-pointer ${
              selectedTab == "ads"
                ? "border-b-[0.25vw] font-bold border-[#1f487c]"
                : ""
            } `}
            onClick={() => setSelectedTab("ads")}
          >
            <div className="text-[1.3vw] text-[#1f487c] text-center">
              Advertisement
            </div>
          </div>
          <div
            className={` cursor-pointer ${
              selectedTab == "promo"
                ? "border-b-[0.25vw] font-bold border-[#1f487c]"
                : ""
            } `}
            onClick={() => setSelectedTab("promo")}
          >
            <div className="text-[1.3vw] text-[#1f487c] text-center">
              Promotion
            </div>
          </div>
        </div>

        <div className="pt-[2vw]">
          {selectedTab === "user management" && <User_Management />}
          {selectedTab === "request management" && <Request_Management />}
          {selectedTab === "offers" && <Offers />}
          {selectedTab === "ads" && <Advertisement />}
          {selectedTab === "promo" && <Promo />}
        </div>
        {/* <div className="flex py-[1vw] space-x-[2.5vw]">
          <div className="w-[50%]">
            <Table
              columns={columns}
              dataSource={data}
              // onChange={handleChange}
              pagination={false}
              className="customize-table"
              onRow={(record) => ({
                onClick: () => handleOnClick(record),
              })}
            />
          </div>
          <div className="flex flex-col space-y-[1vw]">
            <label
              htmlFor=""
              className="text-[#818181] border-b-[0.1vw] border-[#E9E9E9] "
            >
              File Preview
            </label>
            <div className="border-[0.1vw] w-[25vw] h-[10vw] flex justify-center rounded-sm">
              <svg
                className="w-[10vw] h-[10vw]"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#169154"
                  d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"
                ></path>
                <path
                  fill="#18482a"
                  d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"
                ></path>
                <path
                  fill="#0c8045"
                  d="M14 15.003H29V24.005000000000003H14z"
                ></path>
                <path fill="#17472a" d="M14 24.005H29V33.055H14z"></path>
                <g>
                  <path
                    fill="#29c27f"
                    d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"
                  ></path>
                  <path
                    fill="#27663f"
                    d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"
                  ></path>
                  <path
                    fill="#19ac65"
                    d="M29 15.003H44V24.005000000000003H29z"
                  ></path>
                  <path fill="#129652" d="M29 24.005H44V33.055H29z"></path>
                </g>
                <path
                  fill="#0c7238"
                  d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"
                ></path>
                <path
                  fill="#fff"
                  d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"
                ></path>
              </svg>
            </div>
            <div>
              <div className="grid grid-cols-12 ">
                <div className=" col-span-11 text-[1.3vw] text-[#4283e5]">
                  {selectItems?.name}
                </div>
                <div className="">
                  <MdDownloadForOffline color="#4283e5" size="2vw" />
                </div>
              </div>
              <div className="text-[1vw] text-[#818181]">
                Size:{selectItems?.size}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Documents;
