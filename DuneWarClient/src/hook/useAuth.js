import { useContext } from "react";
import { AuthContext } from "../hoc/Authprovider";

export function useAuth(){
    return useContext(AuthContext)
}