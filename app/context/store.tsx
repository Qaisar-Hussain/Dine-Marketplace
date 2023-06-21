
'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type DataType = {
    firstName: string
}

interface ContextProps {
    cartCount: number,
    setCartCount: Dispatch<SetStateAction<number>>,
    data: DataType[],
    setData: Dispatch<SetStateAction<DataType[]>>
    priceOfAllItems:number,
    setPriceOfAllItems:Dispatch<SetStateAction<number>>,
    cartItems:any[],
    setCartItems:Dispatch<SetStateAction<number>>
}

const GlobalContext = createContext<ContextProps>({
    cartCount:0,
    setCartCount: (): number => 1 ,
    // setUserId: (): string => '',
    data: [],
    setData: (): DataType[] => [] ,
    priceOfAllItems:0,
    setPriceOfAllItems: (): number => 1,
    cartItems:[],
    setCartItems:():any[]=>[]


})

export const GlobalContextProvider = ({ children }:any) => {
    const [cartCount, setCartCount] = useState(0);
    const [data, setData] = useState<[] | DataType[]>([]);
    const [priceOfAllItems, setPriceOfAllItems ] = useState(0)
    const [cartItems,setCartItems] = useState<[]>([])
    return (
        <GlobalContext.Provider value={{ cartCount, setCartCount, data, setData, priceOfAllItems, setPriceOfAllItems, cartItems, setCartItems }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);