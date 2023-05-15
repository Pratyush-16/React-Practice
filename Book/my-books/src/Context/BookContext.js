import { Children, createContext } from "react";

export const BookContext = createContext(null)

export const BookContextProvider = ({children})=> {

    return(

        <BookContext.Provider value={{x:"1"}}>{children}</BookContext.Provider>
    )
}