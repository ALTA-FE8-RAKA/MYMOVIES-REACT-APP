import axios from "axios";
import React, { Component, Fragment } from "react";
import Cardcontent from "./Cardcontent";

// const urlbase = "https://api.themoviedb.org/3/movie/";
// const urlHeadLine = `${urlbase}now_playing?api_key=${process.env.REACT_APP_API_KEY}`;
// ini gak work
const imgUrl = "https://image.tmdb.org/t/p/original/";

export default class Body extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const self = this;
    axios
      .get("https://api.themoviedb.org/3/movie/now_playing?api_key=89c26488d2f4730b9c30aaa2815ae840")
      .then((res) => {
        self.setState({
          movies: res.data.results,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  render() {
    // const movies = [
    //   {
    //     movieId: "1",
    //     image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/avengers_dfadf6a4-f8f7-4363-a141-67131fe9d9dd_500x749.jpg?v=1652292777",
    //     title: "Avengers",
    //   },
    //   {
    //     movieId: "2",
    //     image: "//cdn.shopify.com/s/files/1/0057/3728/3618/products/1a59eba7c54a8ec6a83dc245bfab3880_66ea66d0-f642-48e5-9eab-471c05527da0_480x.progressive.jpg?v=1573590182",
    //     title: "Avengers Age Of Ultron",
    //   },
    //   {
    //     movieId: "3",
    //     image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/avengers-infinity-war_89e0d364_500x749.jpg?v=1631200474",
    //     title: "Avengers Infinity War",
    //   },
    //   {
    //     movieId: "4",
    //     image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/e9ee9896b5f53928b73097566a48f4d0_b6e23fef-e1e3-47d4-9085-811b4481ebb0_500x749.jpg?v=1573652578",
    //     title: "Avengers Endgame",
    //   },
    //   {
    //     movieId: "5",
    //     image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/harry-potter-and-the-sorcerers-stone_1fe9c4a4_500x749.jpg?v=1625679795",
    //     title: "Harry Potter And The Sorcerer's Stone",
    //   },
    //   {
    //     movieId: "6",
    //     image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/718090_2725999_500x749.jpg?v=1649430782",
    //     title: "Harry Potter And The Chamber Of Secrets",
    //   },
    //   {
    //     movieId: "7",
    //     image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/82807c4134e5dc66d419300f594dc453_f5f8a1a7-7861-4469-8531-037df6413eaf_500x749.jpg?v=1573595031",
    //     title: "Harry Potter And The Prisoner Of Azkaban",
    //   },
    //   {
    //     movieId: "8",
    //     image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/718098_2675809_500x749.jpg?v=1658756195",
    //     title: "Harry Potter And The Goblet Of Fire",
    //   },
    //   {
    //     movieId: "9",
    //     image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6a3bac95eaa32830b4863c9c36af4fb2_c0f1c6d3-4fe5-4441-9c9d-e6c786d294db_500x749.jpg?v=1573615858",
    //     title: "Harry Potter And The Order Of The Phoenix",
    //   },
    //   {
    //     movieId: "10",
    //     image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/2f6f386da7d4ca0c22c6f9cfabf945d8_89350d02-b658-4cd9-b377-97d207abffed_500x749.jpg?v=1573652460",
    //     title: "Harry Potter And The Half-Blood Prince",
    //   },
    //   {
    //     movieId: "11",
    //     image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9c0a783505db76a3e8f709112839fb87_8bf7b3a9-5997-499a-bc1e-7f6d0a6b4087_500x749.jpg?v=1573590479",
    //     title: "Harry Potter And The Deathly Hallows - Part 1",
    //   },
    //   {
    //     movieId: "12",
    //     image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/b5d9f2c9dead0bb35a747c3e37fd7e11_64552931-e74b-4be7-b3b3-e105fe13d737_500x749.jpg?v=1573592581",
    //     title: "Harry Potter And The Deathly Hallows - Part 2",
    //   },
    // ];
    const { movies } = this.state;
    let url = "#";
    return (
      <Fragment>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div className="flex justify-between items-end gap-4 mb-6">
              <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">Now Playing</h2>

              <a
                href={url}
                className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
              >
                Show more
              </a>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-6">
              {movies.map((item) => {
                return <Cardcontent key={item.id} src={imgUrl + item.poster_path} title={item.title} />;
              })}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
