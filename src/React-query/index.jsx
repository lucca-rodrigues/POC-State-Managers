import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Component } from "./component";
import { MovieList } from "./moviesComponent";

export function ReactQuery() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Component />
      <MovieList />
    </QueryClientProvider>
  );
}
