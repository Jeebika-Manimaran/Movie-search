import { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Moviecard from "./components/Moviecard";
function App() {
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState([]);
  const searchMovie = () => {
    fetch(`https://www.omdbapi.com/?s=${movie}&apikey=${import.meta.env.VITE_API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      });
  };
  return (
    <div>
      <h1>Movie Explorer</h1>
      <Searchbar movie={movie} setMovie={setMovie} searchMovie={searchMovie} />
      <div className="movies">
        {movies.map((item) => (
          <Moviecard key={item.imdbID} movie={item} />
        ))}
      </div>
    </div>
  );
}
export default App;
