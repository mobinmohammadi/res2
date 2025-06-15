import React, { useContext, useEffect, useRef, useState } from "react";
import "./UserBasket.css";
import { CartContext } from "../../Context/BasketContext";
import BoxUserBasket from "./BoxUserBasket/BoxUserBasket";
export default function UserBasket({ isShowUserBasket, cancelAction }) {
  const wrapperUserBasket = useRef(null);

  // ===========  Style Wrapper User Basket  ===========================

  const { cart, addToBasketUser, removeInToBasketUser, allPriceProdcuts } =
    useContext(CartContext);

  function styleWrapperUserBasket() {
    if (cart?.length > 4) {
      wrapperUserBasket.current.classList.add("h-[450px]", "overflow-y-scroll");
    } else {
      wrapperUserBasket.current.classList.remove("h-[450px]");
    }
  }
  useEffect(() => {
    styleWrapperUserBasket();
  }, [cart]);

  return (
    <>
      <div
        className={`userBasket -left-[300px] pb-[5rem] 2xs:pb-0 ${
          isShowUserBasket ? "opened-UserBasket" : ""
        } pt-3 transition-all flex flex-col justify-between pr-3 pl-3 pb-2 w-[300px] fixed top-0  z-50 h-[100vh] bg-white`}
      >
        <div>
          <div className="flex border-b-2  pb-[17px] border-[#dddddd] items-center justify-between text-zinc-700">
            <span className="text-sm font-bold">سبد خرید من</span>
            <svg
              onClick={() => cancelAction()}
              className="w-5 h-5 close-User__basket cursor-pointer"
            >
              <use href="#x-mark"></use>
            </svg>
          </div>
          <div ref={wrapperUserBasket} className="flex flex-col mt-3 gap-3">
            {cart.length ? (
              <span className="bg-amber-500 text-white text-sm w-full block text-center pt-2 pb-2 rounded-sm mt-2">
                {cart.length} عدد غذا در لیست خرید شما موجود است
              </span>
            ) : null}
            {cart.length ? (
              cart.map((foods) => <BoxUserBasket foods={foods} />)
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <img
                  className="w-44 "
                  src="./../images/basket/notF.png"
                  alt=""
                />
                <span>سبد خرید شما خالی میباشد</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-5 flex-col">
          {cart.length ? (
            <>
              <div className="flex gap-6 pt-3">
                <div className="flex gap-1 items-center">
                  <svg className="w-5 h-5">
                    <use href="#banknotes"></use>
                  </svg>
                  <span className="text-sm">مجموع هزینه:</span>
                </div>
                <div className="flex text-sm items-center gap-1">
                  {cart.length > 0 && (
                    <div className="flex gap-1 ">
                      <span>{allPriceProdcuts.toLocaleString()}</span>
                      <span>تومان</span>
                    </div>
                  )}
                </div>
              </div>
              <button className="cursor-pointer bg-[#2EC4B6] text-white flex gap-1 w-full items-center justify-center p-3 rounded-xl">
                <span className="">تسویه حساب</span>
                <svg className="w-5 h-5">
                  <use href="#arrow-left"></use>
                </svg>
              </button>
            </>
          ) : (
            <>
              <button className="cursor-pointer bg-slate-400 text-white flex gap-1 w-full items-center justify-center p-3 rounded-xl">
                <span className="">سبد خرید خالی 🙄</span>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
