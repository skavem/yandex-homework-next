import FilmCard from "../../Films/FilmCard/FilmCard";
import FilmCardSkeleton from "../../Films/FilmCard/FilmCardSkeleton";
import useLoadData from "@/hooks/useLoadData";
import { IMovie } from "../../types";
import { useCallback } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { cartActions } from "../../redux/slices/cartSlice";
import Modal, { useModal } from "../Modal/Modal";
import Text from "../Text/Text";
import styles from "./Films.module.css";
import Button from "../Button/Button";

const CartFilm = ({ movieId }: { movieId: IMovie["id"] }) => {
  const { data: film, isLoading } = useLoadData<IMovie>({
    url: `http://localhost:3001/api/movie?movieId=${movieId}`,
  });

  const { isOpen, close, open } = useModal();

  const dispatch = useAppDispatch();

  const deleteMovie = useCallback(
    (movie: IMovie) => {
      dispatch(cartActions.removeMovie(movie.id));
    },
    [dispatch]
  );

  return (
    <>
      {isLoading ? (
        <FilmCardSkeleton />
      ) : film ? (
        <>
          <FilmCard movie={film} onDelete={open} />
          <Modal
            title="Удаление билета"
            isOpen={isOpen}
            onClose={close}
            onOpen={open}
          >
            <div className={styles.modal__container}>
              <Text>Вы уверены, что хотите удалить билет?</Text>
              <div className={styles.modal__buttons}>
                <Button
                  onClick={() => {
                    deleteMovie(film);
                    close();
                  }}
                  size="lg"
                  variant="primary"
                >
                  <Text fontWeight={600} fontSize={"0.875rem"}>
                    Да
                  </Text>
                </Button>
                <Button onClick={close} size="lg" variant="secondary">
                  <Text fontWeight={600} fontSize={"0.875rem"}>
                    Нет
                  </Text>
                </Button>
              </div>
            </div>
          </Modal>
        </>
      ) : null}
    </>
  );
};

export default CartFilm;
