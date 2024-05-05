import { useContext } from "react";
import { ThemeContext } from "../context/index.js";

import Header from "./shared/Header.jsx";
import Footer from "./shared/Footer.jsx";
import MovieList from "./sidebar/movieList/MovieList.jsx";

export default function Page() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <Header />
      <MovieList />
      <Footer />
    </div>
  );
}
