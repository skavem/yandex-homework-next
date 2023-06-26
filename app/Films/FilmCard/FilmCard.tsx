"use client";

import React from "react";
import { IMovie } from "@/app/types";
import Card from "@/app/components/Card/Card";
import styles from "./FilmCard.module.css";
import Image from "next/image";
import Text from "@/app/components/Text/Text";
import TicketsCounter from "@/app/components/TicketsCounter/TicketsCounter";

const FilmCard = ({ movie, hidden }: { movie: IMovie; hidden?: boolean }) => {
  return (
    <Card
      className={`${styles["film-card"]} ${
        hidden ? styles["film-card--hidden"] : ""
      }`}
    >
      <Image
        src={movie.posterUrl}
        alt={movie.title}
        width={100}
        height={120}
        style={{ objectFit: "cover" }}
        className={styles["film-card__logo"]}
      />
      <div className={styles["film-card__info"]}>
        <Text element="h2" className={styles["film-card__info__title"]}>
          {movie.title}
        </Text>
        <Text element="body1" className={styles["film-card__info__genre"]}>
          {movie.genre}
        </Text>
      </div>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <TicketsCounter movieId={movie.id} />
      </div>
    </Card>
  );
};

export default FilmCard;
