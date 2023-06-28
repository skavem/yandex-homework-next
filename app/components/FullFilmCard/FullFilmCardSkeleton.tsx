import React from "react";
import Card from "@/components/Card/Card";
import styles from "./FullFilmCard.module.css";
import skeleton from "@/components/skeleton.module.css";

const FullFilmCardSkeleton = () => {
  return (
    <Card>
      <div className={`${styles.container}`}>
        <div
          className={`${skeleton.skeleton} ${styles["poster-skeleton"]}`}
        ></div>
      </div>
    </Card>
  );
};

export default FullFilmCardSkeleton;
