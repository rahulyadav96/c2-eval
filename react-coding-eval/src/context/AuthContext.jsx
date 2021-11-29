import { createContext , useState} from "react";

export const AuthContext = createContext();

const [token,setToken] = useState("");

export const AuthContextProvider = ({children})=>{
    return <AuthContext.Provider value = {{token , handleToken}} >
        {children}
    </AuthContext.Provider>
}