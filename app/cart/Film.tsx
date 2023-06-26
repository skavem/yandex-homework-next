import FilmCard from "../Films/FilmCard/FilmCard";
import { IMovie } from "../types";

const Film = async ({ movieId }: { movieId: IMovie["id"] }) => {
  const film = (await (
    await fetch(`http://localhost:3001/api/movie?movieId=${movieId}`)
  ).json()) as IMovie;

  return <FilmCard movie={film} />;
};

export default Film;
