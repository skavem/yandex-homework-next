"use client";

import { SearchFilterSelect } from "@/components/SearchFilter/SearchFilter";
import useLoadData from "@/hooks/useLoadData";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { filtersActions } from "../redux/slices/filtersSlice";
import { ICinema } from "@/app/types";
import skeleton from "@/components/skeleton.module.css";

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
        <div className={skeleton.skeleton}>
          <div
            style={{ width: "100%", height: "50px", marginTop: "0.5rem" }}
          ></div>
        </div>
      ) : !theatres || error ? (
        <div>Error</div>
      ) : (
        <SearchFilterSelect
          options={theatres.map((theatre) => theatre.name)}
          value={theatre || ""}
          onChange={(option) => {
            dispatch(filtersActions.setTheatre(option));
            const theatreId = theatres.find(
              (theatre) => theatre.name === option
            )?.id;
            dispatch(filtersActions.setTheatreId(theatreId || null));
          }}
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
