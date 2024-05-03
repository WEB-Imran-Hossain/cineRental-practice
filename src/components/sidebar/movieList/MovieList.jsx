import React from "react";
import Sidebar from "../Sidebar";
import { getAllMovies } from "../../../data/Movies";
import MovieCard from "../../movieCard/MovieCard";

const MovieList = () => {
  const movies = getAllMovies();
  return (
    <>
      {/* Begin Main */}
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          {/* Sidebar */}
          <aside>
            <Sidebar />
          </aside>

          {/* Content */}
          <div className="content">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
            {/* Begin Card */}
            {
                movies.map(movie=>(
                   <MovieCard key={movie.id} movie={movie}/>
                ))
            }
          
          {/* End Card */}

         
            </div>
          </div>
        </div>
      </main>
      {/* End Main */}
    </>
  );
};

export default MovieList;
