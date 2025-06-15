import React from "react";

export default function PreFooter() {
  return (
    <div className=" bg-white container-footer_and__topBar pt-14 pb-5 border-t-2 border-t-slate-500">
      <div className="container-custom flex flex-col gap-12">
        <div className="flex flex-col text-center gap-10  items-center ">
          <span className="text-zinc-800 font-bold text-xl leading-8 max-w-[310px] sm:max-w-max sm:text-3xl ">
            سفارش آنلاین غذا از بهترین رستوران‌‌ها و فست‌فود‌‌ها در قم
          </span>
          <span className="text-sm sm:text-base text-zinc-700 max-w-[850px]">
            با استفاده از وبسایت و اپلیکیشن سفارش آنلاین غذای رازینه شما میتونید
            به راحتی و در سریع ترین زمان ممکن غذای مورد علاقه‌ی خودتون رو از
            بهترین رستوران‌ها و فست فود‌های تهران، قم، کرج، گرگان، یزد، ارومیه و
            سایر شهرهای ایران سفارش بدین.
          </span>
        </div>
        <div className="flex gap-10 items-center flex-col sm:flex-row">
          <div className="sm:w-full flex flex-col justify-center items-center  sm:flex-row gap-5 sm:gap-0">
            <div className="& > *:w-35 flex ">
              <img src="./../images/PreeFooterImage/logo -eNamad.png" alt="" />
              <img src="./../images/PreeFooterImage/logo-kasbokar.png" alt="" />
            </div>
            <img
              className="w-35"
              src="./../images/PreeFooterImage/logo.png"
              alt=""
            />
          </div>

          <span className="text-slate-500 text-center sm:text-right text-xs sm:text-sm leading-6">
            تمامی کالاها و خدمات این سایت، دارای مجوزهای لازم از مراجع مربوطه
            می‌باشند و فعالیت‌های این سایت تابع قوانین و مقررات جمهوری اسلامی
            ایران است.
          </span>
        </div>
      </div>
    </div>
  );
}
