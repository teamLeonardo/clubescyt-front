import { createContext, useState } from "react";

const CTXApp = createContext({})



export function AppProvider({ children }) {

    const [state, setState] = useState({});

    return <CTXApp.Provider
        value={{
            state: state
        }}
    >
        {children}
    </CTXApp.Provider>
}
export default CTXApp