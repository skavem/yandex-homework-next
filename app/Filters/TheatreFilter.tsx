"use client";

import { SearchFilterSelect } from "../components/SearchFilter/SearchFilter";
import useLoadData from "../hooks/useLoadData";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { filtersActions } from "../redux/slices/filtersSlice";
import { ICinema } from "../types";

const TheatreFilter = () => {
  const theatre = useAppSelector((state) => state.filters.theatre);
  const dispatch = useAppDispatch();
  const {
    data: theatres,
    error,
    isLoading,
  } = useLoadData<ICinema[]>({
    url: "http://localhost:3001/api/cinemas",
  });

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : !theatres || error ? (
        <div>Error</div>
      ) : (
        <SearchFilterSelect
          options={theatres.map((theatre) => theatre.name)}
          value={theatre || ""}
          onChange={(e) => dispatch(filtersActions.setTheatre(e.target.value))}
          onSelect={(option) => {
            dispatch(filtersActions.setTheatre(option));
            const theatreId = theatres.find(
              (theatre) => theatre.name === option
            )?.id!;
            dispatch(filtersActions.setTheatreId(theatreId));
          }}
          placeholder="Выберите кинотеатр"
          title="Кинотеатр"
        />
      )}
    </>
  );
};

export default TheatreFilter;
