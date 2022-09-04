import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  return (
    <Fragment>
      <div className="bg-white py-6 dark:bg-slate-800 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className=" container mb-5 max-w-full justify-center gap-6 lg:flex">
            <div className=" flex basis-1/2 justify-center p-16 text-center text-2xl font-bold text-white">
              <div className="container group">
                <img
                  src={location.state.image}
                  alt="Random Images"
                  className="self-center rounded-lg border-8 border-indigo-500 object-cover object-center drop-shadow-xl transition duration-200 group-hover:scale-110 dark:border-slate-600 "
                />
              </div>
            </div>
            <div className="flex basis-2/5 rounded bg-indigo-500 shadow-lg drop-shadow-lg dark:bg-slate-700">
              <ul className="flex flex-col gap-y-6 py-10 px-5 text-slate-700 dark:text-neutral-300">
                <li className="text-2xl font-bold tracking-wider text-white dark:text-neutral-300">{location.state.title}</li>
                <hr className="border-t-2 border-white  p-0 dark:border-slate-500 " />
                <li className="text-white dark:text-neutral-300">
                  <span className="text-lg font-bold">Relese Dates :</span> {location.state.release}
                </li>
                <hr className="border-t-2 border-white  p-0 dark:border-slate-500 " />
                <li className="text-white dark:text-neutral-300">
                  <span className="text-lg font-bold">Popularity :</span> {location.state.popularity}
                </li>
                <hr className="border-t-2 border-white  p-0 dark:border-slate-500 " />
                <li className="text-white dark:text-neutral-300">
                  <p className="text-2xl font-semibold text-white dark:text-neutral-300">Synopsis</p>
                  <br />
                  <p className="text-justify text-neutral-200">{location.state.synopsis}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Details;
