function Searchbar({ movie, setMovie, searchMovie }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter movie name"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />
      <button onClick={searchMovie}>Search</button>
    </div>
  );
}
export default Searchbar;