import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import RestorantsData from "../../../../RestorantsData.json"

import "swiper/css";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import BoxesAroundMeFood from "../BoxesAroundMeFood/BoxesAroundMeFood";
export default function AroundMe({arrayUserBasket , setArrayUserBasket}) {
  const [allRestorants, setAllRestorants] = useState(RestorantsData);
  
  
  useEffect(() => {
    
    console.log("allRestorants ====> " , allRestorants);
  }, []);

  return (
    <>
      <svg className="hidden">
        <symbol
          id="heart"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </symbol>

        <symbol
          id="star"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </symbol>
      </svg>
      <div className="mt-10">
        <SectionHeader title="اطراف من" />
        <div className="pt-5 gap-3 & > *:rounded-xl & >*:overflow-hidden">
          <div className="hidden 2xs:flex lg:hidden">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              modules={[Pagination]}
              className="mySwiper"
            >
              {allRestorants.map((restorant) => (
                <SwiperSlide key={restorant.id}>
                  <BoxesAroundMeFood allRestorants={restorant} allComments={restorant.comments} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mt-8 flex 2xs:hidden">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              modules={[Pagination]}
              className="mySwiper"
            >
              {allRestorants.map((restorant) => (
                <SwiperSlide key={restorant.id}>
                  <BoxesAroundMeFood allRestorants={restorant} allComments={restorant.comments} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mt-8 hidden 3xs:flex ">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              modules={[Pagination]}
              className="mySwiper"
            >
              {allRestorants.map((restorant) => (
                <SwiperSlide key={restorant.id}>
                  <BoxesAroundMeFood allRestorants={restorant} allComments={restorant.comments} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
