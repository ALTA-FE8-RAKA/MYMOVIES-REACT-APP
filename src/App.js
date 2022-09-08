import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import Favorite from "./pages/Favorite";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { FavoriteProvider } from "./context/FavoriteContext";

const App = () => {
  return (
    <>
      <FavoriteProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/favorites" element={<Favorite />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </FavoriteProvider>
    </>
  );
};

export default App;
