import React from "react";
import ItemHomePanel from "../../ItemHomePanel/ItemHomePanel";
import ItemLineProgress from "./ItemLineProgress/ItemLineProgress";
import ProfailAdminInPanelModir from "../../ProfailAdminInPanelModir/ProfailAdminInPanelModir";
import TeamMembers from "../../TeamMembers/TeamMembers";
export default function HomePanel() {
  return (
    <div className="w-full mr-3 ml-3 mt-5 mb-5">
      <div className=" grid grid-cols-1 xs:grid-cols-2 2xs:grid-cols-3 3xs:grid-cols-4  gap-2 ">
        <ItemHomePanel
          title="فروش ها"
          value="80"
          des="مجموع فروش امروز"
          count="127"
        />
        <ItemHomePanel
          title="بازخورد ها"
          value="77"
          des="مجموع بارخورد ها"
          count="3574"
        />
        <ItemHomePanel
          title="تخفیف ها"
          value="22"
          des="تخفیف امروز"
          count="20%"
        />
        <ItemHomePanel
          title="غذا های امروز"
          value="50"
          des="تعداد غذا های امروز"
          count="75"
        />
      </div>
      <div className="mt-5 gap-2 grid grid-cols-2 ">
        <ItemLineProgress
          title="تعداد فروش"
          percent="70%"
          count="3600"
          desc="تعداد سفارشات بعد از تخفیفات"
          colors="bg-green-500"
          bgProgress="bg-green-200"
        />
        <ItemLineProgress
          title="تعداد رستوران ها"
          percent="20%"
          count="18"
          desc="تعداد رستوران های ثبت شده"
          colors="bg-sky-500"
          bgProgress="bg-sky-200"
        />
        <ItemLineProgress
          title="تعداد غذا ها"
          percent="35%"
          count="137"
          desc="تعداد غذا های موجود"
          colors="bg-pink-600"
          bgProgress="bg-pink-200"
        />
        <ItemLineProgress
          title=" فروش این ماه"
          percent="23%"
          count="9637"
          desc="تعداد سفارش های این ماه"
          colors="bg-zinc-600"
          bgProgress="bg-zinc-300"
        />
      </div>
      <div className="mt-5 flex gap-5 flex-col ">
        <div className="border-b-3 w-32 border-solid pb-2 border-b-sky-500">
          <span>لیست ادمین ها</span>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
          <ProfailAdminInPanelModir
            name="آروین علیالی"
            role="ادمین"
            username="arvinAlyali"
            img="./../images/AdminImg/1.jpg"
          />
          <ProfailAdminInPanelModir
            name="سینا اسدبیگی"
            role="ادمین"
            username="sinaAsadbigy"
            img="./../images/AdminImg/2.jpg"
          />
          <ProfailAdminInPanelModir
            name="شهناز حسینی"
            role="ادمین"
            username="shahnazHosseini"
            img="./../images/AdminImg/3.jpg"
          />
          <ProfailAdminInPanelModir
            name="مجتبی قادری"
            role="ادمین"
            username="mojtabaGhaderi"
            img="./../images/AdminImg/4.jpg"
          />
        </div>
      </div>
      <div className="mt-5">
        <div className="flex flex-col gap-5 pt-2 pb-2 pr-3 pl-3 rounded-sm bg-white ">
          <div className="flex justify-between border-b-2 border-slate-300 border-solid pb-3">
            <span>اعضای تیم</span>
            <svg className="w-5 h-5">
              <use href="#cube-transparent"></use>
            </svg>
          </div>
          <div className="grid grid-cols-1 gap-5">
            <TeamMembers
              name="سینا اسدبیگی"
              role="امنیت"
              username="sinaAsadbigy"
              img="./../images/AdminImg/1.jpg"
            />
            <TeamMembers
              name="آروین علیالی"
              role="مدیریت"
              username="arvinAlyali"
              img="./../images/AdminImg/2.jpg"
            />
            <TeamMembers
              name="شهناز حسینی"
              role="امنیت"
              username="shahnazHosseini"
              img="./../images/AdminImg/3.jpg"
            />
            <TeamMembers
              name=" مبین محمدی"
              role="فرانت اند دولوپر"
              username="mobinMohammafi"
              img="./../images/AdminImg/4.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
