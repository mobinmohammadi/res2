import React from "react";
import { Link } from "react-router";

export default function BoxForSlider({ id, name, image, discount, city }) {
  return (
    <div>
      <Link to={`/restorant/${id}`}>
        <div className=" pt-5 max-w-92 w-full  bg-white p-5 min-h-36 rounded-md">
          <div className="relative">
            {discount ? (
              <>
                <span className="absolute bg-[#ef4123] w-5 h-5 z-20 left-2 top-3  rounded-sm"></span>
                <div className="absolute bg-[#ef4123] text-white z-20 left-2 top-3 pt-3 text-center pb-3  pr-2 pl-2 text-sm  rounded-full">
                  
                  <span className="pt-1 pr-0.5">%</span>
                  {discount} 
                </div>
              </>
            ) : null}
            <img
              className="w-full h-[10rem]  object-cover"
              src={image}
              alt="فاقد عکس"
            />
            <svg className=" absolute z-10 cursor-pointer text-amber-50 top-2 right-2 w-10 h-10 bg-">
              <use href="#heart"></use>
            </svg>
            <div className="absolute  top-0 w-full h-full bg-black/30"></div>
            <div className="absolute flex flex-col -bottom-5 left-3 rounded-2xl shadow-xs bg-white pt-1 pb-1 pl-7 pr-7">
              <span className="text-xs font-bold">30 - 40</span>
              <span className="text-xs font-bold text-center">دقیقه</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold pt-3 pb-3 pr-1">{name}</span>
            <div className="flex gap-1 items-center flex-col sm:flex-row justify-between">
              <div className="flex items-right sm:items-center w-full sm:[w-50%]">
                <div className="sm:flex sm:items-center">
                  <svg className=" w-6 h-6 sm:w-7 sm:h-7">
                    <use href="#map-pin"></use>
                  </svg>
                </div>
                <div className="flex flex-col items-right leading-5 ">
                  <span className="text-sm">{city}</span>
                  <span className="text-xs text-gray-500"></span>
                </div>
              </div>
              {/* {singleFoodsComment?.length ? ( */}

              {/* <div className="flex sm:items-center flex-col w-full items-end sm:w-[50%]">
              <div className="text-gray-500 text-xs items-center">
                <span>{singleFoodsComment?.length}</span>
                <span>نظر</span>
              </div>
              <div className="flex & > *:text-yellow-500 items-center ">
                <svg className=" w-4 h-4">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4">
                  <use href="#star"></use>
                </svg>
                <svg className="w-4 h-4">
                  <use href="#star"></use>
                </svg>
              </div>
            </div> */}
              <div className="text-xs bg-green-800 w-full text-center text-white pt-1 pb-1 rounded-sm mt-1">
                {" "}
                فعلا بدون نظر 🤷‍♂️
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </Link>
    </div>
  );
}
