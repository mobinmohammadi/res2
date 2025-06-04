import React, { useEffect, useRef, useState } from "react";
import Header from "../../Components/HeaderPc/HeaderPc";
import PapularCategury from "../../Components/PapularCategury/PapularCategury";
import AroundMe from "../../Components/AroundMe/BoxesAroundMeFood";
import FooterPc from "../../Components/FooterPc/FooterPc";
import EasyAddress from "../../Components/EasyAddress/EasyAddress";
import UserBasket from "../../Components/UserBasket/UserBasket";
import NewFoods from "../../Components/NewFoods/NewFoods";
import PreeSeeCitys from "../../../Data.js";

import AllCitis from "../../../Data.js";
import CityNameFreeSee from "../../Components/CityNameFreeSee/CityNameFreeSee.jsx";
import { CartProvider } from "../../Components/Context/Context.jsx";
import FooterMobile from "../../Components/FooterMobile/FooterMobile.jsx";
import { Toaster, toast } from "react-hot-toast";

export default function Home() {
  // const baseUrl = import.meta.env.VITE_BASE_URL;
  const [city, setCity] = useState("");
  const [titleSearch, setTitleSearch] = useState("");
  const [resultSearchs, setResultSearchs] = useState([AllCitis]);
  const wrapperSearchReasults = useRef();

  const wrapperAddres = useRef();
  function searchHandler(e) {
    setTitleSearch(e.target.value);
    const resultAfterSearchs = AllCitis.AllCitis.filter((city) =>
      city.name.includes(titleSearch)
    );
    setResultSearchs(resultAfterSearchs);
    if (!titleSearch.trim().length || !e.target.value) {
      wrapperSearchReasults.current.className =
        "opacity-0 bg-white w-full h-72 overflow-y-scroll rounded-t-md mb-5 transition-all";
    } else {
      wrapperSearchReasults.current.className +=
        " active-wrapper__Search--Reasults";
    }
  }

  function hiddenShowAddreas(title) {
    setCity(title);

    wrapperAddres.current.className = "top-full hidden transition-custom";
    wrapperAddres.current.style.transition = "all 1s ease";
  }

  // useEffect(() => {
  //   fetch(`${baseUrl}/restaurants`)
  //     .then((res) => res.json())
  //     .then((result) => console.log("Data =====>", result));
  // }, []);
  return (
    <div className="dark:bg-zinc-600 relative">
      {/* <UserBasket/> */}
      <Header city={city} />
      <div className="container-custom">
        <PapularCategury />
        <AroundMe />
        <NewFoods />
      </div>
      <FooterPc />
      <div
        ref={wrapperAddres}
        className="hidden bg-slate-200 overflow-y-scroll  w-full fixed h-[100vh] bottom-0 z-50 top-0"
      >
        <div className="w-[90%] mx-auto flex flex-col gap-10">
          <div className="relative">
            <div className="flex flex-col gap-2  justify-center items-center pt-5 pb-3 border-b-2 border-sky-600 border-solid ">
              <span>شهر خود را انتخاب کنید</span>
              <div
                onClick={() => hiddenShowAddreas()}
                className="w-full bg-sky-500 flex justify-center items-center rounded-md cursor-pointer hover:bg-sky-600 transition-all  pt-2 pb-2"
              >
                <svg className="w-9 h-9">
                  <use href="#x-circle"></use>
                </svg>
              </div>
            </div>
            <div className="relative mt-5 flex flex-col gap-7">
              <div className="mr-5">
                <label className="mr-2" htmlFor="city">
                  شهر های پر بازدید 👌
                </label>
                <span className="absolute mr-4 -right-5 top-0 rounded-sm w-5 h-5 bottom-1 bg-yellow-500 "></span>
              </div>
              <div className=" grid grid-cols-4 & > *:pt-.5 & > *:pb-.5 gap-2 & > *:text-center mt-5 & > *:rounded-xs & > *:cursor-pointer & > *:hover:bg-black/10 & > *:transition-all justify-between & > *:bg-white & > * :w-full">
                {PreeSeeCitys.PreeSeeCitys.map((city) => (
                  <CityNameFreeSee
                    key={city.id}
                    title={city.city}
                    hiddenShowAddreas={hiddenShowAddreas}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex-col gap-10 flex ">
            <div className="relative  flex mr-4  ">
              <label className="mr-2" htmlFor="city">
                شهر خود را سرچ بزن 🔍
              </label>
              <span className="absolute  -right-5 rounded-sm w-5 h-5 bottom-1 bg-yellow-500 "></span>
            </div>
            <div className="">
              <div className="bg-sky-700 rounded-sm relative">
                <input
                  className="text-white  w-full outline-0 pt-2 pb-2 pr-2"
                  type="text"
                  value={titleSearch}
                  onChange={(e) => searchHandler(e)}
                  placeholder="جستوجوی شهر شما ...."
                />
                <div className="bg-amber-500  absolute left-0 top-0 flex justify-center text-white items-center rounded-l-sm cursor-pointer w-10 h-full">
                  <svg className="w-6 h-6">
                    <use href="#magnifying-glass"></use>
                  </svg>
                </div>
              </div>

              <div
                ref={wrapperSearchReasults}
                className="opacity-0 bg-white mb-20 w-full h-[340px] rounded-md"
              >
                <div className="flex flex-col xs:flex-row gap-2  pr-3 pl-3 justify-between mt-2 border-b-2 border-b-slate-300 pb-2 border-solid items-center pt-3">
                  <span className="text-center text-sm sm:text-base">
                    شهر های یافت شده ♻
                  </span>
                  <span className="text-sm sm:text-base">
                    {resultSearchs.length} تعداد شهر های یافت شده
                  </span>
                </div>
                {!resultSearchs.length ? (
                  <div className="flex text-center items-center justify-center flex-col gap-5">
                    <img
                      className="w-40 h-40 sm:w-48 sm:h-48"
                      src="../images/gif/notFound.gif"
                      alt=""
                    />
                    <span className="max-w-[150px] text-sm leading-6 font-bold">
                      متاسفانه همچین شهری در دیتابیس ما وجود ندارد 😓
                    </span>
                  </div>
                ) : (
                  <ul className="w-[90%] h- mx-auto & > *:rounded-sm flex flex-col  gap-[2px] mt-2 text-center & > *:bg-slate-200 & > *:p-2 & > *:cursor-pointer & > *:hover:bg-slate-300 transition-all">
                    {resultSearchs.map((city, index) => (
                      <li key={index + 1}>{city.name}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-center" />

      <FooterMobile />
      {/* <div className="bg-zinc-700 w-full h-full z-40 fixed top-0">s</div> */}
    </div>
  );
}
