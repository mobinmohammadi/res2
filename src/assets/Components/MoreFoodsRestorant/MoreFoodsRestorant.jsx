import React from "react";
import MoreFoodsBoxes from "./MoreFoodsBoxes/MoreFoodsBoxes";

export default function MoreFoodsRestorant({ title, price, img }) {
  return (
    <>

      <div>
        <span className="text-xl text-zinc-700 font-bold">پیتزا آمریکایی</span>
        <MoreFoodsBoxes/>
      </div>
    </>
  );
}
