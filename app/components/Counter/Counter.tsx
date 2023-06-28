import React from "react";
import styles from "./Counter.module.css";
import Text from "../Text/Text";
import minusIcon from "@/public/images/buttons-icons-minus.svg";
import plusIcon from "@/public/images/buttons-icons-plus.svg";
import Image from "next/image";

const Counter = ({
  onDecrement,
  onIncrement,
  value = 0,
  minValue,
  maxValue,
}: {
  onDecrement: (e: React.MouseEvent) => void;
  onIncrement: (e: React.MouseEvent) => void;
  value?: number;
  minValue?: number;
  maxValue?: number;
}) => {
  return (
    <div className={styles.counter}>
      <button
        className={styles.button}
        disabled={minValue !== undefined && value <= minValue}
        onClick={onDecrement}
      >
        <Image src={minusIcon} alt="" className={styles.button__icon} />
      </button>
      <Text>{value}</Text>
      <button
        className={styles.button}
        onClick={onIncrement}
        disabled={maxValue !== undefined && value >= maxValue}
      >
        <Image src={plusIcon} alt="" className={styles.button__icon} />
      </button>
    </div>
  );
};

export default Counter;
