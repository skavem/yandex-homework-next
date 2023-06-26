"use client";

import React, { useEffect } from "react";
import FilmCard from "./FilmCard/FilmCard";
import { IMovie } from "../types";
import styles from "./Films.module.css";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { filtersActions } from "../redux/slices/filtersSlice";

const ClientFiltredFilms = ({ films }: { films: IMovie[] }) => {
  const titleFilter = useAppSelector((state) => state.filters.title);
  const genreFilter = useAppSelector((state) => state.filters.genre);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      filtersActions.setGenreList(
        Array.from(new Set(films.map((f) => f.genre)))
      )
    );
  }, [dispatch, films]);

  return (
    <div className={styles["films-container"]}>
      {films.map((film) => {
        const hiddenByTitle =
          titleFilter &&
          !film.title
            .toLocaleLowerCase()
            .includes(titleFilter.toLocaleLowerCase());

        const hiddenByGenre =
          genreFilter &&
          !film.genre
            .toLocaleLowerCase()
            .includes(genreFilter.toLocaleLowerCase());

        return (
          <FilmCard
            key={film.id}
            movie={film}
            hidden={Boolean(hiddenByTitle || hiddenByGenre)}
          />
        );
      })}
    </div>
  );
};

export default ClientFiltredFilms