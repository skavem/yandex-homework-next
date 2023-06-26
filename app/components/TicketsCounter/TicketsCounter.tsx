"use client";

import { IMovie } from "@/app/types";
import React, { useCallback } from "react";
import Counter from "../Counter/Counter";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { cart } from "@/app/redux/slices/cartSlice";

const TicketsCounterComponent = ({ movieId }: { movieId: IMovie["id"] }) => {
  const tickets = useAppSelector((state) => state.cart.tickets[movieId]);
  const dispatch = useAppDispatch();

  const value = tickets || 0;

  const increment = useCallback(() => {
    dispatch(cart.actions.addTicket(movieId));
  }, [dispatch, movieId]);
  const decrement = useCallback(() => {
    dispatch(cart.actions.removeTicket(movieId));
  }, [dispatch, movieId]);

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

export default TicketsCounterComponent;
