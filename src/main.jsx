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
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categuryfoods" element={<CateguryFoods />} />
      <Route path="/restorant/:ResoruntID" element={<SinglePageRestorant />} />
      <Route path="/restorant/Signup" element={<SignUp />} />
      <Route path="/restorant/Login" element={<Login />} />
      <Route path="/sallerpanel/*" element={<PanelSellerResturants />}>
        <Route path="home" element={<HomePanel />} />
        <Route path="newrestorants" element={<NewRestourants />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
