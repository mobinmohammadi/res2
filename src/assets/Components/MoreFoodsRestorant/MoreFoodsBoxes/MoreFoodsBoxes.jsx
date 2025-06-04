// ایمپورت کتابخانه‌های مورد نیاز
import React, { useEffect, useRef, useState } from "react";
import { useCartContext } from "../../Context/Context";

// تعریف کامپوننت MoreFoodsBoxes
const MoreFoodsBoxes = ({
  menu,
  addToBasketUser,
  idProductInBasket,
  dataSingleResturantsMenus,

}) => {
  // تعداد فعلی محصول در سبد خرید (صرفاً برای نمایش داخلی، البته خیلی استفاده نشده)
  const [count, setCount] = useState(0);

  // وضعیت لودر برای دکمه "افزودن به سبد خرید"
  const [isStyleLoader, setIsStyleLoader] = useState(false);

  // سبد خرید که از localStorage بارگذاری میشه (اولین بار)
  const [arrayUserBasket, setArrayUserBasket] = useState(() => {
    const stored = localStorage.getItem("basket");
    return stored ? JSON.parse(stored) : [];
  });

  // ارجاع‌ها (برای دسترسی مستقیم به DOM در صورت نیاز، اینجا فعلاً استفاده زیادی نداره)
  const svgUserBasket = useRef();
  const loaderAddTobasket = useRef();
  const minusIcon = useRef();
  const btnAddToBasket = useRef();

  // آپدیت کردن سبد خرید هم در localStorage و هم در state
  const updateLocalStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
    setArrayUserBasket(basket);
  };

  // اضافه کردن محصول به سبد خرید و فعال کردن لودر به مدت ۱ ثانیه
  const handleAddToBasketAndStyle = (menuItem) => {
    const updatedBasket = [...arrayUserBasket];
    const existingItem = updatedBasket.find((item) => item.id === menuItem.id);

    setTimeout(() => {
      if (existingItem) {
        existingItem.count++; // اگر قبلاً بود، فقط تعداد رو زیاد کن
      } else {
        updatedBasket.push({ ...menuItem, count: 1 }); // اگر نبود، اضافه کن با تعداد ۱
        addToBasketUser(menuItem);
      }
    }, 1100);

    updateLocalStorage(updatedBasket); // ذخیره در لوکال استوریج و state
    setIsStyleLoader(true); // نمایش لودر
    setTimeout(() => setIsStyleLoader(false), 1000); // مخفی کردن لودر بعد ۱ ثانیه
  };

  // افزایش تعداد یک محصول خاص در سبد خرید
  const increaseCount = (product) => {
    const updatedBasket = [...arrayUserBasket];
    const item = updatedBasket.find((i) => i.id === product.id);
    if (item) {
      item.count++;
      updateLocalStorage(updatedBasket);
      addToBasketUser(product);
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

  // پیدا کردن محصول فعلی در سبد خرید برای نمایش تعداد فعلی
  const currentProduct = arrayUserBasket.find((p) => p.id === menu.id) || 0;
  const currentCount = currentProduct ? currentProduct.count : 0;

  // خروجی رندر کامپوننت

  //  ================== Clear Count ===========================

  const getProductCount = (id) => {
    const item = arrayUserBasket.find((p) => p.id == id);
    return item ? item.count : 0;
  };

  // ============================================================
  return (
    <div className="flex justify-around 2xs:flex-row text-center 2xs:text-right items-center gap-2 bg-white pt-3 pl-5 2xs:pl-0 pb-3 pr-3 rounded-2xl">
      {/* بخش تصویر و دکمه افزودن */}
      <div className="flex justify-center sm:h-[150px] flex-col items-center">
        <img
          className="w-32 text-center bg-slate-200 items-center sm:w-[180px] sm:h-[120px] sm:object-cover  h-24 2xs:w-40 rounded-2xl"
          src={menu.image_url}
          alt="بدون عکس ..."
        />

        {/* دکمه‌های موبایل (فقط در موبایل یا نمایش کوچیک دیده میشه) */}
        <div className="flex sm:hidden justify-center gap-1 items-center pt-2">
          {currentCount > 0 ? (
            <div className="bg-green-600 max-w-[125px] rounded-sm text-white pr-2 pl-2">
              <span className="text-xs  overflow-hidden">
                به سبد خرید اضافه شد{" "}
              </span>
            </div>
          ) : (
            <div className="hover:bg-[#ef5c4d] w-28 flex justify-center hover:text-white text-[#ef5c4d] border border-[#ef5c4d] rounded-xl pt-1 pb-1 px-2">
              <div
                ref={loaderAddTobasket}
                className={`${
                  isStyleLoader ? "block" : "hidden"
                } loader-addBasket`}
              ></div>
              {!isStyleLoader && (
                <button
                  ref={btnAddToBasket}
                  type="button"
                  onClick={() => handleAddToBasketAndStyle(menu)}
                  className="text-x cursor-pointer"
                >
                  افزودن به سبد خرید
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex 2xs:pl-5 2xs:pr-2 items-center sm:justify-between flex-col gap-2 2xs:items-start">
        <div className="flex gap-1 flex-col">
          <span className="text-sm 2xs:text-md text-right font-bold">
            {menu.name}
          </span>
          <span className="text-xs text-right w-[130px] 2xs:w-full text-[#888993]">
            سینه مرغ گریل شده، قارچ، ذرت، فلفل دلمه
          </span>
        </div>
        <div className="flex  flex-col gap-2 sm:gap-5">
          <div className="text-[#ef4123] mt-[5px] text-xs flex gap-[2px]">
            <span>قیمت از</span>
            <span>{menu.price}</span>
            <span>تومان</span>
          </div>
          <div className="sm:flex hidden justify-center gap-1 items-center">
            {currentCount > 0 ? (
              <div className="bg-green-600 max-w-[145px] rounded-sm text-white pr-2 pl-2">
                <span className="text-xs  overflow-hidden">
                  به سبد خرید اضافه شد ✅
                </span>
              </div>
            ) : (
              <div className="hover:bg-[#ef5c4d] w-28 flex justify-center hover:text-white text-[#ef5c4d] border border-[#ef5c4d] rounded-xl pt-1 pb-1 px-2">
                <div
                  ref={loaderAddTobasket}
                  className={`${
                    isStyleLoader ? "block" : "hidden"
                  } loader-addBasket`}
                ></div>
                {!isStyleLoader && (
                  <button
                    ref={btnAddToBasket}
                    type="button"
                    onClick={() => handleAddToBasketAndStyle(menu)}
                    className="text-x cursor-pointer"
                  >
                    افزودن به سبد خرید
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreFoodsBoxes;
