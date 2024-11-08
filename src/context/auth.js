import { createContext, useState } from "react";

export const AuthContext = createContext({})

export default function AuthProvider({ children }){
 const [authNome, setAuthNome] = useState("luan")
 const [authEmail, setAuthEmail] = useState("luan@gmail.com")
 const [authSenha, setAuthSenha] = useState("1234")
 const [authIdade, setAuthIdade] = useState("")
 
 return(
  <AuthContext.Provider value={{ 
   authNome: authNome,
   setAuthNome,
   authEmail: authEmail,
   setAuthEmail,
   authSenha: authSenha,
   setAuthSenha,
   authIdade: authIdade,
   setAuthIdade,
   }}
  >
   {children}
  </AuthContext.Provider>
 )
}