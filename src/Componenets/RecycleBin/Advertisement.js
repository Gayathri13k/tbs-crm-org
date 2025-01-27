import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { BsEyeFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import dayjs from "dayjs";
import { TbRestore } from "react-icons/tb";
import ModalPopup from "../Common/Modal/Modal";
import BinRestore from "./BinRestore";
import BinDelete from "./BinDelete";

export default function Advertisement({ currentItems, selectedTab ,activePage, itemsPerPage }) {
  const [viewModal, setViewModalIsOpen] = useState(false);

  const [imgUrl, setImgUrl] = useState({
    type: "",
    url: "",
  });

  const [tbsId, setTbsId] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [restoreModalOpen, SetRestoreModalOpen] = useState(false);
  const [rowName, SetRowName] = useState();

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    SetRestoreModalOpen(false);
  };

  const openModal = (ad) => {
    setViewModalIsOpen(true);
  };

  const closeModal = () => {
    setViewModalIsOpen(false);
  };

  const columns = [
    {
      title: <div className="flex font-bold text-[1.2vw]">S.No</div>,
      width: "5vw",
      render: (row, rowdta, index) => {
        const pageNo = (activePage - 1) * itemsPerPage + index+1
        return(
        <div className="">
          <h1 className="pl-[1vw] text-[#1F4B7F]">{pageNo}</h1>
        </div>
   ) },
    },
    {
      title: <div className="flex font-bold text-[1.2vw]">Title</div>,
      render: (row) => (
        <div className="flex flex-col text-[#1F4B7F] gap-y-[.4vw] ">
          <h1 className="text-[1.1vw] font-semibold">{row?.deleted_data?.client_details}</h1>
          <p className="text-[.9vw]">{row?.emailid}</p>
          <p className="text-[.9vw]">{row?.phone}</p>
        </div>
      ),
      width: "14vw",
    },
    {
      title: <div className="flex font-bold text-[1.2vw]">Description</div>,
      width: "17vw",
      render: (row) => (
        <div className="text-[#1F4B7F]">
          <h1 className="text-[1.1vw] font-bold">
            {row?.deleted_data?.ad_title}
          </h1>
          <p>Usage Per day - {row?.deleted_data?.usage_per_day}</p>
          <p className="text-[0.9vw] pt-[0.3vw] text-[#1F4B7F] font-medium">
            {`${dayjs(row?.deleted_data.created_date).format("DD MMM, YY")}`} -{" "}
            {`${dayjs(row?.deleted_data?.end_date).format("DD MMM, YY")}`}
          </p>
        </div>
      ),
    },
    {
      title: (
        <div className="flex  font-bold text-[1.2vw]">Status</div>
      ),
      width: "10vw",
      render: (row) => {
        return (
          <div className="flex">
            <button
              className={`${
                row.deleted_data.status?.toLowerCase() === "active"
                  ? "bg-[#34AE2A]"
                  : row.deleted_data.status?.toLowerCase() === "draft"
                  ? "bg-[#FF9900]"
                  : "bg-[#FD3434]"
              } rounded-[0.5vw] text-[1.1vw]  font-semibold text-white w-[7vw] cursor-not-allowed py-[0.2vw]`}
            >
              {row.deleted_data.status}
            </button>
          </div>
        );
      },
    },
    {
      title: <div className="flex font-bold text-[1.2vw]">Deleted Date</div>,
      width: "15vw",
      render: (row) => (
        <div className="flex text-[#1F4B7F]">
          <p className="text-[1.1vw]">{`${dayjs(row?.deleted_date).format(
            "DD MMM, YY"
          )}`}</p>
        </div>
      ),
    },
    {
      title: <div className="flex font-bold text-[1.2vw]">Actions</div>,
      width: "15vw",
      render: (row) => (
        <div className="flex gap-[1vw] items-center">
          <BsEyeFill
          className="cursor-pointer"
            size={"1.6vw"}
            color="#1F4B7F"
            onClick={() => {
              openModal(row);
              setImgUrl({
                type: row?.deleted_data?.ad_file_type,
                url: row?.deleted_data?.ad_video,
              });
            }}
          />
          <span
            className="cursor-pointer"
            onClick={() => {
              SetRestoreModalOpen(true);
              setTbsId(row?.tbs_recycle_id);
              SetRowName(row?.deleted_data.ad_title);
              console.log(selectedTab, "heifhjbdfh");
            }}
          >
            <TbRestore size={"1.6vw"} color="#1F4B7F" />
          </span>
          <span>
            <MdDelete
              size={"1.3vw"}
              color="#1F4B7F"
              className=" cursor-pointer"
              onClick={() => {
                setDeleteModalOpen(true);
                setTbsId(row?.tbs_recycle_id);
                SetRowName(row?.deleted_data.ad_title);
              }}
            />
          </span>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="h-[72vh] w-full">
        <Table
          dataSource={currentItems}
          columns={columns}
          pagination={false}
          className="custom-table"
        />
      </div>
      <ModalPopup
        className="border border-[#1f487c] border-b-8 border-r-8 rounded-md"
        show={viewModal}
        onClose={closeModal}
        setIsModalOpen={setViewModalIsOpen}
        height="auto"
        width="65vw"
        closeicon={false}
      >
        {imgUrl.type && imgUrl.type.startsWith("image/") ? (
          <img
            src={`http://192.168.90.47:4000${imgUrl.url}`}
            alt="Ad"
            className="p-[0.4] w-full h-full"
            style={{
              objectFit: "fill",
              borderRadius: "1.4vw",
            }}
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            className="w-full h-full"
            style={{
              objectFit: "cover",
              borderRadius: "1.2vw",
            }}
          >
            <source src={`http://192.168.90.47:4000${imgUrl.url}`} />
          </video>
        )}
      </ModalPopup>
      <ModalPopup
        show={deleteModalOpen}
        onClose={closeDeleteModal}
        height="21vw"
        width="30vw"
        closeicon={false}
      >
        <BinDelete
          setDeleteModalOpen={setDeleteModalOpen}
          deleteid={tbsId}
          // title={`want to delete ( ${rowName} ) Ad Permenantly`}
          title={
            <>
             want to delete <span style={{ fontWeight: 'bold' }}>{rowName}</span> Ad Permenantly
            </>
          }
          id={tbsId}
          tab={selectedTab}
        />
      </ModalPopup>

      <ModalPopup
        show={restoreModalOpen}
        onClose={closeDeleteModal}
        height="21vw"
        width="30vw"
        closeicon={false}
      >
        <BinRestore
          SetRestoreModalOpen={SetRestoreModalOpen}
          // title={`want to restore ( ${rowName} ) Ad`}
          title={
            <>
             want to restore <span style={{ fontWeight: 'bold' }}>{rowName}</span> 
            </>
          }
          id={tbsId}
          tab={selectedTab}
        />
      </ModalPopup>
    </>
  );
}
