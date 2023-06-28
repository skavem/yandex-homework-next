"use client";

import { IMovie } from "@/app/types";
import React, { useCallback } from "react";
import Counter from "../Counter/Counter";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { cart } from "@/redux/slices/cartSlice";

const TicketsCounter = ({
  movieId,
  onZero,
}: {
  movieId: IMovie["id"];
  onZero?: () => void;
}) => {
  const ticketsCnt = useAppSelector((state) => state.cart.tickets[movieId]);
  const dispatch = useAppDispatch();

  const value = ticketsCnt || 0;

  const increment = useCallback(() => {
    dispatch(cart.actions.addTicket(movieId));
  }, [dispatch, movieId]);

  const decrement = useCallback(() => {
    if (value === 1) onZero?.();
    dispatch(cart.actions.removeTicket(movieId));
  }, [dispatch, movieId, value, onZero]);

  return (
    <Counter
      value={value}
      minValue={0}
      maxValue={30}
      onIncrement={increment}
      onDecrement={decrement}
    />
  );
};

export default TicketsCounter;
