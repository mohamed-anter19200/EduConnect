import { createContext, useState } from "react";

export const userContext = createContext(0);
export default function UserProvider({children}) {
  const [token,setToken] = useState(sessionStorage.getItem("Token"))
  return  <userContext.Provider value={{token,setToken}}>
                {children}
  </userContext.Provider>
}
