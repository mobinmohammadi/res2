import React, { useEffect, useRef } from "react";
import "./SwalBox.css";
export default function SwalBox({ title, ok }) {
  const progreStatus = useRef();
  const boxSucssusSwal = useRef();
  if (ok) {
    useEffect(() => {
      boxSucssusSwal.current.className =
        "fixed w-72 showSwal top-5 right-8 showNormalSpeedShow overflow-hidden bg-white shadow-2xl border-2 z-20 border-solid border-green-400 rounded-md";
      setTimeout(() => {
        // progreStatus.current.className+=" active-progress w-full"
        // progreStatus.current.className+=" active-progress"
        progreStatus.current.className += " active-progress";
      }, 1000);
      setTimeout(() => {
        // boxSucssusSwal.current.className.remove("right-5")
        boxSucssusSwal.current.className =
          "fixed w-72  top-5 right-8 transition-all overflow-hidden bg-white shadow-2xl border-2 z-20 border-solid border-green-400 rounded-md";
      }, 2500);
      setTimeout(() => {
        // boxSucssusSwal.current.className.remove("right-5")
        boxSucssusSwal.current.className =
          "fixed w-72  top-5 -right-full showNormalSpeedShow overflow-hidden bg-white shadow-2xl border-2 z-20 border-solid border-green-400 rounded-md";
      }, 3500);
    }, []);
  }
  
  return (
    <div
      ref={boxSucssusSwal}
      className="fixed w-72  top-5 -right-full overflow-hidden transition-all bg-white shadow-2xl border-2 z-20 border-solid border-green-400 rounded-md"
    >
      <div className="relative pl-3 pt-2 pb-2">
        <div className="flex items-center pr-2">
          <svg className="w-12 h-12 text-green-500 rotate-6">
            <use href="#verifay"></use>
          </svg>
          <div className="flex  flex-col justify-between">
            <span className="text-sm">{title}</span>
            <span className="text-xs">رستوران محمدی</span>
          </div>
        </div>
        <div className="absolute w-full h-2 top-[95%] bg-zinc-700">
          <span
            ref={progreStatus}
            className="w-4 h-full block bg-red-500"
          ></span>
        </div>
      </div>
    </div>
  );
}
