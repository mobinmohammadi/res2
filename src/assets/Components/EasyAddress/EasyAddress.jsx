import React, { useCallback, useState, useMemo } from "react";
import CitySelectBoxes from "../CitySelectBoxes/CitySelectBoxes";
import OptionsSelect from "../OptionsSelect/OptionsSelect";
import DataAllCities from "../../../Data.js";

export default function EasyAddress({ city }) {
  const [activeTab, setActiveTab] = useState("neighborhood");
  const [isLayerVisible, setIsLayerVisible] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState("ایران");
  const [selectedProvinceName, setSelectedProvinceName] = useState("");
  const [provinceCities, setProvinceCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showBox, setShowBox] = useState(false);

  const provinces = useMemo(() => DataAllCities.DataAllCities, []);

  const openSelectionBox = useCallback(() => {
    setShowBox(true);
    setIsLayerVisible(true);
  }, []);

  const closeSelectionBox = useCallback(() => {
    setShowBox(false);
    setIsLayerVisible(false);
  }, []);

  const handleProvinceChange = useCallback(async (e) => {
    const selected = e.target.value;
    const matched = provinces.find((item) => item.fenglish === selected);

    if (matched) {
      setSelectedProvinceName(matched.capital);
    }

    setSelectedProvince(selected);
    setProvinceCities([]);

    if (selected === "-1") return;

    setLoading(true);
    await new Promise((res) => setTimeout(res, 800)); // mock API delay

    const result = provinces.filter((item) => item.fenglish === selected);
    setProvinceCities(result);
    setLoading(false);
  }, [provinces]);

  return (
    <div className="relative flex pt-3   pb-3 sm:pt-5 sm:pb-5 text-2xl gap-1 items-center justify-center">
      <div className="flex pb-1 text-xs sm:text-2xl items-center justify-center gap-1">
        <svg className="w-4 h-4 sm:w-8 sm:h-8">
          <use href="#map-pin" />
        </svg>
        <span>
          در محدوده {selectedProvinceName.length ? selectedProvinceName : city}
        </span>
        <div
          onClick={openSelectionBox}
          className="flex Dana-bold hover:border-b text-red-500 items-center cursor-pointer gap-1 justify-center"
        >
          <span className="leading-8 text-md">{selectedProvinceName}</span>
          <svg className="w-5 h-5">
            <use href="#chevron-down" />
          </svg>
        </div>
      </div>

      {showBox && (
        <div
          className={`absolute w-[20rem] sm:w-[40rem] rounded-lg gap-2 z-20 top-[78px] bg-slate-100 flex flex-col ${
            activeTab === "neighborhood" ? "h-[600px]" : "sm:h-[200px]"
          }`}
        >
          <div className="morabba" />
          <div className="flex justify-between items-center bg-white pt-3 pr-4 pl-4 pb-5">
            <div
              onClick={() => setActiveTab("neighborhood")}
              className="w-[50%] flex justify-center cursor-pointer"
            >
              <span
                className={`w-full flex text-xs sm:text-base justify-center pb-3 ${
                  activeTab === "neighborhood" ? "active-addeares" : ""
                }`}
              >
                انتخاب شهر و استان
              </span>
            </div>
            <div
              onClick={() => setActiveTab("my-addresses")}
              className="w-[50%] flex justify-center cursor-pointer"
            >
              <span
                className={`w-full pb-3 text-xs sm:text-base flex justify-center ${
                  activeTab === "my-addresses" ? "active-addeares" : ""
                }`}
              >
                آدرس‌های من
              </span>
            </div>
          </div>

          {activeTab === "my-addresses" ? (
            <div className="bg-white flex items-center justify-center flex-col gap-5 p-5">
              <span className="text-[#686b73] leading-7 text-base font-bold">
                شما هنوز آدرسی وارد نکرده‌اید 😥
              </span>
              <div className="hover:bg-[#ef4123] hover:text-white cursor-pointer transition-all text-[#f15f46] flex items-center justify-center gap-2 pt-1 pb-1 pr-4 pl-4 rounded-lg border border-[#ef4123]">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mb-1">
                  <use href="#pencil-square" />
                </svg>
                <button className="text-sm">افزودن آدرس جدید</button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-5 pr-5 pl-5">
                <div className="flex w-full relative mt-2 mb-2 p-3 bg-white">
                  <svg className="absolute left-2 w-4 h-4 sm:w-7 sm:h-7">
                    <use href="#funnel" />
                  </svg>
                  <input
                    className="w-full text-xs sm:text-base focus:outline-0"
                    type="text"
                    placeholder={`جستجوی نام شهر در استان ${selectedProvinceName} ...`}
                  />
                </div>
                <select
                  onChange={handleProvinceChange}
                  className="w-full sm:w-[90px] h-10 text-xs p-3 flex items-center justify-center shadow-md rounded-md bg-white"
                >
                  <option value="-1">لطفا استان را انتخاب کنید</option>
                  {provinces.map((province) => (
                    <OptionsSelect key={province.id} {...province} />
                  ))}
                </select>
              </div>

              <div className="bg-white w-full mx-auto h-full overflow-auto">
                {loading ? (
                  <div className="w-full h-full flex justify-center items-center">
                    <span className="Loader-searchTopBar" />
                  </div>
                ) : !provinceCities.length ? (
                  <div className="m-auto w-[90%] h-12 flex items-center justify-center bg-red-600 font-bold rounded-md text-white">
                    <span className="text-sm">
                      هنوز استانی را وارد نکرده‌اید 🙁
                    </span>
                  </div>
                ) : (
                  <ul className="w-full flex flex-col gap-5 pt-4 pr-1 h-full">
                    {provinceCities.map((item) =>
                      item.cities.map((city) => (
                        <CitySelectBoxes key={city.id} {...city} />
                      ))
                    )}
                  </ul>
                )}
              </div>
            </>
          )}
        </div>
      )}

      {isLayerVisible && (
        <div
          onClick={closeSelectionBox}
          className="fixed w-full h-full bg-black/20 top-0 z-10"
        ></div>
      )}
    </div>
  );
}
