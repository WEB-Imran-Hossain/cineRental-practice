import { getAllMovies } from "../../../data/Movies";
import MovieCard from "../../movieCard/MovieCard";

const MovieList = () => {
  const movies = getAllMovies();
  return (
    <>
          {/* Content */}
          <div className="content">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
            {/* Begin Card */}
            {
                movies.map(movie=>(
                   <MovieCard key={movie.id} movie={movie}/>
                ))
            }
            </div>
          </div>
       
      
    </>
  );
};

export default MovieList;
