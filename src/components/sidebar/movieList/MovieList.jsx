import React from "react";
import Sidebar from "../Sidebar";
import MovieImage from '../../../assets/images/movie-1.png'
import Tag from '../../../assets/icons/tag.svg'
import Rating from '../../rating/Rating';
import { getAllMovies } from "../../../data/Movies";
import { getImgUrl } from "../../../utils/Cine-Utility";

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
                    <figure key={movie.id} className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                    <img
                      className="w-full object-cover"
                      src={getImgUrl(movie.cover)}
                      alt=""
                    />
                    <figcaption className="pt-4">
                      <h3 className="text-xl mb-1">{movie.title}</h3>
                      <p className="text-[#575A6E] text-sm mb-2">
                        {movie.genre}
                      </p>
                     <Rating />
                      <a
                        className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                        href="#"
                      >
                        <img src="./assets/tag.svg" alt="" />
                        <span>${movie.price} | Add to Cart</span>
                      </a>
                    </figcaption>
                  </figure> 
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
