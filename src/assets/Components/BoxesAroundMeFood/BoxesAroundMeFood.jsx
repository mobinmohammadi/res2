import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export default function BoxesFood({allRestorants , allComments}) {

  const {id ,city, name , address ,image} = allRestorants
  
  const [singleFoodsComment , setSingleFoodsComment] = useState([])
  // const baseUrl = import.meta.env.VITE_BASE_URL;

  
  const modePage = useParams()

  // useEffect(() => {
  //   fetch(`${baseUrl}/restaurants/${id}/comments`)
  //   .then(res => res.json())
  //   .then(result => setSingleFoodsComment(result))
    
  // } , [])
  
  return (
    <>
      <svg className="hidden">
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
      </svg>

    <Link to={`/restorant/${id}`}>
      <div className=" pt-5  bg-white p-5 min-h-36 w-full rounded-md">
        <div className="relative">
          <img className="w-full h-[10rem]   object-cover" src={image} alt="فاقد عکس" />
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
                <span className="text-xs text-gray-500">({address})</span>
              </div>
            </div>
            {singleFoodsComment.length ? (

            <div className="flex sm:items-center flex-col w-full items-end sm:w-[50%]">
              <div className="text-gray-500 text-xs items-center">
                <span>{singleFoodsComment.length}</span>
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
            </div>
            ) : <div className="text-xs bg-green-800 w-full text-center text-white pt-1 pb-1 rounded-sm mt-1" > فعلا بدون نظر 🤷‍♂️</div>}
          </div>
        </div>
        <div className=""></div>
      </div>
    </Link>
    </>
  );
}
