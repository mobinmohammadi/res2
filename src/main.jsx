import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import Router from "./Router";
import { CartProvider } from "./assets/Context/BasketContext";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </CartProvider>
);
