import React, { Fragment, useContext } from "react";
import FavoriteContext from "../context/FavoriteContext";

function Favorite() {
  const { favMovies } = useContext(FavoriteContext);
  const baseImg = process.env.REACT_APP_IMAGE_BASE;
  return (
    <Fragment>
      <div>
        <div>
          <div className="bg-white py-6 dark:bg-slate-800 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="mb-6 flex items-end justify-between gap-4">
                <h2 className="text-2xl font-bold text-slate-700 dark:text-white lg:text-3xl">Favorites Movies</h2>
              </div>
              <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
                {favMovies.map((item) => (
                  <div key={item.id}>
                    <div className="h-100 group mb-2 block overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                      <img aria-hidden src={baseImg + item.item.poster_path} loading="lazy" alt="/" className="h-90 w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    </div>
                    <div className="flex flex-col text-center">
                      <div className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 dark:text-white lg:text-xl">{item.item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Favorite;
