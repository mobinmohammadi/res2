import React, { useRef, useState } from "react";
import HomePanel from "./HomePanel/HomePanel";
import { Link } from "react-router";
import { Gauge } from '@mui/x-charts/Gauge';


export default function HomeSellerPanel() {
  const [isOpenPanelMenuSaller, setIsOpenPanelMenuSaller] = useState(false);

  const menuPanelSaller = useRef();

  const openMenuPanelSallerHandler = () => {
    setIsOpenPanelMenuSaller((prev) => !prev);
  };
  return (
    <>
      <div
        ref={menuPanelSaller}
        className={`bg-white -right-[310px] fixed z-30  3xs:relative 3xs:right-5 w-[310px] h-[100vh] rounded-l-xl shadow-2xl ${
          isOpenPanelMenuSaller
            ? "active-menu transition-all"
            : "not-active__menu"
        } `}
      >
        <div
          onClick={() => openMenuPanelSallerHandler()}
          className="block 3xs:hidden bg-red-600  absolute ml-5 right-full text-white p-2  top-2 rounded-l-md cursor-pointer rotate "
        >
          <svg className="w-5 h-5 animate-spin">
            <use href="#cog-6-tooth"></use>
          </svg>
        </div>

        <div className="flex justify-between h-full flex-col">
          <div className="">
            <div className="flex gap-2 flex-col 3xs:flex-row items-center p-2 pb-3 3xs:pt-5 3xs:pr-3 3xs:pb-5 3xs:pl-3 bg-zinc-800 text-white justify-center">
              {/* <img className="w-20 h-20" src="../../images/logo/logo-razine.PNG" alt="" /> */}
              <svg className="w-7 h-7 mt-2 ">
                <use href="#dashboard"></use>
              </svg>
              <span className="flex pt-2 text-sm">
                به پنل کاربری خود خوش آمدید ❤
              </span>
            </div>
            <div className="text-white flex-col gap-[1px] bg-white & > *:justify-between & > *:w-full & > *:flex & > *:pt-4 & > *:pb-4 & > *:pr-3 & > *:pl-3 & > *:cursor-pointer flex justify-between & > *:transition-all & > *:hover:bg-red-800 & > *:bg-red-500 ">
              <Link to="/sallerpanel/newrestorants" className="text-sm">
                ثبت رستوران جدید
                <div className="">
                  <svg className="w-5 h-5">
                    <use href="#resturants"></use>
                  </svg>
                </div>
              </Link>
              <div className="">
                <span className="text-sm">مشاهده کامنت های ثبت شده</span>
                <svg className="w-5 h-5">
                  <use href="#chat-bubble-bottom-center-text"></use>
                </svg>
              </div>
              <div className="">
                <span className="text-sm">مشاهده مکان رستوران</span>
                <svg className="w-5 h-5">
                  <use href="#map"></use>
                </svg>
              </div>{" "}
              <div className="">
                <span className="text-sm">مشاهده غذا های رستوران من</span>
                <svg className="w-5 h-5">
                  <use href="#adjustments-horizontal"></use>
                </svg>
              </div>{" "}
              <div className="">
                <span className="text-sm">مشاهده کامنت های ثبت شده</span>
                <svg className="w-5 h-5">
                  <use href="#resturants"></use>
                </svg>
              </div>
            </div>
          </div>
          <div className="text-white gap-2 cursor-pointer  text-xs flex justify-center items-center bg-sky-600 hover:bg-sky-800 transition-all w-full h-12">
            <svg className="w-6 h-6">
              <use href="#power"></use>
            </svg>
            <span className="">خروج از حساب</span>
          </div>
        </div>
      </div>
      {isOpenPanelMenuSaller ? (
        <div
          onClick={() => openMenuPanelSallerHandler()}
          className="bg-black/20 fixed z-20 w-full h-full top-0 cursor-pointer"
        ></div>
      ) : (
        ""
      )}
      
   
    </>
  );
}
