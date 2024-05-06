import { useContext } from "react";
import React from "react";
import { useState } from "react";
import Rating from "../rating/Rating";
import { getImgUrl } from "../../utils/Cine-Utility";
import MovieDetailsModal from "../movie-details-modal/MovieDetailsModal";
import { MovieContext } from "../../context";
import { toast } from "react-toastify";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { state, dispatch } = useContext(MovieContext);

  function handleAddToCart(event, movie) {
    event.stopPropagation();
    const found = state.cartData.find((item) => {
      return item.id === movie.id;
    });


    if(!found){
      // setCartData([...cartData, movie]) //no use never if you use dispatch
dispatch({
  type: "ADD_TO_CART", 
  payload: {
    ...movie
  }
})

toast.success(`Movie ${movie.title} added successfully`, {
  position: toast.POSITION.BOTTOM_RIGHT,
})

    }else {
      toast.error(`Movie ${movie.title} has been added to the cart already`,{
        position: toast.POSITION.BOTTOM_RIGHT
      })
    }
  }

  function handleModalClose() {
    setSelectedMovie(null);
    setShowModal(false);
  }

  function handleMovieSelection() {
    setSelectedMovie(movie);
    setShowModal(true);
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal 
        movie={selectedMovie} 
        onClose={handleModalClose} 
        onCartAdd={handleAddToCart}/>
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
