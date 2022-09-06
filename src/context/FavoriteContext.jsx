import { createContext, useState } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favMovies, setFavMovies] = useState([]);

  const addToFavorites = (item) => {
    setFavMovies((prevState) => [...prevState, { item }]);
  };

  return <FavoriteContext.Provider value={{ favMovies, addToFavorites }}>{children}</FavoriteContext.Provider>;
}

export default FavoriteContext;
