"use client";
import { Providers } from "@/redux/Provider";

import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { IMovie } from "@/app/types";
import ClientFiltredFilms from "@/app/Films/ClientFilteredFilms";
import FilmCardSkeleton from "./FilmCard/FilmCardSkeleton";
import styles from "./Films.module.css";

export const ServerFiltredFilms = () => {
  const theatreId = useAppSelector((state) => state.filters.theatreId);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
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
  }, [theatreId]);

  return (
    <>
      {loading ? (
        <div className={styles["films-container"]}>
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <FilmCardSkeleton key={i} />
            ))}
        </div>
      ) : (
        <ClientFiltredFilms films={movies} />
      )}
    </>
  );
};

const FilteredFilms = () => {
  return (
    <Providers>
      <ServerFiltredFilms />
    </Providers>
  );
};

export default FilteredFilms;
