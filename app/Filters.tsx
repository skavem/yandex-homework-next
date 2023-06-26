"use client";

import React, { Suspense } from "react";
import { Providers } from "./redux/Provider";
import styles from "./Filters.module.css";
import TitleFilter from "./Filters/TitleFilter";
import GenreFilter from "./Filters/GenreFilter";
import TheatreFilterWrapper from "./Filters/TheatreFilter";

export const Filters = () => {
  return (
    <Providers>
      <div className={styles.container}>
        <TitleFilter />
        <GenreFilter />
        <Suspense fallback={<div>Loading...</div>}>
          <TheatreFilterWrapper />
        </Suspense>
      </div>
    </Providers>
  );
};

export default Filters;
