import React from "react";

export default function ItemLineProgress({title , percent , count , desc , colors , bgProgress}) {
  return (
    <div className=" flex justify-between flex-col h-[150px] pt-2 pb-2 pr-3 pl-3 rounded-xs bg-white">
      <div className="flex justify-between ">
        <span>{title}</span>
        <svg className="w-6 h-6">
          <use href="#cube-transparent"></use>
        </svg>
      </div>
      <div className="">
        <div className="flex items-center flex-col-reverse sm:flex-row gap-2 mb-2 justify-between">
          <span className={`bg-green-400 rounded-md text-white pt-1 pb-1 pr-3 pl-3 text-xs`}>
            {percent} رشد
          </span>
          <div className="flex flex-col text-center">
            <span className="text-sm xs:text-base">{count}</span>
            <span className="text-xs xs:text-sm">{desc}</span>
          </div>
        </div>
      </div>
      <div className={`${bgProgress} rounded-md`}>
        <span className={`block ${colors} w-[70%] h-1`}></span>
      </div>
    </div>
  );
}
