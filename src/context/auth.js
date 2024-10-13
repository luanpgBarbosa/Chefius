import { createContext, useState } from "react";

export const AuthContext = createContext({})

export default function AuthProvider({ children }){
 const [authNome, setAuthNome] = useState("")
 const [authEmail, setAuthEmail] = useState("")
 const [authSenha, setAuthSenha] = useState("")
 return(
  <AuthContext.Provider value={{ 
   authNome: authNome,
   setAuthNome,
   authEmail: authEmail,
   setAuthEmail,
   authSenha: authSenha,
   setAuthSenha
   }}
  >
   {children}
  </AuthContext.Provider>
 )
}