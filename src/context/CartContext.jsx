import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export function CartProvider ({children}) {
    const [cart, setCart] = useState([]);

    function addToCart (options, quantity, id) {
        setCart([...cart, { options, quantity, id}])
    }

    function removeFromCart (item) {
        setCart(cart.filter((el) => item.id !== el.id));
    }

    return (
        <cartContext.Provider value={{cart, setCart, addToCart, removeFromCart}}>
            {children}
        </cartContext.Provider>
    )
}


export function useCart () {
    return useContext(cartContext)
}