import { createContext } from "react";

export const AuthContext = createContext({})

export default function AuthProvider({ children }){
 return(
  <AuthContext.Provider value={{ 
   authNome: "Ana Ragazzi",
   authEmail: "ana123@gmail.com",
   authSenha: "ana4321",
   }}
  >
   {children}
  </AuthContext.Provider>
 )
}