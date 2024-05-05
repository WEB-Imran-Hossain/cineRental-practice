import { useContext } from "react";
import { ThemeContext } from "../context/index.js";

import Header from "./shared/Header.jsx";
import Footer from "./shared/Footer.jsx";
import MovieList from "./sidebar/movieList/MovieList.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";

export default function Page() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={` h-full w-full ${darkMode ? "dark" : ""}`}>
    <Header />
    <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
        </div>
    </main>
    <Footer />
</div>
  );
}
