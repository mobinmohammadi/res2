import { createContext, useState } from "react"



const CartContext = createContext(null)



export const CartProvider  = ({children}) => {
    const [cart , setCart] = useState([])

    const addToCart = (product) => {
        console.log(product);
        
    }



    return (
        <CartContext.Provider value={{cart , addToCart}}>
            {children}
        </CartContext.Provider>
    )

}