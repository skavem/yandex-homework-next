import Card from "@/app/components/Card/Card";
import { IMovie } from "@/app/types";
import React from "react";
import styles from "./FullFilmCard.module.css";
import Image from "next/image";
import Text from "@/app/components/Text/Text";
import TicketsCounterWrapper from "@/app/components/TicketsCounter/TicketsCounterWrapper";

const DataLine = ({
  dataKey,
  value,
}: {
  dataKey: string;
  value: string | number;
}) => {
  return (
    <div className={styles["data-line"]}>
      <Text fontWeight={600} fontSize={"1.25rem"}>
        {dataKey}:
      </Text>
      <Text fontSize={"1.25rem"}>{value}</Text>
    </div>
  );
};

const FullFilmCard = ({ film }: { film: IMovie }) => {
  return (
    <Card>
      <div className={styles.container}>
        <div className={styles.poster}>
          <Image src={film.posterUrl} alt={film.title} fill />
        </div>

        <div className={styles.info}>
          <div className={styles.title}>
            <Text element="h1" fontSize={"2rem"} fontWeight={600}>
              {film.title}
            </Text>
            <TicketsCounterWrapper movieId={film.id} />
          </div>

          <div className={styles.data}>
            <DataLine dataKey="Жанр" value={film.genre} />
            <DataLine dataKey="Год выпуска" value={film.releaseYear} />
            <DataLine dataKey="Рейтинг" value={film.rating} />
            <DataLine dataKey="Режиссер" value={film.director} />
          </div>

          <Text fontWeight={600} fontSize={"1.25rem"}>
            Описание
          </Text>
          <Text className={styles.description}>{film.description}</Text>
        </div>
      </div>
    </Card>
  );
};

FullFilmCard.DataLine = DataLine;

export default FullFilmCard;
