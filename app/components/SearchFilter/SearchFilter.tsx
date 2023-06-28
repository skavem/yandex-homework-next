import React from "react";
import styles from "./SearchFilter.module.css";
import Text from "../Text/Text";
import ArrowIcon from "@/public/images/icons-arrow.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import useDebounce from "@/app/hooks/useDebounce";

export const SearchFilterInput = ({
  title,
  placeholder,
  value,
  onChange,
}: {
  title: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) => {
  const [defaultValue, setDefaultValue] = useState(value);
  const debounced = useDebounce(defaultValue, 500);

  useEffect(() => {
    onChange(debounced);
  }, [debounced, onChange]);

  return (
    <div className={styles["filter"]}>
      <Text className={styles["title"]}>{title}</Text>
      <input
        value={defaultValue}
        onChange={(e) => setDefaultValue(e.target.value)}
        type="text"
        className={styles["input"]}
        placeholder={placeholder}
      />
    </div>
  );
};

const notSelectedOption = "Не выбрано";

export const SearchFilterSelect = ({
  title,
  placeholder,
  value,
  options,
  onChange,
  onSelect,
}: {
  title: string;
  placeholder: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  onSelect: (value: string) => void;
}) => {
  const [opened, setOpened] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [defaultValue, setDefaultValue] = useState(value);
  const debounced = useDebounce(defaultValue, 500);

  useEffect(() => {
    onChange(debounced);
  }, [debounced, onChange]);

  return (
    <div className={styles["filter"]}>
      <Text className={styles["title"]}>{title}</Text>
      <div className={styles["input"]}>
        <input
          ref={inputRef}
          value={defaultValue}
          onChange={(e) => setDefaultValue(e.target.value)}
          type="text"
          placeholder={placeholder}
          onFocus={() => setOpened(true)}
          style={{ flex: "1 0 0" }}
        />
        <Image
          src={ArrowIcon}
          alt="arrow"
          width={24}
          height={24}
          color="#999FA6"
          onClick={() => setOpened((opened) => !opened)}
          className={styles["arrow"]}
          style={{ transform: opened ? "rotate(180deg)" : "" }}
        />
        {opened && (
          <div className={styles["options"]}>
            <div
              className={styles["option"]}
              onClick={(e) => {
                setDefaultValue("");
                setOpened(false);
              }}
            >
              {notSelectedOption}
            </div>
            {options.map((option, index) => (
              <div
                key={index}
                className={styles["option"]}
                onClick={(e) => {
                  setDefaultValue(option);
                  setOpened(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
