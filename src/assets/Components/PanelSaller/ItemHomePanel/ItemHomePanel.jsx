import { Gauge } from "@mui/x-charts";
import React from "react";

export default function ItemHomePanel({title , value , des , count}) {
  return (
    <div className="bg-white pt-2 pb-2 pr-5 h-42 pl-5 rounded-xs">
      <div className="flex  justify-between items-center">
        <span>{title}</span>
        
        <svg className="w-5 sm:w-6 h-5 sm:h-6 cursor-pointer">
          <use href="#cube-transparent"></use>
        </svg>
      </div>
      <div className="flex flex-col sm:flex-row justify-between h-[120px] sm:h-[100px] items-center">
        <Gauge
          value={value}
          width={100}
          startAngle={0}
          endAngle={360}
          innerRadius="80%"
          outerRadius="65%"

          // ...
        />
        <div className="flex flex-col text-center font-bold">
        <span className="text-sm sm:text-base text-zinc-700">{count}</span>
        <span className="text-xs sm:text-sm text-slate-500">{des}</span>
    
        </div>
      </div>
    </div>
  );
}
