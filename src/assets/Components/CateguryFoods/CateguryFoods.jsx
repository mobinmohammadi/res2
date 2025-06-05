import React, { useEffect, useRef, useState } from "react";
import Topbar from "../Topbar/Topbar";
import SectionHeader from "../SectionHeader/SectionHeader";
import FoodBoxes from "../FoodBoxes/FoodBoxes";
import BoxesAroundMeFood from "../BoxesAroundMeFood/BoxesAroundMeFood";
import SeeMoreBoxes from "../SeeMoreBoxes/SeeMoreBoxes";
import FooterPc from "../FooterPc/FooterPc";
import RestorantsData from "./../../../../RestorantsData.json";
import FooterMobile from "../FooterMobile/FooterMobile";
import { Toaster } from "react-hot-toast";
import { Link, useParams } from "react-router";
export default function CateguryFoods() {
  const [searchValue, setSearchValue] = useState("");
  // const [isShowFiltredBoxes , setIsShowFiltredBoxes] = useState(false)
  const [isShowLayer, setIsShowLayer] = useState(false);
  const [modeFiltred, setModFiltred] = useState("filter-result");
  const [allRestourants, setAllRestourants] = useState(RestorantsData);
  const [visibleRestorunts, setVisibleRestorunts] = useState(4);
  // const [afterTheFilterRestorants , setAfterTheFilterRestorants] = useState

  const loaderCategury = useRef()

  const addShowMoreFoodes = () => {
    setTimeout(() => {
      setVisibleRestorunts((prev) => (prev += 2));
    }, 2000);
  };

  const param = useParams();
  const modeFilter = { mode: param["*"] };


  useEffect(()=>{
    window.scrollTo(0,0)
    setTimeout(() => {
      loaderCategury.current.classList.remove("fixed")
      loaderCategury.current.classList.add("hidden")
    }, 1700);
  },[])



  //  ===================== Name Categury =======================



  let titleCateguryFoods = "";
  function categuryNameHandler() {
    switch (modeFilter.mode) {
      case "pizza":
        return "جستوجوی پیتزا";

      case "kabab":
        return "جستوجوی کباب";

      case "sop":
        return "جستوجوی سوپ";

      case "sandewich":
        return "جستوجوی ساندویچ";

      case "iraninfood":
        return "جستوجوی غذای ایرانی";

      case "sokhari":
        return "جستوجوی سوخاری";

      case "pasta":
        return "جستوجوی پاستا";

      case "salad":
        return "جستوجوی سالاد";

      case "breakefast":
        return "جستوجوی صبحانه";

      case "stick":
        return "جستوجوی ستیک";

      default: {
        ("");
      }
    }
  }

  titleCateguryFoods = categuryNameHandler();

  // useEffect(() => {
  //   categuryNameHandler();
  // }, []);



  // ============================================================

  // ===============================================================

  const restoruntsToShow = allRestourants.slice(0, visibleRestorunts);
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
    let value = e.target.value.trim()
    setSearchValue(value);
    if (searchValue.length < 3 || !value.length) {
      setAllRestourants(RestorantsData)
      // getAllRestorants();
    } else {
      resultAfterSearch = allRestourants.filter((resturant) => {
        return resturant.name.includes(searchValue);
      });
      setAllRestourants(resultAfterSearch);
    }
  };

  const getAllRestorants = () => {
    setAllRestourants(RestorantsData);
  };

  useEffect(() => {
    getAllRestorants();
  }, []);

  // ===============================================================

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
      <div className="flex mt-5 gap-5 w-[80%] justify-between mx-auto">
        <div className="flex flex-col justify-between   w-full">
          <div className="relative w-full  flex z-10 bg-white pt-3 pb-3  rounded-md overflow-hidden">
            <input
              onChange={(e) => heandleSearchFoods(e)}
              type="text"
              value={searchValue}
              className="bg-white w-full pl-9 text-x sm:text-sm focus:outline-0 pr-2 sm:pr-4  font-bold h-full"
              placeholder="جستو جوی رستوران یا غذا ..."
            />
            {searchValue.length > 3 && (
              <div onClick={() => setSearchValue("")} className=" absolute left-2 top-2 rounded-full bg-gray-200 w-6 h-6 flex items-center justify-center">
                <svg className="cursor-pointer w-4 h-4 ">
                  <use href="#x-mark"></use>
                </svg>
              </div>
            )}
          </div>
          {titleCateguryFoods && (
            <div className="mt-5 text-xs relative bg-zinc-800 text-white w-[80%] pt-2 pb-2 pr-2 rounded-sm">
              <span>{titleCateguryFoods}</span>
              <Link to="/categuryfoods">
                <svg
                  className="w-5 h-5 absolute left-1 top-1.5 text-yellow-500"
                >
                  <use href="#x-mark"></use>
                </svg>
              </Link>
            </div>
          )}
        </div>
        <div>
          <div className="relative">
            <div
              onClick={() => handelBox()}
              className="flex  rounded-md w-full pt-2 pb-2 pr-4 pl-5 text-zinc-800 font-bold cursor-pointer gap-2  bg-gray-200"
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
              className={`absolute transition-all hidden z-20 left-0  bg-white w-72 sm:w-92 rounded-2xl p-5`}
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
                <button className="bg-[#ef4123] text-white">اعمال</button>
                <button>حذف فیلتر ها</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-foods ">
        <div className="flex mt-9 mb-6 justify-between items-center">
          {searchValue.length ? (
            <SectionHeader title={`جستوجوی  ${searchValue} `} />
          ) : (
            <SectionHeader title="جستوجوی رستوران یا غدا در رستوران رازینه" />
          )}
          <div className="flex gap-1 seaction-header text-sm font-bold">
            <span className="text-sky-600 text-sm mt-0.5">
              {allRestourants.length}
            </span>
            <span className="mt-0.5 text-xs sm:text-sm">مورد یافت شد</span>
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
              <BoxesAroundMeFood allRestorants={resturant} />
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
      <div ref={loaderCategury} className="fixed bg-sky-800 flex items-center justify-center top-0 w-full h-full z-20">
        <span className="loader-categury"></span>
      </div>

      {!allRestourants.length > 5 ||
      visibleRestorunts >= allRestourants.length ? null : (
        <div className="" onClick={() => addShowMoreFoodes()}>
          <SeeMoreBoxes />
        </div>
      )}
      <Toaster position="top-center" />

      <FooterMobile />
    </div>
  );
}
