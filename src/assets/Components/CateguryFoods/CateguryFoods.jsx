import React, { useEffect, useRef, useState } from "react";
import Topbar from "../Topbar/Topbar";
import SectionHeader from "../SectionHeader/SectionHeader";
import FoodBoxes from "../FoodBoxes/FoodBoxes";
import BoxesAroundMeFood from "../BoxesAroundMeFood/BoxesAroundMeFood";
import SeeMoreBoxes from "../SeeMoreBoxes/SeeMoreBoxes";
import FooterPc from "../FooterPc/FooterPc";

export default function CateguryFoods() {
  const [searchValue, setSearchValue] = useState("");
  // const [isShowFiltredBoxes , setIsShowFiltredBoxes] = useState(false)
  const [isShowLayer, setIsShowLayer] = useState(false);
  const [modeFiltred, setModFiltred] = useState("filter-result");
  const [allRestourants, setAllRestourants] = useState([]);
  const [visibleRestorunts , setVisibleRestorunts] = useState(4)

  // const [afterTheFilterRestorants , setAfterTheFilterRestorants] = useState

  const addShowMoreFoodes = () => {
    setTimeout(() => {
      
      setVisibleRestorunts((prev) => prev += 2)
    }, 2000);
    
    
  }

  const restoruntsToShow = allRestourants.slice(0 , visibleRestorunts)
  const boxsFiltred = useRef();
  const handelBox = () => {
    boxsFiltred.current.style.display = "block";
    setIsShowLayer(true);
    setTimeout(() => {
      boxsFiltred.current.style.top = "120%";
      boxsFiltred.current.style.transition = "all 0.1s ease";
    }, 5);
  };
  const closBox = () => {
    setIsShowLayer(false);
    boxsFiltred.current.style.top = "90%";
    setTimeout(() => {
      boxsFiltred.current.style.display = "none";
      boxsFiltred.current.style.transition = "all 0.5s ease-in-oute";
    }, 100);
  };

  let resultAfterSearch = [];

  const heandleSearchFoods = (e) => {
    
    setSearchValue(e.target.value);
    if (searchValue.length < 3  || e.target.value == "") {
      getAllRestorants();
    } else {
      resultAfterSearch = allRestourants.filter((resturant) => {
        return resturant.name.includes(searchValue);
      });
      setAllRestourants(resultAfterSearch);
    }
  };

  const getAllRestorants = () => {
    fetch(`https://loving-tower-chan-kills.trycloudflare.com`)
      .then((res) => res.json())
      .then((data) => setAllRestourants(data));
  };

  useEffect(() => {
    getAllRestorants();
  }, []);

  return (
    <div className="flex flex-col">
      <svg className="hidden">
        <symbol
          id="adjustments-horizontal"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </symbol>

        <symbol
          id="x-mark"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </symbol>
      </svg>
      <Topbar />
      <div className="flex items-center mt-5 gap-5 w-[80%] mx-auto h-13">
        <div className="relative  flex z-10  bg-white pt-3 pb-3 w-[75%] rounded-md overflow-hidden">
          <input
            onChange={(e) => heandleSearchFoods(e)}
            type="text"
            className="bg-white w-full text-xs sm:text-sm focus:outline-0 pr-4  font-bold h-full"
            placeholder="جستو جوی رستوران یا غذا ..."
          />
          <div className=" absolute left-2 top-2 rounded-full bg-gray-200 w-6 h-6 flex items-center justify-center">
            <svg className="cursor-pointer w-4 h-4 ">
              <use href="#x-mark"></use>
            </svg>
          </div>
        </div>
        <div>
          <div className="relative">
            <div
              onClick={() => handelBox()}
              className="flex items-center rounded-md w-full pt-2 pb-2 pr-4 pl-5 text-zinc-800 font-bold cursor-pointer gap-2  justify-center bg-gray-200"
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
              className={`absolute transition-all hidden z-20 left-0  bg-white w-92 rounded-2xl p-5`}
            >
              <div className="flex justify-between pb-5 & > *:cursor-pointer $ > *:pb-3">
                <span
                  onClick={() => setModFiltred("filter-result")}
                  className={`${
                    modeFiltred == "filter-result"
                      ? "active--filterd transition-[0.2s]"
                      : ""
                  } w-full text-center`}
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
                  <ul className="flex flex-col gap-4 & > *:flex & > *:items-center & > *:gap-1">
                    <li className="flex items-center">
                      <input className="" type="checkbox" name="" id="" />
                      <span className="">غذای نیمه آماده</span>
                    </li>
                    <li>
                      <input type="checkbox" name="" id="" />
                      <span>غذای نیمه آماده</span>
                    </li>
                    <li>
                      <input type="checkbox" name="" id="" />
                      <span>غذای نیمه آماده</span>
                    </li>
                    <li>
                      <input type="checkbox" name="" id="" />
                      <span>غذای نیمه آماده</span>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="pb-3">
                  <ul className="flex flex-col gap-5 ">
                    <li>کمترین فاصله</li>
                    <li>کمترین فاصله</li>
                    <li>کمترین فاصله</li>
                    <li>کمترین فاصله</li>
                  </ul>
                </div>
              )}
              <span className="w-full h-[2px] mt-2 mb-2 bg-[#eeeeee] inline-block"></span>
              <div className="pt-1 & > *:cursor-pointer & > *:rounded-md & > *:w-full flex gap-3 & > *:text-xs  & > *:pt-3 & > *:pb-3 & > *:pr-3 & > *:pl-3 & > *:font-bold  & > *:border-[#ef4123] & > *:border-2  ">
                <button className="bg-[#ef4123] text-white">اعمال</button>
                <button>حذف فیلتر ها</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-foods ">
        <div className="flex mt-9 mb-6 justify-between items-center">
          {searchValue.length ? 
          <SectionHeader title={`جستوجوی  ${searchValue} `} />
          
        : <SectionHeader title="جستوجوی رستوران یا غدا در رستوران رازینه"/> }
          <div className="flex gap-1 seaction-header text-sm font-bold">
            <span className="text-sky-600 text-base ">{allRestourants.length}</span>
            <span className="mt-0.5">مورد یافت شد</span>
          </div>
        </div>
        {!allRestourants.length ? (
          <div className="w-full flex items-center justify-center">
            <span className="bg-red-500 mt-5 w-full mb-5 items-center justify-center text-center pt-2 pb-2 text-white rounded-md text-sm sm:text-xl">
              {" "}
              هیچ رستورانی طبق سرچ شما پیدا نشد 🙁
            </span>
          </div>
        ) : (
          <div className="mt-7  grid gap-5 grid-cols-1 2xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {restoruntsToShow.map((resturant) => (
              <BoxesAroundMeFood {...resturant} />
            ))}
          </div>
        )}
      </div>
      {isShowLayer ? (
        <div
          onClick={() => {
            closBox();
          }}
          className="bg-black/20 w-full h-full fixed top-0"
        ></div>
      ) : (
        ""
      )}

      {!allRestourants.length > 5 || visibleRestorunts >= allRestourants.length ? null : <div className="" onClick={() => addShowMoreFoodes()}><SeeMoreBoxes/></div>}

      <FooterPc />
    </div>
  );
}
