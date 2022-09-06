import React, { Fragment } from "react";

const Cardcontent = ({ src, title, onClickDetail, onClickFavorite, goToFavorite }) => {
  return (
    <Fragment>
      {/* <!-- Awal Cardcontent --> */}
      <div>
        <div>
          <div className="h-100 group mb-2 block overflow-hidden rounded-lg bg-gray-100 shadow-lg hover:cursor-pointer lg:mb-3" onClick={onClickDetail}>
            <img aria-hidden src={src} loading="lazy" alt="/" className="h-90 w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </div>

          <div className="flex flex-col text-center">
            <div className="text-lg font-bold text-gray-800 transition duration-100 hover:cursor-pointer hover:text-gray-500 dark:text-white lg:text-xl" onClick={onClickDetail}>
              {title}
            </div>
            <div className="mt-3 flex justify-around gap-3">
              <button className="h-9 w-1/2 rounded bg-indigo-600 text-neutral-300 hover:bg-indigo-500 dark:bg-slate-700 dark:hover:bg-slate-600" onClick={onClickFavorite}>
                Add To Favorite
              </button>
              <button className="h-9 w-1/2 rounded bg-indigo-600 text-neutral-300 hover:bg-indigo-500 dark:bg-slate-700 dark:hover:bg-slate-600" onClick={goToFavorite}>
                Go To Favorite
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Akhir Cardcontent --> */}
    </Fragment>
  );
};

export default Cardcontent;
