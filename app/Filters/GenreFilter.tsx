"use client"

import { SearchFilterSelect } from "../components/SearchFilter/SearchFilter";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { filtersActions } from "../redux/slices/filtersSlice";

export const GenreFilter = () => {
  const genre = useAppSelector((state) => state.filters.genre);
  const genreList = useAppSelector((state) => state.filters.genreList);
  const dispatch = useAppDispatch();

  return (
    <SearchFilterSelect
      options={genreList}
      value={genre || ""}
      onChange={(e) => dispatch(filtersActions.setGenre(e.target.value))}
      onSelect={(option) => dispatch(filtersActions.setGenre(option))}
      placeholder="Выберите жанр"
      title="Жанр"
    />
  );
};

export default GenreFilter;
