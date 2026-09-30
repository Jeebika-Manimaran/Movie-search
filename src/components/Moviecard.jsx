function Moviecard({ movie }) {
  return (
    <div className="card">
      <img
        src={movie.Poster}
        alt={movie.Title}
      />
      <h3>{movie.Title}</h3>
      <p>Year: {movie.Year}</p>
      <p>Type: {movie.Type}</p>
    </div>
  );
}
export default Moviecard;