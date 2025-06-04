import React, { useState } from "react";

export default function SliderTitleFoods({
  mainCategury,
  setMainCategury,
  item,
}) {
  return (
    <div
      onClick={(e) => setMainCategury(item.title)}
      className={`flex cursor-pointer  ${
        mainCategury == item.title
          ? " border-b-3  border-b-red-500 border-solid"
          : null
      } gap-3 sm:gap-2  items-center justify-center flex-col`}
    >
      <img className="w-10 h-10 2xs:w-12 2xs:h-12 sm:w-16 sm-h-16" src={item.img} alt="" />
      <span className="text-center min-w-[120px] text-x 2xs:text-xs">{item.title}</span>
      <span></span>
    </div>
  );
}
