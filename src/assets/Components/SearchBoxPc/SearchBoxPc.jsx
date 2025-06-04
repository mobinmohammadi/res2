import React, { useEffect, useState } from "react";
export default function SearchBoxPc() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  


  const [isShowModalSearch, setIsShowModalSearch] = useState(false);
  const [isShowLoading, setIsShowLoading] = useState(false);
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [allRestorants, setAllRestorants] = useState([]);
  let [resultSearch, setResultSearch] = useState([]);

  // useEffect(() => {
  //   fetch(`${baseUrl}/restaurants`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setAllRestorants(result);
  //     });
  // }, []);

  setTimeout(() => {
    setIsShowLoading(false);
  }, 2000);

  const handleSearchBoxs = (e) => {
    setInputSearchValue(e.target.value);

    if (inputSearchValue.length == 0) {
      setIsShowModalSearch(false);
    } else {
      resultSearch = allRestorants.filter((resturan) =>
        resturan.name.includes(inputSearchValue)
      );
      setResultSearch(resultSearch);
      setIsShowModalSearch(true);
      setIsShowLoading(true);
    }
  };

  return (
    <>
      <svg className="hidden">
        <symbol
          id="chevron-left"
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
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </symbol>

        <symbol
          id="refresh"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth="1.2"
          stroke="currentColor"
        >
          <path
            d="M14.55 21.67C18.84 20.54 22 16.64 22 12C22 6.48 17.56 2 12 2C5.33 2 2 7.56 2 7.56M2 7.56V3M2 7.56H4.01H6.44"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M2 12C2 17.52 6.48 22 12 22"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="3 3"
          ></path>
        </symbol>
        <symbol
          id="magnifying-glass"
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
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </symbol>
      </svg>
      <div className="container-custom">
        <div className="flex w-[100%] flex-col relative">
          <div className="mt-3 sm:mt-5  flex gap-5  justify-center h-10 sm:h-15">
            <div className="relative w-full">
              <div className="relative bg h-full  shadow-md text-zinc-700 rounded-md overflow-hidden ">
                <svg className="w-5 h-5 sm:w-7 sm:h-7 absolute left-3 top-3 sm:top-4 ">
                  <use href="#magnifying-glass"></use>
                </svg>
                <input
                  className="bg-white w-full text-sm sm:text-base focus:outline-0 pr-4  font-bold h-full"
                  type="text"
                  value={inputSearchValue}
                  onChange={(e) => handleSearchBoxs(e)}
                  placeholder="جستوجو رستوران یا غذا ... "
                />
              </div>
              {inputSearchValue.length >= 1 ? (
                <div
                  className={`absolute z-10 p-5 rounded-2xl top-[120%] ${
                    inputSearchValue.length && isShowLoading
                      ? "flex justify-center"
                      : ""
                  } w-full  bg-white text-zinc-700 md:text-xl`}
                >
                  <div className="flex items-center rounded-b-2xl ">
                    {inputSearchValue.length <= 4 ? (
                      <span className="flex  items-center justify-center text-center text-xs sm:text-base font-bold">
                        حداقل باید 4 کاراکتر وارد نمایید 🙂
                      </span>
                    ) : (
                      ""
                    )}
                    {inputSearchValue.length > 4 && isShowLoading ? (
                      <div className="flex w-full h-[2rem] sm:h-[4rem] items-center justify-center">
                        <svg className="w-10 h-10 sm:w-14 text-green-400 sm:h-14  animate-spin animate-reverse">
                          <use href="#refresh"></use>
                        </svg>
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="flex flex-col w-full justify-center gap-5 shadow-2xl p-5 rounded-md">
                      {inputSearchValue.length > 4 && !isShowLoading
                        ? resultSearch.slice(0, 3).map((items) => (
                            <>
                              <a
                                href={`/restorant/${items.id}`}
                                className="flex flex-col w-full gap-5 & > *:border-b-1 & > *:pb-2 & > *:sm:pb-5 & > *:rounded-xl & > *:sm:pr-5 & > *:sm:pl-5 & > *:pr-2 & > *:pl-2"
                              >
                                <div className="flex justify-between items-center w-full">
                                  <div className="flex gap-1 items-center flex-col  ">
                                    <img
                                      className="w-42 rounded-sm"
                                      src={items.image}
                                      alt=""
                                    />{" "}
                                    <span className="text-xs sm:text-sm">
                                      {items.name}
                                    </span>
                                    <div className="flex gap-1">
                                      <span className="text-xs sm:text-sm">
                                        250/000
                                      </span>
                                      <span className="text-xs sm:text-sm">
                                        تومان
                                      </span>
                                    </div>
                                  </div>
                                  <div className="w-5 sm:w-8 cursor-pointer bg-teal-800 h-5 sm:h-8 rounded-full flex justify-center items-center text-white">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5">
                                      <use href="#chevron-left"></use>
                                    </svg>
                                  </div>
                                </div>
                              </a>
                          
                            </>
                          ))

                        : null}
                        {resultSearch.length >= 3 ? (    <div className="bg-green-500 flex justify-center p-2 rounded-md text-white cursor-pointer ">
                                مشاهده کل نتیجه یافت شده{" "}
                              </div>) : null}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
