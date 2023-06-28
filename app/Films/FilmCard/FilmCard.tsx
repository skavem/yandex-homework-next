import React from "react";
import { IMovie } from "@/app/types";
import Card from "@/components/Card/Card";
import styles from "./FilmCard.module.css";
import Image from "next/image";
import Text from "@/components/Text/Text";
import TicketsCounter from "@/components/TicketsCounter/TicketsCounter";
import DeleteIcon from "@/public/images/icons-close.svg";
import Link from "next/link";

const FilmCard = ({
  movie,
  hidden,
  onDelete,
}: {
  movie: IMovie;
  hidden?: boolean;
  onDelete?: (movie: IMovie) => void;
}) => {
  return (
    <Card
      className={`${styles["film-card"]} ${
        hidden ? styles["film-card--hidden"] : ""
      }`}
    >
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={movie.posterUrl}
          alt={movie.title}
          width={100}
          height={120}
          style={{ objectFit: "cover" }}
          className={styles["logo"]}
        />
      </Link>
      <div className={styles["info"]}>
        <Link href={`/movie/${movie.id}`}>
          <Text element="h2" className={styles["title"]}>
            {movie.title}
          </Text>
        </Link>
        <Text element="body1" className={styles["genre"]}>
          {movie.genre}
        </Text>
      </div>
      <div>
        <div className={styles["actions"]}>
          <TicketsCounter movieId={movie.id} onZero={() => onDelete?.(movie)} />
          {onDelete && (
            <>
              <button onClick={() => onDelete(movie)} className={styles.remove}>
                <Image
                  className={styles.remove__icon}
                  src={DeleteIcon}
                  alt="delete"
                  width={16}
                />
              </button>
            </>
          )}
        </div>
      </div>
    </Card>
  );
};

export default FilmCard;
