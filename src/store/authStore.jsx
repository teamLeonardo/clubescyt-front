import { createContext, useContext, useState } from "react";

const CTXAuth = createContext({})



export function AuthProvider({ children }) {
    //state login
    const [isValidate , setIsValidate] = useState(false)
    const [type, setType] = useState(null) // initial null, values in /common
    const [loading, setLoading] = useState(false)
    //state register



    return <CTXAuth.Provider
        value={{
            state: {
                type,
                loading
            },
            dispatch: {

            }
        }}
    >
        {children}
    </CTXAuth.Provider>
}
export const useAuth = (KEY) => { const contexto = useContext(CTXAuth); return contexto[KEY] }
export default CTXAuth