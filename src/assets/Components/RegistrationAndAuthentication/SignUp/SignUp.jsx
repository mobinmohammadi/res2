import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { toast, ToastContainer } from "react-toastify";

export default function SignUp() {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const styleWrapperSiginUp = useRef(null);
  const styleWrapperSiginUpMobile = useRef(null);
  useLayoutEffect(() => {
    setTimeout(() => {
      styleWrapperSiginUp.current.classList.add(
        "w-[45%]",
        "transition-custom",
        "rounded-r-[10%]"
      );
      styleWrapperSiginUp.current.classList.remove("w-full");
      styleWrapperSiginUpMobile.current.classList.add(
        "opacity-100",
        "z-10",
        "-top-36",
        "transition-custom"
      );
    }, 200);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const newUser = {
        name: values.name,
        email: values.email,
        password: values.password,
        phone_number: values.phone,
        role: "customer",
      };
      console.log(newUser);

      try {
        const response = await fetch(`${baseUrl}/registration`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });

        const data = await response.json();
        console.log(data);
        if (response.status == 201) {
          toast.success("ثبت‌نام با موفقیت انجام شد ✅");
        } else {
          toast.success("خطای ناشناس ♻");
        }
        // else if (!response.ok) {
        //   // اگر خطا از سمت سرور اومده (مثلاً ایمیل تکراری)
        //   const message = data.message || "خطا در ثبت‌نام 😓";
        //   toast.error(message);
        // } else {
        // resetForm();
      } catch (error) {
        if (response.status === 409) {
          const message = data.message || "این کاربر از قبل وجود داشته است 🙁";
          toast.error(message);
        }
        console.error("Fetch error:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="flex relative mt-[50%]   flex-col xs:flex-row mb-16 items-center justify-center w-[90%] xs:w-[95%] rounded-sm mx-auto xs:mt-[8%]">
      <div
        ref={styleWrapperSiginUpMobile}
        className="flex opacity-0 xs:hidden absolute  -top-10 h-36 -z-10 rounded-t-sm pt-5 pb-5 rounded-b-sm bg-sky-600 flex-col w-full gap-5 text-center pr-5  xs:absolute left-0  items-center justify-center  text-white"
      >
        <span className="text-sm sm:text-base tracking-tighter">
          خوش آومدی دوست من ❤
        </span>
        <span className=" text-xs sm:text-sm sm:max-w-[160px] max-w-[140px] leading-5 sm:tracking-normal tracking-tighter">
          آیا در رستوران <span className="text-green-400">رازینه</span> حساب
          کاربری داری 🤔 ؟
        </span>
        <Link
          to="/restorant/Login"
          className="border-white border-solid hover:bg-zinc-700 transition-all border-1 cursor-pointer pr-6 pl-6 sm:pr-10 sm:pl-10 rounded-sm text-xs sm:text-sm pt-1 pb-1"
        >
          ورود
        </Link>
      </div>
      <div className="bg-white  xs:relative w-full xs:w-[440px] sm:w-[640px]   p-5  shadow-2xl">
        <div className="flex items-center flex-col w-full xs:w-[50%]  gap-10 justify-center">
          <div className="flex text-center flex-col">
            <span className="font-bold pb-2">ثبت نام</span>
            <div className="flex gap-1 & > *:rounded-full ">
              <div className="">
                <svg className="p-2 sm:w-11 sm:h-8 w-10 h-8 bg-blue-500 rounded-full">
                  <use href="#twitter"></use>
                </svg>
              </div>
              <div className="">
                <svg className="p-2 sm:w-11 sm:h-8 w-10 h-8 bg-sky-700   rounded-full">
                  <use href="#telegram"></use>
                </svg>
              </div>
              <div className="">
                <svg className="p-2 sm:w-11 sm:h-8 w-10 h-8 bg-red-700 rounded-full">
                  <use href="#instagram"></use>
                </svg>
              </div>
              <div className="">
                <svg className="p-2 sm:w-11 sm:h-8 w-10 h-8 bg-blue-500 rounded-full">
                  <use href="#whatsapp"></use>
                </svg>
              </div>
            </div>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            action="#"
            className="w-full flex flex-col gap-4"
          >
            <div className="flex gap-2 flex-col ">
              <label htmlFor="name" className="text-xs">
                نام و نام خانواگی را وارد نمایید
              </label>
              <input
                name="name"
                id="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="text-x w-full outline-0 pr-1 pt-2 pb-2 bg-slate-200 rounded-sm"
                type="text"
                placeholder="نام و نام خانوادگی ...."
              />
            </div>
            <div className="flex gap-2 flex-col ">
              <label htmlFor="name" className="text-xs">
                پسورد را وارد نمایید
              </label>
              <input
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className="text-x w-full outline-0 pr-1 pt-2 pb-2 bg-slate-200 rounded-sm"
                type="text"
                placeholder="پسورد ...."
              />
            </div>
            <div className="flex gap-2 flex-col ">
              <label htmlFor="name" className="text-xs">
                ایمیل خود را وارد نمایید
              </label>
              <input
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="text-x w-full outline-0 pr-1 pt-2 pb-2 bg-slate-200 rounded-sm"
                type="text"
                placeholder="ایمیل ...."
              />
            </div>
            <div className="flex gap-2 flex-col ">
              <label htmlFor="name" className="text-xs">
                {" "}
                شماره تلفن خود را وارد نمایید
              </label>
              <input
                name="phone"
                id="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                className="text-x w-full outline-0 pr-1 pt-2 pb-2 bg-slate-200 rounded-sm"
                type="text"
                placeholder="شماره تلفن ...."
              />
            </div>

            <div className="w-full flex justify-center items-center ">
              <button className="bg-sky-700 text-white  text-xs sm:text-sm pr-7 pl-7  sm:pr-10 hover:bg-sky-900 transition-all sm:pl-10 pt-2 cursor-pointer pb-2 rounded-sm ">
                ثبت نام
              </button>
            </div>
          </form>
        </div>
        <div
          ref={styleWrapperSiginUp}
          className="hidden xs:flex bg-sky-600 flex-col w-full gap-5 text-center pr-5  xs:absolute left-0  items-center justify-center top-0 h-full text-white"
        >
          <span className="text-sm sm:text-base tracking-tighter">
            خوش آومدی دوست من ❤
          </span>
          <span className=" text-xs sm:text-sm sm:max-w-[160px] max-w-[140px] leading-5 sm:tracking-normal tracking-tighter">
            آیا در رستوران <span className="text-green-400">رازینه</span> حساب
            کاربری داری 🤔 ؟
          </span>
          <Link
            to="/restorant/Login"
            className="border-white border-solid hover:bg-zinc-700 transition-all border-1 cursor-pointer pr-6 pl-6 sm:pr-10 sm:pl-10 rounded-sm text-xs sm:text-sm pt-1 pb-1"
          >
            ورود
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
