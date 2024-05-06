import { useReducer, useState } from "react";
import "./App.css";
import Page from "./components/Page";

import { MovieContext, ThemeContext } from "./context";
import { cartReducer, initialState } from "./reducers/CardReducer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
