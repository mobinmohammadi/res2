import React, { useEffect, useState } from "react";
import CommentsAnswerBox from "../CommentsAnswerBox/CommentsAnswerBox";
import { Link } from "react-router";

export default function CommentsBoxes({
  setNameCreatorComment,
  showBoxesForAddComments,
  name,
  comment,
  reply,
  datetime,
  foods,
  avatar,
  text,
}) {

  let WhastsEmojiForResultCommentUser = "null";
  function emojiForReatinFoods() {
    const allReatingForOnFood = foods.map((comment) => comment.rating);
    const resultRating = allReatingForOnFood.reduce((acc, num) => acc + num, 0);

    switch (resultRating) {
      case 1:
        WhastsEmojiForResultCommentUser = "🤬";
        break;
      case 2:
        WhastsEmojiForResultCommentUser = "😡";
        break;

      case 3:
        WhastsEmojiForResultCommentUser = "😐";

        break;

      case 4:
        WhastsEmojiForResultCommentUser = "😎";
        break;

      case 5:
        WhastsEmojiForResultCommentUser = "🤗";
        break;
      default: {
        WhastsEmojiForResultCommentUser = "😍";
      }
    }
  }

  emojiForReatinFoods();

  const commentForAnswerHandler = () => {
    setNameCreatorComment(name);
    showBoxesForAddComments();
  };

  return (
    <>
      <div className="border-t-1 pl-2 bg-slate-100 border-[#dddddd] border-b-1 pt-4 pb-4 pr-5">
        <a
          href="#wrapper-answer__comment"
          onClick={() => commentForAnswerHandler()}
          class="pt-1 pb-1 pr-4 pl-4 mb-5 rounded-sm hover:bg-sky-800 transition-all cursor-pointer  flex items-center justify-center  bg-sky-600 text-white"
        >
          <a class="text-xs scroll-button">پاسخ</a>
        </a>

        <div className="flex justify-between pl-5">
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

              <div className="flex flex-col gap-[3px] items-right justify-center">
                <span className="text-zinc-700 font-bold text-sm">{name}</span>
                <div className="text-x flex flex-col text-zinc-400">
                  <span className=""> تاریخ :{datetime.slice(0, 10)}</span>
                  <span>ساعت :{datetime.slice(10, 16)}</span>
                </div>
              </div>
            </div>
          </div>
          <i>{WhastsEmojiForResultCommentUser}</i>
        </div>
        <span className="inline-block max-w-[320px] text-xs mr- mt-5">
          {text}
        </span>
        <div className="flex gap-3 ">
          {foods.map((commentsFood) => (
            <div className="flex w-36 mt-4 border-1 gap-2 rounded-3xl pt-[5px] pb-[5px] pr-2 pl-2 border-[#dddddd] justify-center items-center">
              <span className="text-xs">{commentsFood.name}</span>
              <div className="flex gap-[2px] items-center border-r-1 pr-2  border-[#dddddd]">
                <span className="text-sm mt-1">
                  {Math.ceil(commentsFood.rating)}
                </span>
                <svg className="text-amber-400 w-4 h-4">
                  <use href="#star"></use>
                </svg>
              </div>
            </div>
          ))}
        </div>
        {reply ? <CommentsAnswerBox datetime={datetime} reply={reply} /> : null}
      </div>
    </>
  );
}
