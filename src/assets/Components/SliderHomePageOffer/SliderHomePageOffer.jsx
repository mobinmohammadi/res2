import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FoodBoxes from "../FoodBoxes/FoodBoxes";
import BoxesFood from "../BoxesAroundMeFood/BoxesAroundMeFood";
import { Link } from "react-router";
import BoxForSlider from "../BoxForSlider/BoxForSlider";
import SectionHeader from "../SectionHeader/SectionHeader";
import RestorantsData from "../../../../RestorantsData.json";

const SimpleSlider = () => {
  const [allRestorans, setAllRestorans] = useState(RestorantsData);
 

  const filtredRestorantWhiteDiscount = allRestorans.filter(
    (res) => res.discount
  );

  return (
    <div className="flex flex-col gap-7 pt-7 pb-7 container-custom ">
      <SectionHeader title="تخفیف خورده ها" />
      <div
        className="flex  gap-5  overflow-x-scroll hide-scrollbar "
      >
        <>
          <div className="flex gap-5 & > *:w-[300px]">
            {filtredRestorantWhiteDiscount.map(restorant => (
                
            <BoxForSlider key={restorant.id} {...restorant}/>
            ))}
        
          </div>
        </>
      </div>
    </div>
  );
};

export default SimpleSlider;
