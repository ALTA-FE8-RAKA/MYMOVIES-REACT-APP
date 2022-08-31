import React, { Component, Fragment } from "react";

export default class Cardcontent extends Component {
  render() {
    let url = "#";
    return (
      <Fragment>
        {/* <!-- Awal Cardcontent --> */}
        <div>
          <a href={url} className="group h-100 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3">
            <img aria-hidden src={this.props.src} loading="lazy" alt="/" className="w-full h-90 object-cover object-center group-hover:scale-110 transition duration-200" />
          </a>

          <div className="flex flex-col text-center">
            <a href={url} className="text-gray-800 dark:text-white hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100">
              {this.props.title}
            </a>
          </div>
        </div>
        {/* <!-- Akhir Cardcontent --> */}
      </Fragment>
    );
  }
}
