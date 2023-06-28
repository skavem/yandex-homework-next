import { IMovie, IReview } from "@/app/types";
import React from "react";
import Review from "./Review";

const Reviews = async ({ filmId }: { filmId: IMovie["id"] }) => {
  const reviews = (await (
    await fetch(`http://localhost:3001/api/reviews?movieId=${filmId}`)
  ).json()) as IReview[];

  return (
    <>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </>
  );
};

export default Reviews;
