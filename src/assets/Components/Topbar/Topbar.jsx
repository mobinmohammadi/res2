import React, { useEffect, useRef, useState } from "react";

import EasyAddress from "../EasyAddress/EasyAddress";
import UserBasket from "../UserBasket/UserBasket";
import { Link } from "react-router";

export default function Topbar({
  deleteFoodInUserBasket,
  fainalyAllPriceFoods,
  arrayUserBasket,
  setArrayUserBasket,
  setIdProductInBasket,
  CalculatorUserBasket,
}) {
  const loaderIconBasket = useRef(null);

  const [isShowUserBasket, setIsShowUserBasket] = useState(false);
  const [isShowLayer, setIsShowLayer] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(false);

  const userInfosBox = useRef();


  const closeUserBasket = () => {
    setIsShowUserBasket(false);
    setIsShowLayer(false);
  };

  const navUserInfos = () => {
    userInfosBox.current.style.transition = "all 0.2s ease-in";
    userInfosBox.current.style.display = "block";
    setTimeout(() => {
      setIsShowLayer(true);
      userInfosBox.current.style.top = "100%";
    }, 0.7);
  };

  const closeNavInfosUser = () => {
    userInfosBox.current.style.transition = "all 1s ease-in";
    userInfosBox.current.style.top = "92%";
    setTimeout(() => {
      userInfosBox.current.style.display = "none";
      setIsShowLayer(false);
    }, 0.7);
  };

  const [isFixedTopBar, setIsFixedTopBar] = useState(false);
  const FixedTopBarHandler = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsFixedTopBar(true);
      } else {
        setIsFixedTopBar(false);
      }
    });
  };
  useEffect(() => {
    FixedTopBarHandler();
  }, []);

  // ==================================================================
  // const loaderAddToBasket = useRef(null);
  const [isShowLoaderAddToBasket, setIsShowLoaderAddToBasket] = useState(false);
  const [dataLocalStorage, setDataLocalStorage] = useState({});

  useEffect(() => {
    const storedByLocalStorage =
      JSON.parse(localStorage.getItem("basket")) || [];
    if (storedByLocalStorage.length) {
      setDataLocalStorage(storedByLocalStorage);
    }
  }, []);

  const resultWhatsBasket =
    arrayUserBasket?.length > 0
      ? arrayUserBasket
      : dataLocalStorage?.length > 0
      ? dataLocalStorage
      : [];

  return (
    <>
      <svg className="hidden"></svg>
      <div
        className={`${
          isFixedTopBar
            ? "fixed  top-0 z-30 w-full transition-all bg-slate-700 "
            : "bg-white"
        } py-2`}
      >
        <div className=" relative">
          <div className="flex relative space-y-2 pt-3 justify-between  items-center pr-4 pl-4   ">
            {isUserLogin ? (
              <div
                onClick={() => navUserInfos()}
                className={`${
                  isFixedTopBar ? "text-white" : "text-zinc-800"
                } items-cemter justify-center flex gap-1 text-white cursor-pointer`}
              >
                <span className="text-xs">مبین محمدی</span>
                <svg className={`w-3 h-3  xs:w-5 xs:h-5 pb-1`}>
                  <use href="#chevron-left"></use>
                </svg>
              </div>
            ) : (
              <div  className={`${isFixedTopBar ? "text-white" : ""} text-2xl & > *:text-sm gap-2 flex items-center justify-center`}>
                <Link to="/restorant/Login"

                  href="#"
                  className=" h-8 w-15  rounded-md justify-center transition-all hover:bg-[#ef4123] hover:text-white flex items-center border-1 border-solid border-[#ef4123]"
                >
                  <span className=" inline-block text-xs sm:text-sm ">ورود</span>
                </Link>
                <Link href="#" className="hidden sm:flex">
                  ثبت نام
                </Link>
              </div>
            )}
            <div
              ref={userInfosBox}
              className=" w-[200px] z-30 pt-3 hidden items-center bg-white  rounded-[8px] absolute top-[92%]   right-5"
            >
              <div className="flex pr-3 pl-3 gap-2 border-b-2 border-[#dddddd] pb-5 items-center ">
                <svg className="w-12 h-12 border-1 border-amber-600 rounded-full p-1">
                  <use href="#user-mini"></use>
                </svg>
                <div className="flex flex-col gap-1 ">
                  <span className="text-sm font-bold">مبین محمدی</span>
                  <div className="flex text-xs gap-1 border-1 border-[#dddddd] pt-1 pb-1 pr-2.5 pl-2.5 rounded-full">
                    <span className="">اعتبار</span>
                    <span className="">0</span>
                    <span className="">تومان</span>
                  </div>
                </div>
              </div>
              <div className="">
                <ul className="z-20 & > *:flex & > *:hover:cursor-pointer & > *:hover:text-green-600  & > *:rounded-sm & > *:pr-2  & > *:pl-2  & > *:hover:bg-slate-300  & > *:hover:transition-all   & > *:justify-between & > *:pt-2 & > *:pb-2 & > *:text-sm  ">
                  <Link to="/sallerpanel/home" className=" ">
                    <span>ثبت رستوران جدید</span>
                    <svg className="w-6 h-6">
                      <use href="#building-storefront"></use>
                    </svg>
                  </Link>
                  <li className="">
                    <Link to="/">پیام ها</Link>
                    <svg className="w-6 h-6">
                      <use href="#envelope"></use>
                    </svg>
                  </li>
                  <li>
                    <Link to="/">کیف پول</Link>
                    <svg className="w-6 h-6">
                      <use href="#credit-card"></use>
                    </svg>
                  </li>
                  <li>
                    <Link to="/">اطلاعات من</Link>
                    <svg className="w-6 h-6">
                      <use href="#user"></use>
                    </svg>
                  </li>
                  <li>
                    <Link to="/">آدرس ها</Link>
                    <svg className="w-6 h-6">
                      <use href="#map-pin"></use>
                    </svg>
                  </li>
                  <li>
                    <Link to="/">سفارشات من</Link>
                    <svg className="w-6 h-6">
                      <use href="#archive-box-arrow-down"></use>
                    </svg>
                  </li>
                  <Link to="/restorant/Signup">
                    <li>ثبت نام</li>
                    <svg className="w-6 h-6">
                      <use href="#heart"></use>
                    </svg>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="hidden sm:flex items-center w-56">
              <img className="w-32" src="./images/topbar-logo.svg" alt="" />
            </div>
            <div className=" sm:hidden items-center w-10">
              <img className="w-20" src="./images/logo.svg" alt="" />
            </div>
            <div
              onClick={() => {
                setIsShowUserBasket(true);
                setIsShowLayer(true);
              }}
              className="relative"
            >
              {resultWhatsBasket.length ? (
                dataLocalStorage.length > 0 ? (
                  <div className="absolute text-xs -right-2 -top-2 flex items-center justify-center text-white  bg-red-500 w-5 h-5 rounded-2xl">
                    <span className="mt-1">{dataLocalStorage?.length}</span>
                  </div>
                ) : (
                  <div className="absolute text-xs -right-2 -top-2 flex items-center justify-center text-white  bg-red-500 w-5 h-5 rounded-2xl">
                    <span className="mt-1">{arrayUserBasket?.length}</span>
                  </div>
                )
              ) : null}
              {dataLocalStorage?.length || arrayUserBasket?.lenght ? (
                <div className="absolute text-xs -right-2 -top-2 flex items-center justify-center text-white  bg-red-500 w-5 h-5 rounded-2xl">
                  <span className="mt-1">
                    {dataLocalStorage?.length || arrayUserBasket?.length}
                  </span>
                </div>
              ) : null}
              {/* <span className="Loader-Basket absolute -right-1 shadow-2xl -top-1"></span> */}
              <div className="cursor-pointer relative">
                <div
                  className={`${
                    isFixedTopBar ? "text-white" : "text-zinc-700"
                  }  `}
                >
                  <svg className="w-6 h-6 sm:w-8 sm:h-8">
                    <use href="#shopping-cart"></use>
                  </svg>
                </div>

                <div
                  className={`${
                    isShowLoaderAddToBasket ? "opacity-100 " : "opacity-0"
                  } absolute -top-2.5  rounded-full flex items-center justify-center -right-2.5 `}
                >
                  <span className="loader-iconBaket"></span>
                </div>
              </div>
            </div>
          </div>

         
        </div>

        <UserBasket
          CalculatorUserBasket={CalculatorUserBasket}
          setIdProductInBasket={setIdProductInBasket}
          fainalyAllPriceFoods={fainalyAllPriceFoods}
          isShowUserBasket={isShowUserBasket}
          setArrayUserBasket={setArrayUserBasket}
          arrayUserBasket={arrayUserBasket}
          deleteFoodInUserBasket={deleteFoodInUserBasket}
          cancelAction={closeUserBasket}
        />
        {isShowLayer && (
          <div
            onClick={() => {
              setIsShowUserBasket(false);
              closeNavInfosUser();
            }}
            className="bg-black/50 top-0 fixed left-0 z-20 w-full h-full"
          ></div>
        )}
      </div>
      {/* <div className="fixed top-0 w-full h-full bg-black/50 z-10"></div> */}
    </>
  );
}
