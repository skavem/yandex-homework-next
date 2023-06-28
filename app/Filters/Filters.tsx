import React, { Suspense } from "react";
import { Providers } from "../redux/Provider";
import styles from "./Filters.module.css";
import TitleFilter from "./TitleFilter";
import GenreFilter from "./GenreFilter";
import TheatreFilter from "./TheatreFilter";

export const Filters = () => {
  return (
    <Providers>
      <div className={styles.container}>
        <TitleFilter />
        <GenreFilter />
        <TheatreFilter />
      </div>
    </Providers>
  );
};

export default Filters;
