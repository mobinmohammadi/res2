import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../../Context/BasketContext";

export default function BoxUserBasket({foods}) {

  const {id , name , price , count} = foods

  const {cart , addToBasketUser  , removeInToBasketUser , decreaseCount , increaseCount} = useContext(CartContext)

  // افزایش تعداد یک محصول خاص در سبد خرید
  // const increaseCount = (product) => {
    
    
  //   const updatedBasket = [...arrayUserBasket];
  //   const item = updatedBasket.find((i) => i.id === product.id)
    
  //   if (item) {
  //     item.count++;
  //     updateLocalStorage(updatedBasket);

  //   } else {
  //     alert("این کالا در سبد خرید وجود ندارد 🙄");
  //   }
  // };

  //================================================

  // const decreaseCount = (product) => {
  //   const updatedBasket = [...arrayUserBasket];
  //   const index = updatedBasket.findIndex((i) => i.id === product.id);

  //   if (index !== -1) {
  //     if (updatedBasket[index].count > 1) {
  //       updatedBasket[index].count--; // کاهش یک عدد
  //     } else {
  //       const confirmDelete = window.confirm(
  //         "آیا مطمئنی که می‌خوای این آیتم رو حذف کنی؟"
  //       );
  //       if (confirmDelete) {
  //         updatedBasket.splice(index, 1); // حذف کامل محصول از سبد
  //         window.location.reload();
  //         addToBasketUser(product);
  //       }
  //     }
  //     updateLocalStorage(updatedBasket);
  //   } else {
  //     alert("این کالا در سبد خرید وجود ندارد 🙄");
  //   }
  // };





  // ====================================================================
  const wrapperDeleteBtn = useRef();
  const wrapperFoods = useRef();
  const btnDeleteFood = useRef();
  const LoaderDeleteFood = useRef();

  function styleAndDeletOnFoods(e, itemID) {

    setTimeout(() => {
      deleteFoodInUserBasket(itemID);
    }, 1000);
  }

  return (
    <div
      ref={wrapperFoods}
      className="mt-3 flex gap-2 border-b-1 border-[#dddddd] pb-3"
    >
      <div key={id} className="flex justify-between w-full gap-2">
        <img
          className="w-30 h-20 object-cover rounded-sm"
          src={``}
          alt="بدون عکس بهتره"
        />
        <div className="flex justify-around flex-col">
          <span className="text-xs leading-4 max-w-[5em] max-h-[1em]">
            {name}
          </span>
          <div className="text-xs flex gap-1">
            <span>{price.toLocaleString()}</span>
            <span>تومان</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-around ">
          <div className="flex items-center gap-1">
            <svg
              onClick={() => decreaseCount(foods)}
                // ref={minusIcon}
              className="cursor-pointer text-[#ef4123] w-6 h-6"
            >
              <use href="#minus-circle" />
            </svg>
            <span>{count}</span>
            <svg
              // ref={svgUserBasket}
              onClick={() => increaseCount(foods)}
              className="cursor-pointer text-[#ef4123] w-6 h-6"
            >
              <use href="#plus-circle" />
            </svg>
          </div>
          <div
            ref={wrapperDeleteBtn}
            // onClick={(e) => styleAndDeletOnFoods(e, item.id)}
            className=" text-sm pt-1 flex items-center justify-center rounded-sm mb-1 cursor-pointer hover:bg-red-700 transition-all pr-3 pl-3 bg-red-500 pb-1 text-white"
          >
            <div
              ref={LoaderDeleteFood}
              className="hidden items-center justify-center"
            >
              <span className="Loader-Basket"></span>
            </div>
            <button
              ref={btnDeleteFood}
              onClick={() => removeInToBasketUser(id)}
              className=" w-full flex cursor-pointer rounded-sm h-full text-white"
            >
              حذف
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
