"use client"

import { useAppSelector } from "../redux/hooks";
import { IMovie } from "../types";
import ClientFiltredFilms from "./ClientFilteredFilms";

export const ServerFiltredFilms = async () => {
  const theatreId = useAppSelector((state) => state.filters.theatreId);

  const movies = (await (
    await fetch(
      `http://localhost:3001/api/movies${
        theatreId ? `?cinemaId=${theatreId}` : ""
      }`
    )
  ).json()) as IMovie[];

  return <ClientFiltredFilms films={movies} />;
};
