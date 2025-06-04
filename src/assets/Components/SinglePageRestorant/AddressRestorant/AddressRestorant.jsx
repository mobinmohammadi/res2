import React from "react";
import BasicMap from "../../BasicMap/BasicMap";

export default function AddressRestorant({dataSingleResturants}) {

  const {city} = dataSingleResturants
  return (
    <div className="flex flex-col gap-5 pt-5 pb-5 pr-5 justify-between mr-6 ml-6 bg-white pl-3  mt-5">
      <div className="flex flex-col w-full gap-3">
        <span className="text-xl font-bold">آدرس</span>
        <span className="border-b-2 border-[#dddddd] w-full"></span>
      </div>
      <div className="flex flex-col gap-5 ">
        <div className="flex items-center gap-1 text-sm text-slate-500">
          <svg className="w-5 h-5">
            <use href="#map-pin"></use>
          </svg>
          <span>{city}</span>
        </div>
        {/* <div className="w-full h-[230px] rounded-md bg-slate-200"> */}
            <BasicMap  dataSingleResturants={dataSingleResturants}/>
        {/* </div> */}
      </div>
    </div>
  );
}
