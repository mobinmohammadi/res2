import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StrictMode } from "react";
import Home from "./assets/Page/Home/Home.jsx";
import CateguryFoods from "./assets/Components/CateguryFoods/CateguryFoods.jsx";
import SinglePageRestorant from "./assets/Page/SinglePageRestorant/SinglePageRestorant.jsx";
import NewRestourants from "./assets/Components/PanelSaller/HomeSellerPanel/NewRestourants/NewRestourants.jsx";
import HomePanel from "./assets/Components/PanelSaller/HomeSellerPanel/HomePanel/HomePanel.jsx";
import SignUp from "./assets/Page/SignUp/SignUp.jsx";
import Login from "./assets/Components/RegistrationAndAuthentication/Login/Login.jsx";
import PanelSellerResturants from "./assets/Page/PanelSellerResturants/PanelSellerResturants.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FavoriteFoods from "./assets/Page/Home/FavoriteFoods/FavoriteFoods.jsx";
import ProductPayment from "./assets/Components/ProductPayment/ProductPayment.jsx";
import ScrollToTop from "./assets/Components/ScrollToTop/ScrollToTop.jsx";
import { ToastContainer } from "react-toastify";


function Router() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categuryfoods/*" element={<CateguryFoods />}>
        {/* <Route path=""></Route> */}
      </Route>
      <Route
        path={`/restorant/:restaurantID`}
        element={<SinglePageRestorant />}
      />
      <Route path="/restorant/Signup" element={<SignUp />} />
      <Route path="/restorant/Login" element={<Login />} />
      <Route path="/restorant/favoritefoods" element={<FavoriteFoods />} />
      <Route path="/restorant/productPayment" element={<ProductPayment />} />
      <Route path="/sallerpanel/*" element={<PanelSellerResturants />}>
        <Route path="home" element={<HomePanel />} />
        <Route path="newrestorants" element={<NewRestourants />} />
      </Route>
    </Routes>
    <ToastContainer position="top-left" autoClose={3000} />
    </>

  );
}

export default Router;
