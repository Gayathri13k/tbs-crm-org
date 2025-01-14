import React, { useState } from "react";
import image from "../../asserts/promotion_image.png";
import "../../App.css";
import dayjs from "dayjs";
import userimg from "../../asserts/userprofile.png";
import { FaPhone } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { Tooltip } from "antd";
import { Popover } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalPopup from "../Common/Modal/Modal";
import DeleteList from "../Offers/DeleteList";
import {
  faEdit,
  faEllipsisVertical,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function GridList({
  currentData,
  setModalIsOpen,
  SetUpdateData,
  updatedata,
  setOperatorID,
  operatorID,
  setDeleteOpModalIsOpen,
  deleteOpmodalIsOpen,
}) {
  const [hoverid, setHoverId] = useState("");
  const [changeColor, setChangeColor] = useState();
  const [openPopovers, setOpenPopovers] = useState({});

  const handleEdit = (tbs_operator_id) => {
    SetUpdateData(tbs_operator_id);
    setOperatorID(tbs_operator_id);
    setModalIsOpen(true);
    //setPromotionId(tbs_operator_id);
    togglePopover(tbs_operator_id);
  };

  const handleDelete = (tbs_operator_id) => {
    setOperatorID(tbs_operator_id);
    togglePopover(tbs_operator_id);
    setDeleteOpModalIsOpen(true);
  };

  const togglePopover = (tbs_operator_id) => {
    setOpenPopovers((prevState) => ({
      ...prevState,
      [tbs_operator_id]: !prevState[tbs_operator_id],
    }));
  };

  const closeDeleteModal = () => {
    setDeleteOpModalIsOpen(false);
  };

  const apiUrl = process.env.REACT_APP_API_URL;

  return (
    <>
      <div className="pt-[0.5vw]">
        <div className="grid grid-cols-5 w-full gap-x-[3vw] gap-y-[1.5vw]">
          {currentData.length > 0 &&
            currentData?.map((item) => (
              <div
                className={`${
                  hoverid == item.tbs_operator_id
                    ? "bg-[#1f4b7f] text-white"
                    : "bg-white"
                }  h-174vw] border-[#1f4b7f] border-l-[0.1vw] cursor-pointer border-r-[0.3vw] border-b-[0.3vw] border-t-[0.1vw] rounded-[0.5vw]`}
                onMouseEnter={() => setHoverId(item.tbs_operator_id)}
                onMouseLeave={() => setHoverId("")}
                style={{
                  transition: "ease-in 0.5s",
                }}
              >
                <div className="flex justify-center pl-[4vw] pt-[1vw]">
                  <img
                    // src={`${
                    //   item?.profile_img == null || "null"
                    //     ? userimg
                    //     : `http://192.168.90.47:4000${item?.profile_img}`
                    // } `}
                    src={`${
                      item?.profileimg
                        ? `http://192.168.90.47:4000${item?.profileimg}`
                        : userimg
                    } `}
                    className="h-[5vw] w-[5vw] rounded-[0.5vw]"
                  />
                  <div className="text-right pl-[3vw]">
                    <Popover
                      placement="bottomRight"
                      content={
                        <div className="flex flex-col">
                          {(item?.user_status_id === 1 ||
                            item?.user_status_id === 0) && (
                            <div>
                              <a
                                onClick={() => handleEdit(item.tbs_operator_id)}
                                className="flex items-center cursor-pointer text-[1vw] text-[#1F4B7F] hover:text-[#1f487c]"
                              >
                                Edit
                              </a>
                            </div>
                          )}
                          <div>
                            <a
                              onClick={() => handleDelete(item.tbs_operator_id)}
                              className="flex pt-[0.1vw] items-center cursor-pointer text-[1vw] text-[#1F4B7F] hover:text-[#1f487c]"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      }
                      trigger="click"
                      open={openPopovers[item.tbs_operator_id] || false}
                      onOpenChange={() => togglePopover(item.tbs_operator_id)}
                    >
                      <FontAwesomeIcon
                        icon={faEllipsisVertical}
                        color="#1f487c"
                        className={`${
                          hoverid === item.tbs_operator_id
                            ? "text-white"
                            : "text-[#1f4b7f]"
                        } cursor-pointer rounded-[0.5vw]`}
                        onMouseEnter={() => setHoverId(item.tbs_operator_id)}
                        onMouseLeave={() => setHoverId("")}
                        style={{
                          height: "1.5vw",
                          width: "1.5vw",
                        }}
                      />
                    </Popover>
                  </div>
                </div>
                <div className="flex-col flex items-center justify-center gap-y-[0.5vw]">
                  <h1 className="font-bold text-[1vw] pt-[2vw]">
                    {item.owner_name}
                  </h1>
                  <div className="flex flex-col  justify-center gap-y-[0.8vw]">
                    <div className="flex flex-row items-center space-x-[0.5vw] ">
                      <div
                        className={`${
                          item.tbs_operator_id != hoverid
                            ? "bg-[#1f487c]"
                            : "bg-[#f6eeff]"
                        }  w-[1.8vw] h-[1.8vw] items-center flex justify-center rounded-lg`}
                        style={{
                          transition: "ease-out 1s",
                        }}
                      >
                        <FaPhone
                          size="1vw"
                          color={`${
                            item.tbs_operator_id != hoverid
                              ? "white"
                              : "#1f487c"
                          }`}
                        />
                      </div>
                      <div className="text-[0.9vw]">{item.phone}</div>
                    </div>
                    <div className="flex flex-row items-center space-x-[0.5vw] ">
                      <div
                        className={`${
                          item.tbs_operator_id != hoverid
                            ? "bg-[#1f487c]"
                            : "bg-[#f6eeff]"
                        }  w-[1.8vw] h-[1.8vw] items-center flex justify-center rounded-lg`}
                        style={{
                          transition: "ease-out 1s",
                        }}
                      >
                        <TbMailFilled
                          size="1vw"
                          color={`${
                            item.tbs_operator_id != hoverid
                              ? "white"
                              : "#1f487c"
                          }`}
                        />
                      </div>
                      {/* <div className="text-[0.9vw]">{item.emailid}</div> */}
                      {item?.emailid?.length > 15 ? (
                        <Tooltip
                          placement="right"
                          title={item?.emailid}
                          className="cursor-pointer"
                          // color="#1F487C"
                        >
                          <div className="text-[0.9vw]">
                            {" "}
                            {`${item?.emailid?.slice(0, 15)}...`}
                          </div>
                        </Tooltip>
                      ) : (
                        <div className="text-[0.9vw]">
                          {item?.emailid?.slice(0, 15)}
                        </div>
                      )}
                    </div>
                    <i className="pi-ellipsis-v"></i>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <ModalPopup
        show={deleteOpmodalIsOpen}
        onClose={closeDeleteModal}
        height="20vw"
        width="30vw"
        closeicon={false}
      >
        <DeleteList
          setDeleteModalIsOpen={setDeleteOpModalIsOpen}
          title={"Want to delete this Operator"}
          api={`${apiUrl}/operators/${operatorID}`}
          module={"operator"}
        />
      </ModalPopup>
    </>
  );
}
