"use client";

import React from "react";
import Card from "@/components/Card/Card";
import styles from "./FilmCard.module.css";
import skeletonStyles from "@/components/skeleton.module.css";

const FilmCardSkeleton = () => {
  return (
    <Card className={`${styles["film-card"]}`}>
      <div
        className={`${styles["logo-skeleton"]} ${skeletonStyles["skeleton"]}`}
      />
      <div className={styles["info"]}>
        <div
          className={`${styles["title-skeleton"]} ${skeletonStyles["skeleton"]}`}
        />
        <div
          className={`${styles["genre-skeleton"]} ${skeletonStyles["skeleton"]}`}
        />
      </div>
    </Card>
  );
};

export default FilmCardSkeleton;
