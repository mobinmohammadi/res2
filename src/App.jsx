import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./assets/Page/Home/Home";
import { useRoutes } from "react-router";
import CateguryFoods from "./assets/Components/CateguryFoods/CateguryFoods.jsx";
import UserBasket from "./assets/Components/UserBasket/UserBasket";
import "leaflet/dist/leaflet.css";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./assets/Components/Context/Context.jsx";

function App() {
  return (
      <div>
        {/* <UserBasket/> */}
        {/* <CateguryFoods /> */}
      </div>
  );
}

export default App;
