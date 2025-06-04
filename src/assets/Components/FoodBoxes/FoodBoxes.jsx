import React from "react";
import { Link } from "react-router";
export default function FoodBoxes({ img, title }) {
  return (
    <Link to="/categuryfoods">
      <div className="relative rounded-3xl sm:h-full overflow-hidden">
        <img className="img-after" src={`${img}`} alt="" />
        <span className="absolute text-xl bg-black/18 w-full h-full flex items-end bottom-0 pb-3 pr-3  sm:text-[22px] right-0 text-white">
          {title}
        </span>
      </div>
    </Link>
  );
}
