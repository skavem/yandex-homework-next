import Card from "@/app/components/Card/Card";
import { IReview } from "@/app/types";
import React from "react";
import styles from "./Review.module.css";
import IconPlaceholder from "@/public/images/icons-photo.svg";
import Image from "next/image";
import Text from "@/app/components/Text/Text";

const Review = ({ review }: { review: IReview }) => {
  return (
    <Card>
      <div className={styles.container}>
        <Image
          src={IconPlaceholder}
          alt={review.name}
          width={100}
          height={100}
        />
        <div className={styles.info}>
          <div className={styles.title}>
            <Text fontSize={"1.25rem"} fontWeight={600}>
              {review.name}
            </Text>
            <div className={styles.rating}>
              <Text fontSize={"1.25rem"}>Оценка: </Text>
              <Text fontSize={"1.25rem"} fontWeight={600}>
                {review.rating}
              </Text>
            </div>
          </div>
          <Text fontWeight={500}>{review.text}</Text>
        </div>
      </div>
    </Card>
  );
};

export default Review;
