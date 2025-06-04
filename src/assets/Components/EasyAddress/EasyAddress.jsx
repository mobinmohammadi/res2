import React, { memo, useCallback, useMemo, useRef, useState } from "react";
import CitySelectBoxes from "../CitySelectBoxes/CitySelectBoxes";
import OptionsSelect from "../OptionsSelect/OptionsSelect";
// import { allCitisData } from ";

import DataAllCities from "../../../Data.js";

export default function EasyAddress({city}) {
  // const [allCitis, setAllCitis] = useState(DataAllCities)
  const allCitis = [DataAllCities];
  const [selectBoxheader, setSelectBoxHeader] = useState("neighborhood");
  const [isShowLayer, setIsShowLayer] = useState(false);
  const boxesSealectedUsers = useRef();
  const [citySelected, setCitySelected] = useState("ایران");
  const [titleCapital, setTitleCapital] = useState("");
  const [mainCitis, setMainCitis] = useState([]);

  const [foundCityAfterFilter, setFoundCityAfterFilter] = useState([]);

  const openBoxesSelectedDetailsCity = useCallback(() => {
    boxesSealectedUsers.current.style.display = "flex";
    boxesSealectedUsers.current.style.top = "78px";
    boxesSealectedUsers.current.className += "transition-all";

    setIsShowLayer(true);
  }, []);

 
  const loaderSearchSelectBox = useRef();
  const WrapperForLoader = useRef();

  const closeBoxesSelectedDetailsCity = useCallback(() => {
    boxesSealectedUsers.current.style.display = "none";
    boxesSealectedUsers.current.style.top = "30px";
    boxesSealectedUsers.current.style.transition = "all .5 ease";
  }, []);
  const changeOnsTitleFilter = (e) => {
    const resultTitleName = DataAllCities.DataAllCities.filter(item => (
      item.fenglish == e.target.value
      
    ))
    setTitleCapital(resultTitleName[0].capital)
    
    
    
  }
  let titleFilter = ""
  let titleCapitals = ""
  const selectChangeHandler = useCallback((e) => {
    
    
    setTitleCapital(e.target.capital);
    setMainCitis([]);
    titleFilter = e.target.value;
    if (titleFilter == "-1") {
      setMainCitis([]);
    } else {
      setTimeout(() => {
        loaderSearchSelectBox.current.className =
          "block w-full justify-center h-[50%] absolute items-center";
        WrapperForLoader.current.className =
          "bg-white h-full  flex items-center justify-center flex-col gap-5 p-5 ";
      }, 100);

      setTimeout(() => {
        loaderSearchSelectBox.current.className = "hidden opacity-0 ";
        WrapperForLoader.current.className = "  flex  flex-col gap-5 p-5 ";
      }, 700);
      setTimeout(() => {
        let resultFilter = allCitis.flatMap((item) =>
          item.DataAllCities.filter((items) => items.fenglish == titleFilter)
        );
        setMainCitis(resultFilter);
      }, 800);
    }

    setCitySelected(e.target.value);
  }, []);

  return (
    <div className="relative flex pt-3 pb-3 sm:pt-5 sm:pb-5 text-2xl gap-1 items-center justify-center ">
      <div className="flex pb-1 text-xs sm:text-2xl items-center justify-center gap-1">
        <svg className="w-4 h-4 sm:w-8 sm:h-8">
          <use href="#map-pin"></use>
        </svg>
        <span> {titleCapital.length ? `درمحدوده ${titleCapital}` : ` درمحدوده ${city}`} </span>
        <div
          onClick={() => openBoxesSelectedDetailsCity()}
          onChange={(e) => handleByTitleCapital(e)}
          className="flex Dana-bold hover:border-b text-red-500 items-center cursor-pointer gap-1 justify-center "
        >
          <span className="leading-8  text-md">{titleCapital}</span>
          <svg className="w-5 h-5 ">
            <use href="#chevron-down"></use>
          </svg>
        </div>
      </div>
      <>
        <div
          ref={boxesSealectedUsers}
          className={` hidden absolute w-[20rem] sm:w-[40rem]  rounded-lg  gap-2 z-20 top-[30px]  bg-slate-100  flex flex-col   ${
            selectBoxheader == "neighborhood" ? "h-[600px] " : "sm:h-[200px]"
          } `}
        >
          <div className="morabba"></div>
          <div
            onClick={() => setIsShowModalCity(false)}
            className=" flex justify-between items-center bg-white pt-3 pr-4 pl-4 pb-5"
          >
            <div
              onClick={() => setSelectBoxHeader("neighborhood")}
              className="w-[50%] flex justify-center cursor-pointer"
            >
              <span
                className={`w-full flex text-xs sm:text-base justify-center pb-3  ${
                  selectBoxheader == "neighborhood" ? "active-addeares" : ""
                }`}
              >
                انتخاب شهر و استان
              </span>
            </div>
            <div
              onClick={() => setSelectBoxHeader("my-addeares")}
              className="w-[50%] flex justify-center cursor-pointer"
            >
              <span
                className={`w-full pb-3 text-xs sm:text-base flex justify-center ${
                  selectBoxheader == "my-addeares" ? "active-addeares" : ""
                } `}
              >
                آدرس های من
              </span>
            </div>
          </div>

          {selectBoxheader == "my-addeares" ? (
            <div className="  bg-white flex items-center justify-center flex-col gap-5 p-5 ">
              <span className="text-[#686b73] leading-7  text-base font-bold">
                شما هنوز آدرسی وارد نکرده اید😥
              </span>
              <div className=" hover:bg-[#ef4123] hover:text-white cursor-pointer transithion-all text-[#f15f46] flex items-center justify-center gap-2 pt-1 pb-1 pr-4 pl-4 rounded-lg overflow-hidden border border-[#ef4123]">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mb-1">
                  <use href="#pencil-square"></use>
                </svg>
                <buttom className="text-sm">افزودن آدرس جدید</buttom>
              </div>
            </div>
          ) : (
            <>
              <div className="  flex flex-col sm:flex-row items-center justify-betweeen gap-2 sm:gap-5 pr-5 pl-5">
                <div className="flex w-full  relative mt-2 mb-2 p-3 bg-white w-full p-2">
                  <svg className="absolute left-2 w-4 h-4 sm:w-7 sm:h-7">
                    <use href="#funnel"></use>
                  </svg>
                  <input
                    className="w-full text-xs sm:text-base focus:outline-0"
                    type="text"
                    placeholder={` جستوجوی نام شهر در استان ${titleCapital} ...`}
                  />
                </div>
                <select
                  onChange={(e) => {
                    selectChangeHandler(e)
                    changeOnsTitleFilter(e)
                  }}
                  className="w-full sm:w-[90px] h-10 text-xs p-3 flex items-center justify-center shadow-md  & > *:w-full & > *:p-3  rounded-md top-14 left-0 bg-white  & > *:hover:bg-slate-100 "
                >
                  <option value="-1">لطفا شهر مورد نظر را انتخاب کنید</option>
                  {allCitis.map((item) =>

                    item.DataAllCities.map((capital) => (
                      <OptionsSelect
                        key={capital.id}
                        {...capital}

                      />
                    ))
                  )}
                </select>
              </div>
              <div
                ref={WrapperForLoader}
                className="bg-white w-full mx-auto mx-h-[200px] overflow-auto"
              >
                {!mainCitis.length ? (
                  <div className="m-auto w-[90%] h-12 flex items-center justify-center bg-red-600 font-bold rounded-md text-white">
                    <span className="text-sm">
                      هنوز استانتان را وارد نکرده اید 🙁{" "}
                    </span>
                  </div>
                ) : (
                  <>
                    <div
                      ref={loaderSearchSelectBox}
                      className="hidden w-full h-[10rem] justify-center items-center"
                    >
                      <span className="Loader-searchTopBar"></span>
                    </div>
                    <ul className="w-full h-full & > *:flex & > *:gap-1  & > *:items-center & > *:p-3 & > *:sm:p-5 & > *:cursor-pointer & > *:hover:bg-slate-300 ">
                      {mainCitis.map(
                        (item) =>
                          item.cities.map((city) => (
                            <CitySelectBoxes {...city} />
                          ))


                      )}
                    </ul>
                  </>
                )}
              </div>
            </>
          )}
        </div>
        {isShowLayer ? (
          <div
            onClick={() => {
              closeBoxesSelectedDetailsCity();
              setIsShowLayer(false);
              setIsShowModalDetailsAddreasUser(false);
            }}
            className="fixed w-full h-full bg-black/20  top-0 z-10"
          ></div>
        ) : null}
      </>
    </div>
  );
}
