import { useFormik } from "formik";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";

export default function FooterMobile() {
  const formik = useFormik({
    validationSchema: Yup.object({
      email: Yup.string()
        .email("ایمیل معتبر نیست 💔")
        .required("لطفا فیلد ایمیل را پر کنید ☹"),
    }),
    initialValues: {
      email: "",
    },
    onSubmit(values) {
      toast.success("ایمیل با موفقیت ارسال شد!")
      formik.values.email = ""
      setTimeout(() => {
        
        location.reload()
      }, 2000);
    },
  });
  return (
    <div className="bg-[#283646] shadow-2xl flex flex-col relative w-full  pt-5 pr-3 pl-3 pb-5 justify-between items-center">
      <div className="flex flex-col pb-5 items-center sm:items-start pr-4 pl-4 sm:flex-row text-center gap-3 justify-between w-full & > *:text-white/90">
        <div className="border-b-1 sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0 border-slate-200 sm:border-0 border-solid">
          <span className="text-[#0d99ff] text-xs sm:text-base">
            پر بازدید ترین رستوران ها
          </span>
          <ul className="flex & > *:cursor-pointer text-center sm:text-right flex-col gap-1  text-xs mt-5  sm:text-sm">
            <li>رستوران محمدی</li>
            <li>رستوران رسولی</li>
            <li>رستوران تهرونی</li>
            <li>رستوران محلی</li>
            <li>رستوران روژان</li>
            <li>رستوران نیلا</li>
          </ul>
        </div>
        <div className="border-b-1 sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0 border-slate-200 sm:border-0 border-solid">
          <span className="text-[#0d99ff] text-sm sm:text-base">
            بهترین غذا های ما
          </span>
          <ul className="flex  flex-col gap-1 text-center sm:text-right  text-xs mt-5  sm:text-sm">
            <li>چلو مرغ</li>
            <li>کوبیده</li>
            <li>ساندویچ ویژه</li>
            <li>پاستا</li>
            <li>لوبیا پلو</li>
            <li>ماهی شکم پر</li>
          </ul>
        </div>
        <div className="flex items-center sm:items-start  flex-col">
          <div className="flex gap-1 items-center">
            <svg className="w-5 h-5 text-green-500">
              <use href="#map"></use>
            </svg>
            <span className="text-[#0d99ff] text-sm sm:text-base">
              آدرس شرکت ما
            </span>
          </div>
          <div className="">
            <div className="flex gap-0.5 text-xs mt-5 items-center sm:text-sm">
              <svg className="w-5 h-5">
                <use href="#map-pin"></use>
              </svg>
              <span className="mt-1">آذربایجان غربی-ارمیه-پاساژ فردوس</span>
            </div>
            <div className="flex gap-0.5 text-xs mt-5 items-center sm:text-sm">
              <svg className="w-5 h-5">
                <use href="#device-phone-mobile"></use>
              </svg>
              <span className="mt-1">شماره تماس : 09036945119</span>
            </div>
            <div className="flex gap-0.5 text-xs mt-5 items-center sm:text-sm">
              <svg className="w-5 h-5">
                <use href="#envelope"></use>
              </svg>
              <span className="mt-1">ایمیل : mobyn3223@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-1 border-solid pb-3   border-t-slate-200 w-full items-center sm:items-start flex  flex-col pt-5">
        <span className="text-[#0d99ff]  text-xs sm:text-sm">
          عضویت در خبر نامه
        </span>
        <form
          action="#"
          onSubmit={formik.handleSubmit}
          onBlur={formik.handleBlur}
          className="flex flex-col  mt-5 gap-3 w-[80%] pb-3 "
        >
          <div className="">
            <input
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              type="text"
              className="pt-2 text-white text-xs w-full pb-2 pr-1 rounded-sm bg-[#4f5a68] outline-0 "
              placeholder="ایمیل شما ...."
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="text-white bg-red-700 w-full text-xs rounded-sm pt-1 pb-1 text-center">
                <span className="">{formik.errors.email}</span>
              </div>
            ) : null}
          </div>
          <div className="text-xs ">
            {formik.errors.email && formik.touched.email ? (
              <span className="cursor-pointer bg-slate-500 text-xs sm:text-sm pt-1 pb-1 pr-3.5 w-20 float-end  text-white rounded-sm">
                ثبت ایمیل
              </span>
            ) : (
              <button
              type="submit"
                className={`cursor-pointer bg-[#3a86ff] ّtext-xs sm:text-sm pt-1 pb-1 w-20 float-end  text-white rounded-sm`}
              >
                ثبت ایمیل
              </button>
            )}
          </div>
        </form>
      </div>
      <div className="w-full  bottom-6 h-1 border-t-1 text-center flex items-center justify-center gap-2 border-t-slate-200  border-solid pt-8">
        <span className="text-white text-xs">توسعه داده شده توسط </span>
        <span className="text-green-600 text-xs">Mobin Rc ❤️</span>
      </div>
    </div>
  );
}
