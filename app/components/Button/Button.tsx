import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

const Button = ({
  onClick,
  children,
  variant,
  size,
  disabled,
  type,
}: {
  onClick: () => void;
  children: React.ReactNode;
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${styles.container} ${styles[variant]} ${styles[size]}`}
    >
      {children}
    </button>
  );
};

export default Button;
