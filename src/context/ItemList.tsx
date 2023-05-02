import { createContext, ReactNode, useState } from "react";
import { ProductContextType } from "../react-app-env";

type ItemListContextProviderType = {
    children: ReactNode
}

type ListType = {
    cartItemList: ProductContextType[];
    setCartItemList: React.Dispatch<React.SetStateAction<ProductContextType[]>>;
}

export const ItemListContext = createContext<ListType>({cartItemList: [], setCartItemList: () => {}});

export function ItemListProvider ({children}: ItemListContextProviderType) {
    const [cartItemList, setCartItemList] = useState<ProductContextType[]>([]);
    return (
        <ItemListContext.Provider value={{cartItemList, setCartItemList}}>
            {children}
        </ItemListContext.Provider>
    )
}