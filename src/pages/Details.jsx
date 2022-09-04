import React, { Component, Fragment } from "react";
import { withRouter } from "../withRouter";

class Details extends Component {
  render() {
    return (
      <Fragment>
        <div className="bg-white py-6 dark:bg-slate-800 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className=" container mb-5 max-w-full justify-center gap-6 sm:flex">
              <div className="w-70 h-50 my-5 flex basis-1/2 justify-center text-center text-2xl font-bold text-white">
                <div className="rounded-lg border-8 border-indigo-500 drop-shadow-xl dark:border-slate-600">
                  <img src={this.props.location.state.image} alt="Random Images" className=" h-[700px] w-[500px] self-center  drop-shadow-xl" />
                </div>
              </div>
              <div className="basis-2/5 rounded bg-indigo-500 shadow-lg dark:bg-slate-700">
                <ul className="flex flex-col gap-y-11 px-5 py-11 text-slate-700 dark:text-neutral-300">
                  <li className="text-2xl font-bold tracking-wider text-white dark:text-neutral-300">{this.props.location.state.title}</li>
                  <hr className="border-t-2 border-white  p-0 dark:border-slate-500 " />
                  <li className="text-white dark:text-neutral-300">
                    <span className="text-lg font-bold">Relese Dates :</span> {this.props.location.state.release}
                  </li>
                  <hr className="border-t-2 border-white  p-0 dark:border-slate-500 " />
                  <li className="text-white dark:text-neutral-300">
                    <span className="text-lg font-bold">Popularity :</span> {this.props.location.state.popularity}
                  </li>
                  <hr className="border-t-2 border-white  p-0 dark:border-slate-500 " />
                  <li className="text-white dark:text-neutral-300">
                    <p className="text-2xl font-semibold text-white dark:text-neutral-300">Synopsis</p>
                    <br />
                    <p className="text-justify text-neutral-200">{this.props.location.state.synopsis}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Details);
