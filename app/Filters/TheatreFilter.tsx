"use client"

import { SearchFilterSelect } from "../components/SearchFilter/SearchFilter";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { filtersActions } from "../redux/slices/filtersSlice";
import { ICinema } from "../types";

const TheatreFilter = ({ theatres }: { theatres: ICinema[] }) => {
  const theatre = useAppSelector((state) => state.filters.theatre);
  const dispatch = useAppDispatch();

  return (
    <SearchFilterSelect
      options={theatres.map((theatre) => theatre.name)}
      value={theatre || ""}
      onChange={(e) => dispatch(filtersActions.setTheatre(e.target.value))}
      onSelect={(option) => {
        dispatch(filtersActions.setTheatre(option));
        const theatreId = theatres.find((theatre) => theatre.name === option)
          ?.id!;
        dispatch(filtersActions.setTheatreId(theatreId));
      }}
      placeholder="Выберите кинотеатр"
      title="Кинотеатр"
    />
  );
};

const TheatreFilterWrapper = async () => {
  const theatres = (await (
    await fetch("http://localhost:3001/api/cinemas")
  ).json()) as ICinema[];

  return <TheatreFilter theatres={theatres} />;
};

export default TheatreFilterWrapper