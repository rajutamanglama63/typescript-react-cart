import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type CartContextProviderType = {
    children: ReactNode
}

type CartStateType = {
    cartItem: 0;
    setCartItem: Dispatch<SetStateAction<number>>;
}


export const CartContext = createContext<CartStateType>({cartItem: 0, setCartItem: () => {},});


export function CartContextProvider ({children}: CartContextProviderType) {
    const [cartItem, setCartItem] = useState<any>(0);
    return (
        <CartContext.Provider value={{cartItem, setCartItem}}>
            {children}
        </CartContext.Provider>
    )
}