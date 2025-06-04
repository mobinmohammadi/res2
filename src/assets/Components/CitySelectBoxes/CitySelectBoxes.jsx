import React from "react";

export default function CitySelectBoxes(props) {
  return (
    <>
    
  
    
    <li className="pr-2">
      <svg className="w-5 h-5 sm:w-6 sm:h-6">
        <use href="#map-pin"></use>
      </svg>
      <span className="leading-3 mt-0.5 text-sm sm:text-base">
        {props.name}
      </span>
    </li>
    </>
  );
}
