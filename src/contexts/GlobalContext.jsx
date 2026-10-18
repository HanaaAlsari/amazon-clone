/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { initState } from "./AppReducer";

const GlobalContext = createContext();

 export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initState);

    return (
        <GlobalContext.Provider
            value={{
                basket: state.basket,
                user: state.user,
                dispatch: dispatch,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(GlobalContext);
};