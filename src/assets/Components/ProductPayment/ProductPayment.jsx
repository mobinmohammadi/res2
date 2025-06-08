import React from "react";
import Topbar from "../Topbar/Topbar";

export default function ProductPayment() {
  return (
    <div>
      <Topbar />
      <div className="w-[80%] mx-auto mt-20">
        <div className="w-[220px] flex flex-col gap-2.5">
          <div className="flex items-center ">
            <div className="bg-[#28A745] text-white w-10 h-10 flex items-center justify-center rounded-full">
              <svg className="w-5 h-5">
                <use href="#map-1"></use>
              </svg>
            </div>
            <span className="h-0.5 bg-[#28A745] w-[182px] block"></span>
          </div>
          <span className="text-xs ">انتخاب غذا</span>
        </div>
      </div>
    </div>
  );
}
