import React, { useEffect, useRef, useState } from "react";
import MoreFoodsBoxes from "../../MoreFoodsRestorant/MoreFoodsBoxes/MoreFoodsBoxes";
import categuryTitleFoods from "./../../../../Data.js";
import SliderTitleFoods from "../../../Components/SinglePageRestorant/SliderTitleFoods/SliderTitleFoods";

export default function SinglePageRestorantMenu({
  searchInMenuRestorant,
  handleMenuSingleRestoranst,
  dataSingleResturants,
  arrayUserBasket,
  setArrayUserBasket,
  addToBasketUser,
  idProductInBasket

  
}) {



  const [menusResturants, setMenusResturants] = useState([]);
  const dataSingleResturantsMenus = dataSingleResturants.menu;
  // useEffect(() => {
  //   fetch(`${BaseUrl}/restaurants`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setMenusResturants(result);
  //     });
  // }, []);



    // ====================================================================
    const [mainCategury, setMainCategury] = useState("ساندویچ حرفه ای");
  
    // ====================================================================
    // ========================================================= ===========
  
    const [isActiveCateguryFoods, setIsActiveCateguryFoods] = useState(false);
  
    const wrapperCateguryFoods = useRef(null);
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 450) {
        setIsActiveCateguryFoods(true)
      }
      else{
        setIsActiveCateguryFoods(false)
      }
      // else {
      //   console.log("");
  
      // }
    });
  
    // ====================================================================
  return (
      <div className="flex container-custom pb-5 flex-col items-center">
         <div
                className={` ${
                  isActiveCateguryFoods ? "opacity-100 visible z-20  top-12 sm:top-14 fixed flex transition-all" : "opacity-0 invisible hidden "
                } w-full shadow-2xs`}
              >
                <div className=" flex w-full border-solid shadow-2xl    items-center justify-center pt-3 bg-white">
                  <div className="  mx-auto flex items-center  overflow-x-scroll hide-scrollbar justify-center gap-14">
                    {categuryTitleFoods.categuryTitleFoods.map((item) => (
                      <div className="">
                        <SliderTitleFoods
                          mainCategury={mainCategury}
                          setMainCategury={setMainCategury}
                          item={item}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
        <div className="flex w-full relative mr-4 ml-4 xs:mr-12 xs:ml-12  items-center pt-2 pb-2 pr-2 rounded-sm mt-5 mb-5 bg-white">
          <input
            // value={valueForSearch}
            onChange={(e) => handleMenuSingleRestoranst(e)}
            className="border-0 w-full outline-0"
            type="text"
            placeholder="جستوجو در منو ..."
          />
          <svg className="cursor-pointer absolute  left-3 w-5 h-5">
            <use href="#magnifying-glass"></use>
          </svg>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2   xl:grid-cols-3 w-[90%]  gap-3">
          <div className="relative mt-5 mb-5">
            <span className="mr-2">لیست غذا ها</span>
            <span className="absolute w-4.5 h-4.5 bg-sky-800 -right-4 rounded-sm"></span>
          </div> 
          
          {searchInMenuRestorant.length
            ? searchInMenuRestorant.map((menu, index) => (
                <div key={index + 1} className="">
                  <MoreFoodsBoxes idProductInBasket={idProductInBasket} arrayUserBasket={arrayUserBasket} addToBasketUser={addToBasketUser} setArrayUserBasket={setArrayUserBasket} menu={menu} />
                </div>
              ))
            : dataSingleResturantsMenus?.map((menu, index) => (
                <div key={index + 1} className="">
                  <MoreFoodsBoxes dataSingleResturantsMenus={dataSingleResturantsMenus} idProductInBasket={idProductInBasket} arrayUserBasket={arrayUserBasket} addToBasketUser={addToBasketUser} setArrayUserBasket={setArrayUserBasket}  menu={menu} />
                </div>
              ))}
        </div>
      </div>
  );
}
