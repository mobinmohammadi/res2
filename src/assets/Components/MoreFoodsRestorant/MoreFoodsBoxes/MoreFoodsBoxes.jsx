// ایمپورت کتابخانه‌های مورد نیاز
import React, { useContext, useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "./../../../Context/BasketContext";

// تعریف کامپوننت MoreFoodsBoxes
const MoreFoodsBoxes = ({ menu }) => {
  const { cart, addToCart } = useContext(CartContext);

  const [isStyleLoader, setIsStyleLoader] = useState(false);

  const [arrayUserBasket, setArrayUserBasket] = useState(() => {
    const stored = localStorage.getItem("basket");
    return stored ? JSON.parse(stored) : [];
  });

  const loaderAddTobasket = useRef();
  const btnAddToBasket = useRef();

  const handlerAddToBasket = (product) => {
    const exist = cart.find((item) => item.id == product.id);
    const currentCount = exist ? exist.count : 0;

    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          addToCart(product);
          resolve(); // همیشه موفقیت‌آمیز برای این مثال
        }, 1000); // فقط برای حالت pending
      }),
      {
        style: {
          fontSize: "5px",
        },
        pending: "در حال افزودن به سبد خرید...",
        success: exist
          ? `1 عدد دیگر اضافه شد  ${currentCount + 1} عدد از همین محصول) `
          : "محصول به سبد خرید اضافه شد ✅",
        error: "افزودن به سبد خرید با خطا مواجه شد ❌",
      }
    );
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
          {/* {currentCount > 0 ? (
            <div className="bg-green-600 max-w-[125px] rounded-sm text-white pr-2 pl-2">
              <span className="text-xs  overflow-hidden">
                به سبد خرید اضافه شد{" "}
              </span>
            </div>
          ) : ( */}
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
                onClick={() => handlerAddToBasket(menu)}
                className="text-x cursor-pointer"
              >
                افزودن به سبد خرید
              </button>
            )}
          </div>
          {/* )} */}
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
            {/* {currentCount > 0 ? (
              <div className="bg-green-600 max-w-[145px] rounded-sm text-white pr-2 pl-2">
                <span className="text-xs  overflow-hidden">
                  به سبد خرید اضافه شد ✅
                </span>
              </div>
            ) : ( */}
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
                  onClick={() => handlerAddToBasket(menu)}
                  className="text-x cursor-pointer"
                >
                  افزودن به سبد خرید
                </button>
              )}
            </div>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreFoodsBoxes;
