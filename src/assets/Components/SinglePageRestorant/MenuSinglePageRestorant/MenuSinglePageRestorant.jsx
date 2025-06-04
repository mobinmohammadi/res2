import React from "react";

export default function MenuSinglePageRestorant({
  title,
  active,
  keys,
  setStatusMenuShow,
  statusMenuShow,
}) {
  return (
    <div
      data-key={keys}
      className="flex flex-col gap-3"
      onClick={(e) => {
        setStatusMenuShow(keys);
      }}
    >
      <li
        className={`text-[#383c47] text-sm ${
          statusMenuShow == keys ? "active-single__menuRestorants" : ""
        }`}
      >
        {title}
      </li>
    </div>
  );
}
