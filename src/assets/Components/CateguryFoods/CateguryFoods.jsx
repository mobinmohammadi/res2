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
import BoxesSearchCategury from "./BoxesSearchCategury/BoxesSearchCategury";
export default function CateguryFoods() {
  const [searchValue, setSearchValue] = useState("");
  // const [isShowFiltredBoxes , setIsShowFiltredBoxes] = useState(false)
  const [isShowLayer, setIsShowLayer] = useState(false);
  const [allRestourants, setAllRestourants] = useState(RestorantsData);
  const [filterdProductCategury, setFilterdProductCategury] = useState([]);
  const [originalRestourants, setOriginalRestourants] = useState([
    ...allRestourants,
  ]);
  const [titleFilter, setTitleFilter] = useState("");

  const [visibleRestorunts, setVisibleRestorunts] = useState(4);
  // const [afterTheFilterRestorants , setAfterTheFilterRestorants] = useState

  const boxsFiltred = useRef(null);
  const loaderCategury = useRef(null);

  const addShowMoreFoodes = () => {
    setTimeout(() => {
      setVisibleRestorunts((prev) => (prev += 2));
    }, 2000);
  };

  const param = useParams();
  const modeFilter = { mode: param["*"] };

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      loaderCategury.current.classList.remove("fixed");
      loaderCategury.current.classList.add("hidden");
    }, 1700);
  }, []);

  const closBox = () => {
    setIsShowLayer(false);
    boxsFiltred.current.classList.add(
      "opacity-0",
      "top-[90%]",
      "transition-all"
    );
  };

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

  // ===============================================================

  const restoruntsToShow = allRestourants.slice(0, visibleRestorunts);

  let resultAfterSearch = [];

  const heandleSearchFoods = (e) => {
    let value = e.target.value.trim();
    setSearchValue(value);
    if (searchValue.length < 3 || !value.length) {
      setAllRestourants(RestorantsData);
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

  useEffect(() => {
    console.log(filterdProductCategury);
  }, [filterdProductCategury]);

  const whatsLenghtArray =
    filterdProductCategury.length > 0
      ? filterdProductCategury
      : allRestourants.length > 0
      ? allRestourants
      : [];
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
              <div
                onClick={() => setSearchValue("")}
                className=" absolute left-2 top-2 rounded-full bg-gray-200 w-6 h-6 flex items-center justify-center"
              >
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
                <svg className="w-5 h-5 absolute left-1 top-1.5 text-yellow-500">
                  <use href="#x-mark"></use>
                </svg>
              </Link>
            </div>
          )}
        </div>
        <BoxesSearchCategury
          loaderCategury={loaderCategury}
          setTitleFilter={setTitleFilter}
          closBox={closBox}
          originalRestourants={originalRestourants}
          setOriginalRestourants={setOriginalRestourants}
          setAllRestourants={setAllRestourants}
          setFilterdProductCategury={setFilterdProductCategury}
          allRestourants={allRestourants}
          boxsFiltred={boxsFiltred}
          setIsShowLayer={setIsShowLayer}
        />
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
        {titleFilter && (
          <div className="relative border-b-2 w-48 mt-10 pb-3 border-dashed border-zinc-700">
            <span className="absolute bg-yellow-500 w-4 h-4 rounded-sm top-1"></span>
            <span className="mr-5 text-sm font-bold text-red-800">
              {titleFilter}
            </span>
          </div>
        )}
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
              <BoxesAroundMeFood key={resturant.id} allRestorants={resturant} />
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
      <div
        ref={loaderCategury}
        className="fixed bg-sky-800 flex items-center justify-center top-0 w-full h-full z-20"
      >
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
