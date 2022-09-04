import axios from "axios";
import React, { Component, Fragment } from "react";
import { withRouter } from "../withRouter";
import Cardcontent from "../components/Cardcontent";

const urlbase = "https://api.themoviedb.org/3/movie/";
const urlHeadLine = `${urlbase}now_playing?api_key=${process.env.REACT_APP_API_KEY}`;
const imgUrl = "https://image.tmdb.org/t/p/original/";

class Home extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const self = this;
    axios
      .get(urlHeadLine)
      .then((res) => {
        self.setState({
          movies: res.data.results,
        });
      })
      .catch((err) => {
        alert(err.message);
      });

    const checkbox = document.querySelector("#toggle");
    const html = document.querySelector("html");

    checkbox.addEventListener("click", function () {
      checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
    });
  }

  handleDetailPage(item) {
    this.props.navigate("/details", {
      state: {
        title: item.title,
        image: imgUrl + item.poster_path,
        synopsis: item.overview,
        release: item.release_date,
        popularity: item.popularity,
      },
    });
  }

  render() {
    const { movies } = this.state;
    const listOfMovies = movies.map((item) => {
      return <Cardcontent key={item.id} src={imgUrl + item.poster_path} title={item.title} onClick={() => this.handleDetailPage(item)} />;
    });
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
            <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">{listOfMovies}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Home);
