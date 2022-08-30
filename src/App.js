import React, { Component } from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Body />
      </>
    );
  }
}
