import React, { useEffect, useState } from "react";
import MoreFoodsBoxes from "../MoreFoodsRestorant/MoreFoodsBoxes/MoreFoodsBoxes";
import SectionHeader from "../SectionHeader/SectionHeader";
import BoxesAroundMeFood from "../BoxesAroundMeFood/BoxesAroundMeFood"

export default function NewFoods() {
  const [allResturants , setAllResturants] = useState([])
  const baseUrl = import.meta.env.VITE_BASE_URL;

  // useEffect(() => {
  //   fetch(`${baseUrl}/restaurants`,)
  //   .then(res => res.json())
  //   .then(data => setAllResturants(data))
  // },[])
  return (
    <div className="mt-10">
      <SectionHeader title="جدید ترین ها" />
       
      <div className="grid xs:grid-cols-2 sm:grid-cols-3  gap-8 mt-10">
      {allResturants.slice(0,3).map(foods => (


      <BoxesAroundMeFood key={foods.id}  {...foods} />
      ))}

 
      </div>
    </div>
  );
}
