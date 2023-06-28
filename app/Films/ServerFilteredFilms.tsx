"use client";

import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { IMovie } from "../types";
import ClientFiltredFilms from "./ClientFilteredFilms";

export const ServerFiltredFilms = () => {
  const theatreId = useAppSelector((state) => state.filters.theatreId);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `http://localhost:3001/api/movies${
          theatreId ? `?cinemaId=${theatreId}` : ""
        }`
      );
      const data = (await response.json()) as IMovie[];
      setLoading(false);
      setMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <>
      {loading ? <div>Loading...</div> : <ClientFiltredFilms films={movies} />}
    </>
  );
};
