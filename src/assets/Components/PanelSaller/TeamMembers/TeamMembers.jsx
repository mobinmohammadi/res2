import React from "react";

export default function TeamMembers({ name, role, username, img }) {
  return (
    <div className="flex gap-2 items-center">
      <img
        className="w-14 rounded-full"
        src={img}
        alt=""
      />
      <div className="flex flex-col">
        <span className="text-sm text-zinc-700">{name}</span>
        <span className="text-xs text-slate-500">{username}</span>
        <span className="text-xs text-green-600 font-bold">{role}</span>
      </div>
    </div>
  );
}
