import { useQuery } from "@tanstack/react-query";

const MOVIES_KEY = "popularMovies";
const API_KEY = import.meta.env.VITE_MOVIES_KEY;

const fetchMovies = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useMovies = () => {
  return useQuery({
    queryKey: [MOVIES_KEY],
    queryFn: fetchMovies,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
