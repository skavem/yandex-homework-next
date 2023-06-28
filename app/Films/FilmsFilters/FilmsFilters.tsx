import { Providers } from "@/app/redux/Provider";
import { ServerFiltredFilms } from "../ServerFilteredFilms";

const FilteredFilms = () => {
  return (
    <Providers>
      <ServerFiltredFilms />
    </Providers>
  );
};

export default FilteredFilms;
