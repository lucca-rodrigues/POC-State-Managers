import { useMovies } from "./store/movies";
import "./styles.css";

export const MovieList = () => {
  const { data, isLoading, error } = useMovies();

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error.message}</div>;

  return (
    <div>
      <h1>Filmes Populares</h1>
      <div className="movie-list-container">
        <ul className="movie-list">
          {data.results.map((movie) => (
            <li key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} width={200} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
