import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import cart from "@/public/images/icons-basket.svg";
import Link from "next/link";
import CartChipWrapper from "./CartChip";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href={"/"}>
        <p className={styles.header__title}>Билетопоиск</p>
      </Link>
      <Link href={"/cart"}>
        <div className={styles.header__cart_wrapper}>
          <CartChipWrapper />
          <Image src={cart} alt="корзина" className={styles.header__cart} />
        </div>
      </Link>
    </div>
  );
};

export default Header;
