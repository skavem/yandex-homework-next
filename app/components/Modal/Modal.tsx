import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import Text from "../Text/Text";
import Image from "next/image";
import CloseIcon from "@/public/images/icons-close.svg";

const Modal = ({
  isOpen,
  onClose,
  children,
  className,
  style,
  title,
}: {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.contents} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <Text element="h2">{title}</Text>
          <Image src={CloseIcon} alt="close" onClick={onClose} height={12} />
        </div>
        <div className={className} style={style}>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export const useModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return { isOpen, open, close };
};

export default Modal;
