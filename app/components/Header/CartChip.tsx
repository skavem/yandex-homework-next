"use client";
import { useAppSelector } from "@/app/redux/hooks";
import React from "react";
import Text from "../Text/Text";
import styles from "./CartChip.module.css";
import { Providers } from "@/app/redux/Provider";

const CartChip = () => {
  const tickets = useAppSelector((state) => state.cart.tickets);

  const count = Object.values(tickets).reduce(
    (acc, quantity) => acc + quantity,
    0
  );

  return (
    <div className={styles.chip}>
      <Text>{count}</Text>
    </div>
  );
};

const CartChipWrapper = () => {
  return (
    <Providers>
      <CartChip />
    </Providers>
  );
};

export default CartChipWrapper;
