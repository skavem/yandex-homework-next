import React, { ReactElement } from "react";
import styles from "./Card.module.css";

const Card = ({
  children,
  className,
}: React.PropsWithChildren<{
  className?: string;
}>) => {
  return <div className={`${styles.card} ${className || ""}`}>{children}</div>;
};

const Header = ({
  children,
  className,
  style,
  component,
}: React.PropsWithChildren<{
  className?: string;
  style?: React.CSSProperties;
  component?: React.ElementType;
}>) => {
  return React.createElement(
    component || "p",
    {
      className,
      style,
    },
    children
  );
};
Card.Header = Header;

export default Card;
