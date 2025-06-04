import React, { useEffect, useRef, useState } from "react";
import Topbar from "./../../Components/Topbar/Topbar";
import FooterPc from "./../../Components/FooterPc/FooterPc";
import HeaderRestorant from "./../../Components/SinglePageRestorant/HeaderRestorant/HeaderRestorant";
import MoreFoodsRestorant from "../../Components/MoreFoodsRestorant/MoreFoodsRestorant";
import MoreFoodsBoxes from "../../Components/MoreFoodsRestorant/MoreFoodsBoxes/MoreFoodsBoxes";
import CommentsSections from "./../../Components//SinglePageRestorant/CommentsSections/CommentsSections";
import AddressRestorant from "./../../Components//SinglePageRestorant/AddressRestorant/AddressRestorant";
import { useParams } from "react-router";
import MenuSinglePageRestorant from "././../../Components//SinglePageRestorant/MenuSinglePageRestorant/MenuSinglePageRestorant";
import SinglePageRestorantMenu from "./../../Components//SinglePageRestorant/SinglePageRestorantMenus/SinglePageRestorantMenus";
import RestorantsData from "../../../../RestorantsData.json";
import { CartProvider } from "../../Components/Context/Context";
import FoodBoxes from "../../Components/FoodBoxes/FoodBoxes";

export default function SinglePageRestorant() {
  // const baseUrl = import.meta.env.VITE_BASE_URL;

  const [valueForSearch, setValueForSearch] = useState("");
  const [allRestorants, setAllRestorants] = useState(RestorantsData);
  const [countProduct, setCountProduct] = useState(0);

  const paramsID = useParams().ResoruntID;
  let [dataSingleResturants, setDataSingleResturants] = useState({});
  const [allComments, setAllComments] = useState([]);
  useEffect(() => {
    const foundRestorants = allRestorants.filter(
      (restoran) => restoran.id == paramsID
    );
    setDataSingleResturants(foundRestorants[0]);
    setAllComments(foundRestorants[0].comments);
  }, [allRestorants, paramsID]);

  // useEffect(() => {
  //   fetch(`${baseUrl}/restaurants/${paramsID.ResoruntID}`)
  //     .then((res) => res.json())
  //     .then((data) => setDataSingleResturants(data));
  // }, []);

  // useEffect(() => {
  //   fetch(`${baseUrl}/restaurants/${paramsID.ResoruntID}/comments`)
  //   .then(res => res.json())
  //   .then(result => setAllComments(result))
  // },[])
  const [statusMenuShow, setStatusMenuShow] = useState("resturants-menu");
  const [searchInMenuRestorant, setSearchInMenuRestorant] = useState([]);

  const handleMenuSingleRestoranst = (e) => {
    let filredMenu = dataSingleResturants.menu.filter((menus) =>
      menus.name.includes(e.target.value)
    );
    setSearchInMenuRestorant(filredMenu);
  };

  // ==================    Handle User Basket ================

  const [arrayUserBasket, setArrayUserBasket] = useState(() => {
    const stored = localStorage.getItem("basket");
    return stored ? JSON.parse(stored) : [];
  });

  const addToBasketUser = (foods) => {
    setArrayUserBasket((prev) => {
      let exist = prev.find((item) => item.id == foods.id);
      if (exist) {
        return prev.map((items) =>
          items.id === foods.id ? { ...items, count: items.count + 1 } : items
        );
      } else {
        return [...prev, { ...foods, count: 1 }];
      }
    });
  };

  // ===================================================================

  // =============  Calculator User Basket  =============================

  const [fainalyAllPriceFoods, setFainalyAllPriceFoods] = useState(0);

  function CalculatorUserBasket() {
    const allPriceFoods = arrayUserBasket?.map(
      (item) => item.price * item.count
    );
    const resultAllPriceFoods = allPriceFoods?.reduce(
      (acc, num) => acc + num,
      0
    );
    setFainalyAllPriceFoods(resultAllPriceFoods);
  }

  useEffect(() => {
    CalculatorUserBasket();
  }, [arrayUserBasket]);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(arrayUserBasket));
  }, [arrayUserBasket]);

  // ====================================================================

  // ===========    Delete Foods In UserBasket  =========================
  // const [afterDeleteFoods, setAfterDeleteFoods] = useState();
  const deleteFoodInUserBasket = (foodID) => {
    const currentBasket = JSON.parse(localStorage.getItem("basket")) || [];

    const updatedLocalStorageAfterDelete = currentBasket.filter(
      (item) => item.id !== foodID
    );
    // setAfterDeleteFoods(updatedLocalStorageAfterDelete);
    localStorage.setItem(
      "basket",
      JSON.stringify(updatedLocalStorageAfterDelete)
    );
    setArrayUserBasket(updatedLocalStorageAfterDelete);
  };
  // ====================================================================




  const [idProductInBasket, setIdProductInBasket] = useState();

  return (
    <div className="">
      <Topbar
        arrayUserBasket={arrayUserBasket}
        setArrayUserBasket={setArrayUserBasket}
        CalculatorUserBasket={CalculatorUserBasket}
        addToBasketUser={addToBasketUser}
        setIdProductInBasket={setIdProductInBasket}
        deleteFoodInUserBasket={deleteFoodInUserBasket}
        fainalyAllPriceFoods={fainalyAllPriceFoods}
      />
      <HeaderRestorant
        dataSingleResturants={dataSingleResturants}
        allComments={allComments}
      />
      <div className="flex flex-col bg-white justify-between pt-5 pr-4 pl-4 xs:pr-12 xs:pl-12">
        <div className="w-[20rem]  ">
          <ul className="flex  & > *:cursor-pointer justify-between pt-5 pr-3 pl-3 pb-3 items-center ">
            <MenuSinglePageRestorant
              setStatusMenuShow={setStatusMenuShow}
              statusMenuShow={statusMenuShow}
              keys="resturants-menu"
              value=""
              active
              title="منوی رستوران"
            />
            <MenuSinglePageRestorant
              setStatusMenuShow={setStatusMenuShow}
              statusMenuShow={statusMenuShow}
              keys="resturants-comments"
              value=""
              title="نظرات کاربران"
            />
            <MenuSinglePageRestorant
              setStatusMenuShow={setStatusMenuShow}
              statusMenuShow={statusMenuShow}
              keys="resturants-infos"
              value=""
              title="اطلاعات کلی"
            />
          </ul>
        </div>
      </div>

     

      {statusMenuShow == "resturants-comments" ? (
        <CommentsSections
          dataSingleResturants={dataSingleResturants}
          allComments={allComments}
        />
      ) : null}
      {statusMenuShow == "resturants-menu" ? (
        <SinglePageRestorantMenu
          arrayUserBasket={arrayUserBasket}
          setArrayUserBasket={setArrayUserBasket}
          idProductInBasket={idProductInBasket}
          addToBasketUser={addToBasketUser}
          searchInMenuRestorant={searchInMenuRestorant}
          handleMenuSingleRestoranst={handleMenuSingleRestoranst}
          dataSingleResturants={dataSingleResturants}
        />
      ) : null}
      {statusMenuShow == "resturants-infos" ? (
        <AddressRestorant dataSingleResturants={dataSingleResturants} />
      ) : null}

      <div className="mt-2">
        <FooterPc />
      </div>
    </div>
  );
}
