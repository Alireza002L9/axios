import { createContext, useState } from "react";

export const appContext = createContext()

function ContextState({children}) {
  const [commentData, setCommentData] = useState([])

  return(
    <appContext.Provider value={{commentData, setCommentData}}>
      {children}
    </appContext.Provider>
  )
}
export default ContextState