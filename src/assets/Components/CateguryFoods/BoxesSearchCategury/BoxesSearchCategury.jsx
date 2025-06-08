import React, { useEffect, useRef, useState } from "react";
import filterItems from "../../../../Data.js";

export default function BoxesSearchCategury({
  allRestourants,
  closBox,
  loaderCategury,
  originalRestourants,
  setTitleFilter,
  setOriginalRestourants,
  setAllRestourants,
  setIsShowLayer,
  boxsFiltred,
  setFilterdProductCategury,
}) {
  const [modeFiltred, setModFiltred] = useState("filter-result");
  const [filterTitleFoods, setFilterTitleFoods] = useState("");

  const handelBox = () => {
    boxsFiltred.current.classList.remove("opacity-0", "top-90%" , "-z-10");
    boxsFiltred.current.classList.add("top-[110%]", "transition-all" , "z-20");
    setIsShowLayer(true);
  };

  function handleFoodByTitleFilter(item) {
    setTimeout(() => {
      loaderCategury.current.classList.add("fixed");
      loaderCategury.current.classList.remove("hidden");
    }, 100);

    setTimeout(() => {
      loaderCategury.current.classList.remove("fixed");
      loaderCategury.current.classList.add("hidden");
    }, 1500);
    console.log(item);

    switch (item) {
      case "رستوران های دارای تخفیف":
        const filtred = originalRestourants.filter(
          (res) => res.discount !== undefined
        );
        setAllRestourants(filtred);
        setFilterdProductCategury(item);
        break;

      case "همه رستوران ها":
        setAllRestourants(originalRestourants);
        setFilterdProductCategury("");
    }
  }

  function handlerTitleFilter(title) {
    setTimeout(() => {
      setTitleFilter(title);
    }, 1500);
  }
  return (
    <div>
      <div className="relative">
        <div
          onClick={() => handelBox()}
          className="flex   rounded-md w-full trans pt-2 pb-2 pr-4 pl-5 text-zinc-800 font-bold cursor-pointer gap-2  bg-gray-200"
        >
          <svg className="w-7 h-7">
            <use href="#adjustments-horizontal"></use>
          </svg>
          <span className="text-[10px] hidden sm:inline-block">
            فیلتر و مرتب سازی
          </span>
        </div>

        <div
          ref={boxsFiltred}
          className={`absolute opacity-0 -z-10 transition-all left-0  bg-white w-72 sm:w-92 rounded-2xl p-5`}
        >
          <div className="flex text-xs sm:text-sm justify-between pb-5 & > *:cursor-pointer $ > *:pb-3">
            <span
              onClick={() => setModFiltred("filter-result")}
              className={`${
                modeFiltred == "filter-result"
                  ? "active--filterd transition-[0.2s]"
                  : ""
              } w-full text-center `}
            >
              فیلتر نتایج
            </span>
            <span
              onClick={() => setModFiltred("filter-sort")}
              className={`${
                modeFiltred == "filter-sort"
                  ? "active--filterd transition-[0.2s]"
                  : ""
              } w-full text-center`}
            >
              مرتب سازی
            </span>
          </div>
          <span className="w-full h-[2px] mt-2 mb-2 bg-[#eeeeee] inline-block"></span>
          {modeFiltred == "filter-result" ? (
            <div className="pb-3">
              <ul className="flex text-xs sm:text-sm flex-col gap-4 & > *:flex & > *:items-center & > *:gap-1">
                {filterItems.filterItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center"
                    onClick={() => {
                      setFilterTitleFoods(item);
                      handlerTitleFilter(item);
                    }}
                  >
                    <input
                      className=""
                      type="checkbox"
                      checked={filterTitleFoods === item}
                      onChange={() => setTitleFilter(item)}
                      name=""
                      id=""
                    />
                    <span className="">{item}</span>
                  </li>
                  // console.log(item)
                ))}
              </ul>
            </div>
          ) : (
            <div className="pb-3">
              <ul className="flex text-xs sm:text-sm flex-col gap-5 ">
                <li>کمترین فاصله</li>
                <li>کمترین فاصله</li>
                <li>کمترین فاصله</li>
                <li>کمترین فاصله</li>
              </ul>
            </div>
          )}
          <span className="w-full h-[2px] mt-2 mb-2 bg-[#eeeeee] inline-block"></span>
          <div className="pt-1 & > *:cursor-pointer & > *:text-x & > *:sm:text-sm & > *:rounded-md & > *:w-full flex gap-3 & > *:text-xs & > *:pt-2 & > *:pb-2 & > *:pr-2 & > *:pl-2  & > *:sm:pt-3 & > *:sm:pb-3 & > *:sm:pr-3 & > *:sm:pl-3 & > *:font-bold  & > *:border-[#ef4123] & > *:border-2  ">
            <button
              onClick={() => {
                closBox();
                handleFoodByTitleFilter(filterTitleFoods);
                setFilterTitleFoods("");
                setFilterdProductCategury("");
              }}
              className="bg-[#ef4123] text-white"
            >
              اعمال
            </button>
            <button>حذف فیلتر ها</button>
          </div>
        </div>
      </div>
    </div>
  );
}
