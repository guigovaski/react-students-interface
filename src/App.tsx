import { useState } from "react";
import { GlobalStyle } from "./styles/globalStyles";
import Routes from "./routes";
import { createContext } from "react";

type ContextData = {}

export const Context = createContext<ContextData>({} as ContextData);

function App() {
  return (
    <>
    <Context.Provider value={{}}>
      <GlobalStyle />
      <Routes />
    </Context.Provider>
    </>
  );
}

export default App;
