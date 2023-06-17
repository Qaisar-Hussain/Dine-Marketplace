
'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type DataType = {
    firstName: string
}

interface ContextProps {
    userId: number,
    setUserId: Dispatch<SetStateAction<number>>,
    data: DataType[],
    setData: Dispatch<SetStateAction<DataType[]>>
}

const GlobalContext = createContext<ContextProps>({
    userId:0,
    setUserId: (): number => 1 ,
    // setUserId: (): string => '',
    data: [],
    setData: (): DataType[] => [] 
})

export const GlobalContextProvider = ({ children }) => {
    const [userId, setUserId] = useState(0);
    const [data, setData] = useState<[] | DataType[]>([]);
    
    return (
        <GlobalContext.Provider value={{ userId, setUserId, data, setData }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);