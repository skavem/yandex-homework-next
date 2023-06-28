"use client";

import React from "react";
import styles from "./Summary.module.css";
import { useAppSelector } from "../../redux/hooks";
import Text from "../Text/Text";
import { Providers } from "../../redux/Provider";

const Summary = () => {
  const tickets = useAppSelector((state) => state.cart.tickets);
  const total = Object.values(tickets).reduce(
    (acc, quantity) => acc + quantity,
    0
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Text>Итого билетов:</Text>
        <Text>{total}</Text>
      </div>
    </div>
  );
};

const SummaryWrapper = () => {
  return (
    <Providers>
      <Summary />
    </Providers>
  );
};

export default SummaryWrapper;
