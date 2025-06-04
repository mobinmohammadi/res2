import React, { useEffect } from "react";
import MenuSinglePageRestorant from "../MenuSinglePageRestorant/MenuSinglePageRestorant";

export default function HeaderRestorant({ dataSingleResturants , allComments }) {
  const {image , name , city , comment , rating } = dataSingleResturants
  

  return (
    <>
      <svg className="hidden">
        <symbol
          id="arrow-left"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path
            fillRule="evenodd"
            d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </symbol>
        <symbol
          id="heart"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </symbol>
        <symbol
          id="star"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </symbol>
        <symbol
          id="cursor-arrow-rays"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
          />
        </symbol>
        <symbol
          id="building-storefront"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
          />
        </symbol>
        <symbol
          id="magnifying-glass"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          ></path>
        </symbol>
      </svg>
      <div className="relative bg-black/20 h-[200px] sm:h-[300px]">
        <img className=" h-full w-full object-cover" src={image} alt="" />

        <span className="absolute  w-full z-10 h-full bg-black/40 top-0 right-0"></span>
        <div className="absolute  h-full top-0 flex pl-10 w-full flex-col">
          <div className="absolute  top-5 & > *:border & > *:flex & > *:items-center  & > *:xs:text-sm & > *:cursor-pointer pr-5 pl-5 text-white &> *:pt-1 &> *:pb-1  &> *:pl-4  &> *:pr-4 z-20  &> *:rounded-sm &> *:text-bold   flex justify-between w-full  ">
            <div className="flex gap-1 transition-all hover:bg-[#ef4123]">
              <svg className="w-6 h-6 ">
                <use href="#heart"></use>
              </svg>
              <span className="hidden  items-center "> علاقه مندی</span>
            </div>
            <div
              onClick={() => history.back()}
              className="flex gap-1 hover:bg-black/50 transition-all font-bold"
            >
              <span className="text-center text-xs">بازگشت</span>
              <svg className="w-4 h-4">
                <use href="#arrow-left"></use>
              </svg>
            </div>
          </div>
          <div className="absolute pb-7 pl-12 flex items-center justify-center pr-4 sm:pr-12  h-[40%] xs:h-[47%] sm:h-[50%] z-10 top-[60%] xs:top-[50%] ">
            <img
              className="w-18 2xs:w-20 sm:w-28 rounded-2xl sm:rounded-4xl"
              src="./../images/foods/restorantlogo/1.png"
              alt=""
            />
            <div className="absolute w-5 h-5 right-10.5 sm:right-23.5  bg-white  shadow-2xl  top-[97%] xs:top-[99%] sm:top-[97%]  transro"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white justify-between pt-5 pr-4 pl-4 xs:pr-12 xs:pl-12 ">
        <div className="flex justify-between flex-col md:flex-row md:border-b-2 border-[#dddddd]">
          <div className="flex relative md:flex-col md:border-none border-b-2 border-[#dddddd] pb-3 gap-4 justify-between ">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl  sm:text-3xl text-zinc-800  font-bold">
                {name}
              </h3>
              <div className=" flex md:hidden text-[#97a8ba] gap-.5 items-center">
                <svg className="w-4 h-4">
                  <use href="#map-pin"></use>
                </svg>
                <span className="text-xs">{city}</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {allComments.length ? (
                <div className="flex & > *:h-5 & > *:text-[#f5a623]">
                  <div className="flex">
                    <svg className="w-5">
                      <use href="#star"></use>
                    </svg>
                    <svg className="w-5">
                      <use href="#star"></use>
                    </svg>
                    <svg className="w-5">
                      <use href="#star"></use>
                    </svg>
                    <svg className="w-5">
                      <use href="#star"></use>
                    </svg>
                    <svg className="w-5">
                      <use href="#star"></use>
                    </svg>
                  </div>
                </div>
              ) : null}

              <div className="flex  items-center flex-col md:flex-row gap-1">
                <div className="flex items-center xs:text-left flex-col-reverse md:flex-row gap-1">
                  {allComments.length ? (
                    <div className="flex justify-end">
                      <span className="bg-[#21c64f]  text-white  flex w-9 font-bold pt-1 h-8 items-center justify-center text-sm rounded-sm ">
                        {rating}
                      </span>
                    </div>
                  ) : null}
                  <div className="font-semibold cursor-pointer border rounded-sm pt-1 mr-1 pb-1 pr-2 pl-2 text-sm border-[#ef4123] gap-[2px] flex text-[#ef4123]">
                    {allComments.length ? (
                      <a href="#comments" className="flex gap-1">
                        <span>مشاهده</span>
                        <span>{allComments.length}</span>
                        <span>نظر</span>
                      </a>
                    ) : (
                      <div className="text-xs text-center leading-5 max-w-32">
                        هنوز کامنتی برای این رستوران ثبت نشده 😴
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className=" hidden md:flex text-[#97a8ba] gap-.5 items-center">
              <svg className="w-5 h-5">
                <use href="#map-pin"></use>
              </svg>
              <span>{city}</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 justify-start sm:justify-end md:border-0 border-b-2 pb-3  pt-3 border-[#dddddd]">
              <div className="flashit"></div>
              <span className="text-sm text-zinc-600 ">آماده سفارش هستیم </span>
            </div>
            <div className="flex gap-5  pr-1 pl-1 pb-3  border-b-2 md:border-0   border-[#dddddd] justify-center">
              <div className="flex gap-2 border-l-2 pl-5  sm:border-0 border-[#dddddd] items-center">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-[#ef4123]">
                  <use href="#cursor-arrow-rays"></use>
                </svg>
                <div className="flex flex-col">
                  <span className="text-[15px]">25 - 45 دقیقه</span>
                  <span className="text-xs text-[#928b89]">مدت زمان ارسال</span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-[#ef4123]">
                  <use href="#building-storefront"></use>
                </svg>
                <div className="flex flex-col">
                  <span className="text-[15px] text-[#ef4123]">
                    انتخاب آدرس
                  </span>
                  <span className="text-xs text-[#928b89]">هزینه ارسال</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-[20rem]">
          <ul onClick={(e) => handlerDisplay(e)} className="flex  & > *:cursor-pointer justify-between pt-5 pr-3 pl-3 pb-3 items-center ">
            <MenuSinglePageRestorant  value="" active title="منوی رستوران" />
            <MenuSinglePageRestorant value="" title="نظرات کاربران" />
            <MenuSinglePageRestorant value="" title="اطلاعات کلی" />
          </ul>
        </div> */}
      </div>
    </>
  );
}
