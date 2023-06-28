"use client";

import { SearchFilterInput } from "@/components/SearchFilter/SearchFilter";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { filtersActions } from "@/redux/slices/filtersSlice";

const TitleFilter = () => {
  const title = useAppSelector((state) => state.filters.title);
  const dispatch = useAppDispatch();

  return (
    <SearchFilterInput
      value={title || ""}
      onChange={(value: string) => dispatch(filtersActions.setTitle(value))}
      placeholder="Введите название"
      title="Название"
    />
  );
};

export default TitleFilter;
