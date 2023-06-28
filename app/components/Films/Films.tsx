"use client";

import { useAppSelector } from "../../redux/hooks";
import { Providers } from "../../redux/Provider";
import CartFilm from "./CartFilmCard";
import styles from "./Films.module.css";

const Films = () => {
  const tickets = useAppSelector((state) => state.cart.tickets);
  const filmIds = [...Object.keys(tickets)];

  return (
    <div className={styles.container}>
      {filmIds.map((id) => (
        <CartFilm movieId={id} key={id} />
      ))}
    </div>
  );
};

const FilmsWrapper = () => {
  return (
    <Providers>
      <Films />
    </Providers>
  );
};

export default FilmsWrapper;
