import React from "react";

export default function CommentsAnswerBox({ datetime, reply }) {
  const { name, text, avatar } = reply;

  return (
    <div className="bg-zinc-700 p-3 mt-5 rounded-md border-r-5  border-green-600 border-solid">
      <div className="flex justify-between pl-5 border-b border-solid pb-2 border-slate-100 ">
        <div className="">
          <div className="flex gap-2 ">
            {avatar ? (
              <img className="w-12 h-12 rounded-3xl" src={avatar} alt="" />
            ) : (
              <img
                className="w-12 h-12 rounded-3xl"
                src="https://secure.gravatar.com/avatar/7cc3744776786e69ba44033e063546ca?s=96&d=mm&r=g"
                alt=""
              />
            )}

            <div className="flex flex-col text-white gap-[3px] items-right justify-center">
              <span className="text-white font-bold text-sm">{name}</span>
              <div className="text-x flex flex-col text-slate-300">
                <span className=""> تاریخ : {datetime.slice(0, 10)}</span>
                <span>ساعت : {datetime.slice(10, 16)} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="text-white inline-block max-w-[320px] text-xs  mt-5">
        {text}
      </span>
    </div>
  );
}
