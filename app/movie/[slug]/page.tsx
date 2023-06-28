import React, { Suspense } from "react";
import Card from "@/components/Card/Card";
import Text from "@/components/Text/Text";
import FullFilmCard from "@/components/FullFilmCard/FullFilmCard";
import { IMovie } from "@/app/types";
import Reviews from "@/components/Reviews/Reviews";
import styles from "./page.module.css";

const Page = async ({ params }: { params: { slug: string } }) => {
  const filmId = params.slug;

  const film = (await (
    await fetch(`http://localhost:3001/api/movie?movieId=${filmId}`)
  ).json()) as IMovie;

  if (!film)
    return (
      <Card>
        <Text element="h1">Фильм не найден</Text>
      </Card>
    );

  return (
    <div className={styles.container}>
      <FullFilmCard film={film} />
      <Suspense>
        <Reviews filmId={film.id} />
      </Suspense>
    </div>
  );
};

export default Page;
