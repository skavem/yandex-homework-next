"use client";

import { Suspense } from "react";
import { useAppSelector } from "../redux/hooks";
import { Providers } from "../redux/Provider";
import Film from "./Film";

const FilmCards = ({ filmIds }: { filmIds: string[] }) => {
  return (
    <>
      {filmIds.map((id) => (
        <Suspense key={id} fallback={<div>Loading...</div>}>
          <Film movieId={id} />
        </Suspense>
      ))}
    </>
  );
};

const Films = () => {
  const tickets = useAppSelector((state) => state.cart.tickets);
  const filmIds = [...Object.keys(tickets)];

  return (
    <div>
      <FilmCards filmIds={filmIds} />
    </div>
  );
};

const FilmsWrapper = () => {
  return (
    <Providers>
      <Films />
    </Providers>
  );
};

export default FilmsWrapper;
