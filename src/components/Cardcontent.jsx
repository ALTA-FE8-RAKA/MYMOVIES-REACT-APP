import React, { Component, Fragment } from "react";
import { withRouter } from "../withRouter";

class Cardcontent extends Component {
  render() {
    return (
      <Fragment>
        {/* <!-- Awal Cardcontent --> */}
        <div>
          <div>
            <div className="h-100 group mb-2 block overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3" onClick={this.props.onClick}>
              <img aria-hidden src={this.props.src} loading="lazy" alt="/" className="h-90 w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </div>

            <div className="flex flex-col text-center">
              <div className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 dark:text-white lg:text-xl" onClick={this.props.onClick}>
                {this.props.title}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Akhir Cardcontent --> */}
      </Fragment>
    );
  }
}

export default withRouter(Cardcontent);
