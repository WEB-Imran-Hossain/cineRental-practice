import React from 'react';
import Sidebar from '../Sidebar';
import MovieCard from '../../movieCard/MovieCard';

const MovieList = () => {
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
         <MovieCard />
        </div>
      </div>
    </div>
  </main>
  {/* End Main */}
</>

    );
};

export default MovieList;