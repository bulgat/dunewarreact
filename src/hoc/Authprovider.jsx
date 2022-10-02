import { createContext,useState } from "react";

export const AuthContext =createContext(null)

export const AuthProvider=({children})=>{

    const [user, setUser] = useState(null)

    const signin = (newUser,CallBack)=>{
        setUser(newUser);
        CallBack();
    }
    const signout=(CallBack)=>{
        setUser(null);
        CallBack();
    }
    const value ={user,signin,signout};

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}