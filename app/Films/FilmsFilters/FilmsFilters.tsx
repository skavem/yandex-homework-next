"use client";

import { Providers } from "@/app/redux/Provider";
import { Suspense } from "react";
import { ServerFiltredFilms } from "../ServerFilteredFilms";

const FilteredFilms = () => {
  return (
    <Providers>
      <Suspense fallback={<div>Loading...</div>}>
        <ServerFiltredFilms />
      </Suspense>
    </Providers>
  );
};

export default FilteredFilms;
