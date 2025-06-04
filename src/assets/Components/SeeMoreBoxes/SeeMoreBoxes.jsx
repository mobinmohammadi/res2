import React, { useState } from "react";

export default function SeeMoreBoxes() {
  const [isShowMore, setIsShowMore] = useState(false);

  const handleMore = () => {
    setIsShowMore(true);
    setTimeout(() => {
      setIsShowMore(false);
    }, 2000);
  };

  return (
    // <svg className="w-5 h-5 text-white bg-red-600">
    //   <use href="#refresh-2"></use>
    // </svg>
    isShowMore ? (
      <div className="flex items-center justify-center pb-5 pt-5 ">
        <div
          onClick={() => handleMore()}
          className={`w-48  gap-2 cursor-pointer text-white bg-slate-400
          } rounded-[4px] flex justify-center items-center pt-2 pb-2 pl-6 pr-6`}
        >
          <span className="text-xs sm:text-sm">مشاهده بیشتر</span>
          {isShowMore ? (
            <svg className="w-6 h-6 animate-spin  animate-reverse">
              <use href="#refresh"></use>
            </svg>
          ) : (
            ""
          )}
        </div>
      </div>
    ) : (
      <div className="flex items-center justify-center pb-5 pt-5 ">
        <div
          onClick={() => handleMore()}
          className={`w-48  gap-2 cursor-pointer text-white ${
             "bg-green-600"
          } rounded-[4px] flex justify-center items-center pt-2 pb-2 pl-6 pr-6`}
        >
          <span className="text-xs sm:text-sm">مشاهده بیشتر</span>
          {isShowMore ? (
            <svg className="w-6 h-6 animate-spin  animate-reverse">
              <use href="#refresh"></use>
            </svg>
          ) : (
            ""
          )}
        </div>
      </div>
    )
  );
}
