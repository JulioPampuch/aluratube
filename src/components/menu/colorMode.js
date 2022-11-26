import React, { useState } from "react"

export const ColorModeContext = React.createContext({
  mode: "",
  setMode: () => {alert("")}
})

const ColorModeProvider = (props) => {
  const [mode, setMode] = useState(props.initialMode)
  return (
    <ColorModeContext.Provider value={{ mode: mode, setMode: setMode }}>
      {props.children}
    </ColorModeContext.Provider>
  )
}

export default ColorModeProvider
