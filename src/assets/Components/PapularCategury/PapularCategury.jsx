import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import FoodBoxes from "../FoodBoxes/FoodBoxes";
import allCategury from "../../../Data";

export default function PapularCategury() {
  return (
    <div className="seaction-header md:text-4xl">
      <SectionHeader title="دسته های محبوب" />
      <div className="pt-5  grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5  gap-5">
        {allCategury.allCategury.map((categury) => (
          <FoodBoxes key={categury.id} {...categury} />
        ))}

        {/* <FoodBoxes title="کباب" img="./images/foods/papular-foods/2.jpg"/>
            <FoodBoxes title="سوپ" img="./images/foods/papular-foods/3.jpg"/>
            <FoodBoxes title="ساندویچ" img="./images/foods/papular-foods/4.jpg"/>
            <FoodBoxes title="غذای ایرانی" img="./images/foods/papular-foods/5.jpg"/>
            <FoodBoxes title="سوخاری" img="./images/foods/papular-foods/6.jpg"/>
            <FoodBoxes title="پاستا" img="./images/foods/papular-foods/7.jpg"/>
            <FoodBoxes title="سالاد" img="./images/foods/papular-foods/8.jpg"/>
            <FoodBoxes title="صبحانه" img="./images/foods/papular-foods/9.jpg"/>
            <FoodBoxes title="استیک" img="./images/foods/papular-foods/10.jpg"/> */}
      </div>
    </div>
  );
}
