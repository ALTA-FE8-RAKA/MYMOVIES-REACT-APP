import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cardcontent from "../components/Cardcontent";

function Home() {
  const urlbase = "https://api.themoviedb.org/3/movie/";
  const urlHeadLine = `${urlbase}now_playing?api_key=${process.env.REACT_APP_API_KEY}`;
  const imgUrl = "https://image.tmdb.org/t/p/original/";
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getData();

    const checkbox = document.querySelector("#toggle");
    const html = document.querySelector("html");

    checkbox.addEventListener("click", function () {
      checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
    });
  }, []);

  const getData = async () => {
    await axios
      .get(urlHeadLine)
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleDetailPage = (item) => {
    navigate(`/details/${item.id}`, {
      state: {
        title: item.title,
        image: imgUrl + item.poster_path,
        synopsis: item.overview,
        release: item.release_date,
        popularity: item.popularity,
      },
    });
  };

  let url = "#";
  return (
    <Fragment>
      <div className="bg-white py-6 dark:bg-slate-800 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-slate-700 dark:text-white lg:text-3xl">Now Playing</h2>

            <a
              href={url}
              className="inline-block  rounded-lg border border-indigo-500 bg-white px-4 py-2 text-center text-sm font-semibold text-slate-500 outline-none ring-indigo-300 transition duration-100 hover:bg-slate-100 focus-visible:ring active:bg-slate-200 dark:border-slate-500 dark:bg-slate-500 dark:text-white dark:hover:bg-slate-700 md:px-8 md:py-3 md:text-base"
            >
              Show more
            </a>
          </div>
          <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            {movies.map((item) => {
              return (
                <div key={item.id}>
                  <Cardcontent src={imgUrl + item.poster_path} title={item.title} onClick={() => handleDetailPage(item)} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
