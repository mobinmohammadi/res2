import React, { useEffect, useRef, useState } from "react";
import ProgressBar from "../../ProgressBar/ProgressBar";
import CommentsBoxes from "../CommentsBoxes/CommentsBoxes";
import { useParams } from "react-router";
import SeeMoreBoxes from "../../SeeMoreBoxes/SeeMoreBoxes";
import SwalBox from "../../SwalBox/SwalBox";
// import CkEditor from "../../CkEditor/CkEditor"

export default function CommentsSections({ dataSingleResturants, allComments }) {
  console.log(name);
  
  const [nameCreatorComment, setNameCreatorComment] = useState("");
  const wrapperTextAreaComments = useRef(null)
  // const baseUrl = import.meta.env.VITE_BASE_URL;

  const [visibleComments, setVisibleComments] = useState(3);
  const inCrement = 2;
  // const [allComments, setAllComments] = useState([]);
  const boxForAddComments = useRef();
  // const [newTextComments, setNewTextComments] = useState("");
  // const [isShowModaleSucssusComments, setIsShowModaleSucssusComments] =
  //   useState(false);

  const showBoxesForAddComments = () => {
    boxForAddComments.current.classList.add("opacity-100", "visible", "mt-5" , "h-full");
    wrapperTextAreaComments.current.classList.add("h-full")
  };
  const hiddenBoxesForAddComments = () => {
    boxForAddComments.current.classList.remove("opacity-100", "h-full");
    boxForAddComments.current.classList.add("opacity-0", "mb-0");
    wrapperTextAreaComments.current.classList.remove("h-full")

  };

  const cancellHandelForComments = () => {
    hiddenBoxesForAddComments();
    setNameCreatorComment("");
  };

  // const changeValueCommentBody = (e) => {
  //   setNewTextComments(e.target.value);
  // };
  // const newCommentsForRestourants = (e) => {
  //   e.preventDefault();
  //   const bodyNewComments = {
  //     name: "بهنام محمدی",
  //     text: newTextComments,
  //   };
  //   fetch(`${baseUrl}/restaurants/${modePage}/comments`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(bodyNewComments),
  //   })
  //     .then((res) => {
  //       if (res) {
  //         setNewTextComments("")

  //       }

  //       return res;
  //     })

  //     .then((result) => {
  //       getAllComments();
  //       setIsShowModaleSucssusComments(true);
  //       setTimeout(() => {
  //         location.reload()
  //       }, 4000);
  //     });
  // };

  const modePage = useParams().ResoruntID;

  // const getAllComments = () => {
  //   fetch(`${baseUrl}/restaurants/${modePage}/comments`)
  //     .then((res) => res.json())
  //     .then((dataComments) => setAllComments(dataComments));
  // };

  // useEffect(() => {
  //   getAllComments();
  // }, []);

  const addToVisibleComments = () => {
    setVisibleComments((prev) => prev + inCrement);
  };

  const allFoodsCommentToShown = visibleComments >= allComments.length;

  const productsToShow = allComments.slice(0, visibleComments);



  // ============  Calculator Rating Comments ===================

    const allComment = allComments.map(item => item.score)
    const resultAllRatingOfComments = allComment.reduce((acc ,num) => acc+ num , 0)
    const failayScoreCommenst = resultAllRatingOfComments / allComment.length
    

  // ============================================================



  return (
    <>
      <svg className="hidden">
        <symbol
          id="chat-bubble-bottom-center-text"
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
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
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
      <div  id="wrapper-answer__comment" className="answer__comment bg-white pb-5 relative  ">
        <div className="flex items-center  justify-between mr-6 ml-6 bg-green-600 text-white pl-3 pr-3 mt-5 rounded-md">
          <div className="flex items-center justify-center mt-5 ">
            <span className=" block pl-3 font-bold text-[12px] sm:text-[18px] pb-5 pr-5">
              نظر کاربران درباره  {dataSingleResturants.name}
            </span>
          </div>
          <div
            onClick={() => showBoxesForAddComments()}
            className="flex gap-1  justify-between h-full rounded-sm cursor-pointer  items-center bg-zinc-700 pr-3 pl-3 pt-2  pb-2 font-bold"
          >
            <span className="text-x sm:text-xs">ثبت کامنت</span>
            <svg className="w-5 h-5">
              <use href="#chat-bubble-bottom-center-text"></use>
            </svg>
          </div>
        </div>
        <div ref={wrapperTextAreaComments} className="h-0 transition-all overflow-hidden"> 
          <div
            ref={boxForAddComments}
            className="container-foods opacity-0 h-24 overflow-hidden transition-custom-5 mt-4"
          >
            <div className="flex gap-2 items-center ">
              <div className=" border-5 w-15 h-15 flex items-center justify-center border-slate-200 border-solid rounded-full">
                <svg className="w-12 h-12">
                  <use href="#person"></use>
                </svg>
              </div>
              {nameCreatorComment.length ? (
                <div className="flex flex-col gap-1">
                  <span className="text-xs sm:text-sm">
                    پاسخ کاربر مهمان به {nameCreatorComment}
                  </span>
                  <span className="text-x sm:text-xs mr-2">پاسخ به کامنت</span>
                </div>
              ) : (
                <div className="flex flex-col gap-1">
                  <span className="text-sm">کاربر مهمان</span>
                  <span className="text-xs mr-2">ثبت کامنت جدید</span>
                </div>
              )}
            </div>
            <div className="bg-red-500 items-center  flex gap-2  text-white w-full mt-2 rounded-md pt-2 pb-2 pr-2">
              <svg className="w-8 h-8 sm:w-6 sm:h-6 text-zinc-800 ">
                <use href="#exclamation-triangle"></use>
              </svg>
              <span className="mt-1 text-xs leading-5 sm:text-sm">
                لطفا کامنت خود را اععم از کلمات توهین درج نمایید در والا غیر بن
                خواهید شد ❌
              </span>
            </div>
            <textarea
              // value={newTextComments}
              // onChange={(e) => changeValueCommentBody(e)}
              className="h-44 sm:h-60 bg-slate-200  mt-2 rounded-md w-full pt-2 pr-2 outline-green-600"
              name=""
              id=""
            ></textarea>
            <div className="sm:text-md mt-2 transition-all flex gap-3 sm:gap-5 float-end & > *:rounded-md & > *:pr-10  & > *:pl-10  & > *:pt-2  & > *:pb-2">
              <button
                onClick={() => cancellHandelForComments()}
                className="border-2 border-solid w-24 flex items-center justify-center text-[14px] sm:w-32 text-green-500 hover:bg-green-100 cursor-pointer border-green-500"
              >
                لغو
              </button>
              <button
                // onClick={(e) => newCommentsForRestourants(e)}
                className="bg-green-500 border-2 w-24 flex items-center justify-center text-[14px] sm:w-32  border-solid  border-green-500 cursor-pointer hover:bg-green-600  text-white"
              >
                ارسال
              </button>
            </div>
          </div>
        </div>

        <div className="flex mt-5 flex-col items-center justify-center pt-10 pb-10 ">
          <div className="flex gap-.5 pb-3">
            <svg className="w-7 h-7 text-slate-300">
              <use href="#star"></use>
            </svg>
            <svg className="w-7 h-7 text-slate-300">
              <use href="#star"></use>
            </svg>
            <svg className="w-7 h-7 text-yellow-500">
              <use href="#star"></use>
            </svg>
            <svg className="w-7 h-7 text-yellow-500">
              <use href="#star"></use>
            </svg>
            <svg className="w-7 h-7 text-yellow-500">
              <use href="#star"></use>
            </svg>
          </div>
          <div className="flex mb-2 gap-2 items-center  border-1 pt-1 pb-1 pr-3 pl-3 rounded-4xl border-[#dddddd]">
            
            <div className="flex gap-1    ">

            <span className="text-slate-400 text-sm font-bold"> 5 / </span>
            <span className="text-zinc-800 text-sm font-bold">{failayScoreCommenst.toFixed(1)}</span>
            </div>
            <div className="text-slate-400 text-x">
              <span>( {allComments.length} </span>
              <span>نظر)</span>
            </div>
          </div>
          <div id="comments" className="">
            <div>
              <i></i>
              <ProgressBar value={"10"} icons="😍" count="2" />
              <ProgressBar value={"10"} icons="🤗" count="2" />
              <ProgressBar value={"10"} icons="😐" count="2" />
              <ProgressBar value={"30"} icons="😡" count="4" />
              <ProgressBar value={"70"} icons="🤬" count="7" />
            </div>
          </div>
        </div>
       
        {productsToShow.map((comment) => (
          <div className="rounded-md overflow-hidden m-4 w-[90%] sm:w-[70%] mx-auto  shadow-[box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;  ]">
            <CommentsBoxes
              showBoxesForAddComments={showBoxesForAddComments}
              setNameCreatorComment={setNameCreatorComment}
              {...comment}
            />
          </div>
        ))}

        {/* {allComments.map((comments) => (
          <CommentsBoxes {...comments} />
        ))} */}
        <button
          className="flex justify-center items-center w-full "
          onClick={() => {
            setTimeout(() => {
              addToVisibleComments();

              console.log(" ===> ", visibleComments);
            }, 2000);
          }}
        >
          {allFoodsCommentToShown ? (
            <span className="w-[97%] mx-auto cursor-cell text-xs pt-2  pb-2  bg-red-500 mt-3 border-b-3 rounded-md border-solid border-b-sky-800 text-white flex items-center justify-center">
              اتمام کامنت های ثبت شده
            </span>
          ) : (
            <SeeMoreBoxes />
          )}
        </button>
        {/* <CkEditor/> */}
        {/* {isShowModaleSucssusComments ? (
          <SwalBox ok="ok" title="کامنت با موفقیت ایجاد شد" />
        ) : (
          ""
        )} */}
      </div>
    </>
  );
}
