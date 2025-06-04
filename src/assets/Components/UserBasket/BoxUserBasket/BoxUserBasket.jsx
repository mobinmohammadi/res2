import React, { useEffect, useRef, useState } from "react";

export default function BoxUserBasket({ arrayUserBasket ,
setArrayUserBasket, CalculatorUserBasket,addToBasketUser , item ,menu , setIdProductInBasket , deleteFoodInUserBasket }) {
  const [count, setCount] = useState(0);

  // وضعیت لودر برای دکمه "افزودن به سبد خرید"
  const [isStyleLoader, setIsStyleLoader] = useState(false);

  // // سبد خرید که از localStorage بارگذاری میشه (اولین بار)
  // const [arrayUserBasket, setArrayUserBasket] = useState(() => {
  //   const stored = localStorage.getItem("basket");
  //   return stored ? JSON.parse(stored) : [];
  // });



  // آپدیت کردن سبد خرید هم در localStorage و هم در state
  const updateLocalStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
    setArrayUserBasket(basket);
  };

  // افزایش تعداد یک محصول خاص در سبد خرید
  const increaseCount = (product) => {
    // console.log(arrayUserBasket);
    
    
    const updatedBasket = [...arrayUserBasket];
    const item = updatedBasket.find((i) => i.id === product.id)
    console.log(item);
    
    if (item) {
      item.count++;
      updateLocalStorage(updatedBasket);

    //   addToBasketUser(product);
    } else {
      alert("این کالا در سبد خرید وجود ندارد 🙄");
    }
  };

  //================================================

  // کاهش تعداد یک محصول خاص در سبد خرید (یا حذف کامل اگه تعداد بشه ۰)
  const decreaseCount = (product) => {
    const updatedBasket = [...arrayUserBasket];
    const index = updatedBasket.findIndex((i) => i.id === product.id);

    if (index !== -1) {
      if (updatedBasket[index].count > 1) {
        updatedBasket[index].count--; // کاهش یک عدد
      } else {
        const confirmDelete = window.confirm(
          "آیا مطمئنی که می‌خوای این آیتم رو حذف کنی؟"
        );
        if (confirmDelete) {
          updatedBasket.splice(index, 1); // حذف کامل محصول از سبد
          window.location.reload();
          addToBasketUser(product);
        }
      }
      updateLocalStorage(updatedBasket);
    } else {
      alert("این کالا در سبد خرید وجود ندارد 🙄");
    }
  };



  // خروجی رندر کامپوننت

  //  ================== Clear Count ===========================

  const getProductCount = (id) => {
    const item = arrayUserBasket.find((p) => p.id == id);
    return item ? item.count : 1;
  };

  // ============================================================

  // ====================================================================
  const wrapperDeleteBtn = useRef();
  const wrapperFoods = useRef();
  const btnDeleteFood = useRef();
  const LoaderDeleteFood = useRef();

  function styleAndDeletOnFoods(e, itemID) {
    console.log(e.parentElement);

    setTimeout(() => {
      deleteFoodInUserBasket(itemID);
    }, 1000);
  }

  useEffect(() => {
    console.log(item);
  }, []);
  return (
    <div
      ref={wrapperFoods}
      className="mt-3 flex gap-2 border-b-1 border-[#dddddd] pb-3"
    >
      <div key={item.id} className="flex justify-between w-full gap-2">
        <img
          className="w-30 h-20 object-cover rounded-sm"
          src={item.image_url}
          alt=""
        />
        <div className="flex justify-around flex-col">
          <span className="text-xs leading-4 max-w-[5em] max-h-[1em]">
            {item.name}
          </span>
          <div className="text-xs flex gap-1">
            <span>{item.price.toLocaleString()}</span>
            <span>تومان</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-around ">
          <div className="flex items-center gap-1">
            <svg
              onClick={() => decreaseCount(item)}
              //   ref={minusIcon}
              className="cursor-pointer text-[#ef4123] w-6 h-6"
            >
              <use href="#minus-circle" />
            </svg>
            <span>{getProductCount(item.id)}</span>
            <svg
              // ref={svgUserBasket}
              onClick={() => increaseCount(item)}
              className="cursor-pointer text-[#ef4123] w-6 h-6"
            >
              <use href="#plus-circle" />
            </svg>
          </div>
          <div
            ref={wrapperDeleteBtn}
            onClick={(e) => styleAndDeletOnFoods(e, item.id)}
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
              onClick={() => setIdProductInBasket(item.id)}
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
