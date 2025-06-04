import React from "react";

export default function ProfailAdminInPanelModir({img , name , username , role}) {
  return (
    <div className="flex rounded-md pt-2 pb-2 bg-white pr-3 pl-3 items-center gap-2">

      <img
        className="w-20 2xs:w-25 rounded-full object-contain"
        src={img}
        alt=""
      />
      <div className="flex flex-col gap-1">
        <span className="text-sm text-zinc-700">{name}</span>
        <span className="text-xs text-slate-500">{username}</span>
        <span className="text-xs text-yellow-400">{role}</span>
      </div>
    </div>
  );
}
