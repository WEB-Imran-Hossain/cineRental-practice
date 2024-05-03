import React from 'react';


const MovieCard = () => {
    return (
        <>
             {/* Begin Card */}
          <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <img
              className="w-full object-cover"
              src={MovieImage}
              alt=""
            />
            <figcaption className="pt-4">
              <h3 className="text-xl mb-1">Iron Man</h3>
              <p className="text-[#575A6E] text-sm mb-2">
                Action/Adventure/Sci-fi
              </p>
             <Rating />
              <a
                className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                href="#"
              >
                <img src="./assets/tag.svg" alt="" />
                <span>$100 | Add to Cart</span>
              </a>
            </figcaption>
          </figure>
          {/* End Card */}
          {/* Begin Card */}
          <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <img
              className="w-full object-cover"
              src={MovieImage}
              alt=""
            />
            <figcaption className="pt-4">
              <h3 className="text-xl mb-1">Iron Man</h3>
              <p className="text-[#575A6E] text-sm mb-2">
                Action/Adventure/Sci-fi
              </p>
              <Rating />
              <a
                className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                href="#"
              >
                <img src="./assets/tag.svg" alt="" />
                <span>$100 | Add to Cart</span>
              </a>
            </figcaption>
          </figure>
          {/* End Card */}
          {/* Begin Card */}
          <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <img
              className="w-full object-cover"
              src={MovieImage}
              alt=""
            />
            <figcaption className="pt-4">
              <h3 className="text-xl mb-1">Iron Man</h3>
              <p className="text-[#575A6E] text-sm mb-2">
                Action/Adventure/Sci-fi
              </p>
              <Rating />
              <a
                className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                href="#"
              >
                <img src="./assets/tag.svg" alt="" />
                <span>$100 | Add to Cart</span>
              </a>
            </figcaption>
          </figure>
          {/* End Card */}
          {/* Begin Card */}
          <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <img
              className="w-full object-cover"
              src={MovieImage}
              alt=""
            />
            <figcaption className="pt-4">
              <h3 className="text-xl mb-1">Iron Man</h3>
              <p className="text-[#575A6E] text-sm mb-2">
                Action/Adventure/Sci-fi
              </p>
              <Rating />
              <a
                className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                href="#"
              >
                <img src="./assets/tag.svg" alt="" />
                <span>$100 | Add to Cart</span>
              </a>
            </figcaption>
          </figure>
          {/* End Card */}
          {/* Begin Card */}
          <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <img
              className="w-full object-cover"
              src={MovieImage}
              alt=""
            />
            <figcaption className="pt-4">
              <h3 className="text-xl mb-1">Iron Man</h3>
              <p className="text-[#575A6E] text-sm mb-2">
                Action/Adventure/Sci-fi
              </p>
              <Rating />
              <a
                className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                href="#"
              >
                <img src="./assets/tag.svg" alt="" />
                <span>$100 | Add to Cart</span>
              </a>
            </figcaption>
          </figure>
          {/* End Card */}
          {/* Begin Card */}
          <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <img
              className="w-full object-cover"
              src={MovieImage}
              alt=""
            />
            <figcaption className="pt-4">
              <h3 className="text-xl mb-1">Iron Man</h3>
              <p className="text-[#575A6E] text-sm mb-2">
                Action/Adventure/Sci-fi
              </p>
              <Rating />
              <a
                className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                href="#"
              >
                <img src={Tag} alt="" />
                <span>$100 | Add to Cart</span>
              </a>
            </figcaption>
          </figure>
          {/* End Card */}
        </>
    );
};

export default MovieCard;