import React from "react";
import styles from "./AccordionElement.module.css";
import Image from "next/image";
import ArrowIcon from "@/public/images/icons-arrow.svg";

const AccordionElement = ({
  question,
  children,
}: React.PropsWithChildren<{
  question: string;
}>) => {
  return (
    <details className={styles.accordion}>
      <summary className={styles.accordion__summary}>
        <span className={styles.accordion__question}>{question}</span>
        <Image src={ArrowIcon} alt="" className={styles.accordion__icon} />
      </summary>
      <p className={styles.accordion__text}>{children}</p>
    </details>
  );
};

export default AccordionElement;
