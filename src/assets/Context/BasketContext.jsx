import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [allPriceProdcuts, setAllPriceProdcuts] = useState(0);
  const [cart, setCart] = useState(() => {
    let stored = localStorage.getItem("basketItems");
    return stored ? JSON.parse(stored) : [];
  });

  const addToCart = (product) => {
    setCart((prev) => {
      let exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.map((items) =>
          items.id === product.id ? { ...items, count: items.count + 1 } : items
        );
      } else {
        return [...prev, { ...product, count: 1 }];
      }
    });
  };

  function saveCartInLocalStorage(cart) {
    localStorage.setItem("basketItems", JSON.stringify(cart));
  }

  const removeInToBasketUser = (productID) => {
    const afterDeleteOnProduct = cart.filter((item) => item.id !== productID);
    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          setCart(afterDeleteOnProduct);
          resolve(); // همیشه موفقیت‌آمیز برای این مثال
        }, 1000); // فقط برای حالت pending
      }),
      {

        pending:  "در حال حذف از سبد خرید...",
         success : "با موفقیت از سبد خرید شما حذف شد ✅",
         
        error: "حذف از سبد خرید با خطا مواجه شد❌",
      }
    );
  };

  const decreaseCount = (product) => {
    if (product.count > 1) {
      setCart((prev) => {
        return prev.map((item) =>
          item.id == product.id ? { ...item, count: item.count - 1 } : item
        );
      });
    } else {
      setCart((prev) => prev.filter((item) => item.id !== product.id));
    }
  };
  const increaseCount = (product) => {
    setCart((prev) => {
      return prev.map((item) =>
        item.id == product.id ? { ...product, count: product.count + 1 } : item
      );
    });
  };

  function allPriceBasket() {
    // const allPrcie = cart.map(item => item.price)
    const calculator = cart
      .flatMap((item) => item.price * item.count)
      .reduce((acc, num) => acc + num, 0);
    setAllPriceProdcuts(calculator);
  }

  useEffect(() => {
    console.log(cart);
    saveCartInLocalStorage(cart);
    allPriceBasket();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeInToBasketUser,
        decreaseCount,
        increaseCount,
        allPriceProdcuts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
