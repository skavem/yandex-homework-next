import { IMovie } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ICartState = {
  tickets: {
    [id: IMovie["id"]]: number;
  };
};

const initialState: ICartState = { tickets: {} };

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: () => initialState,
    addTicket: (state, action: PayloadAction<IMovie["id"]>) => {
      const id = action.payload;
      state.tickets[id] = (state.tickets[id] || 0) + 1;
    },
    removeTicket: (state, action: PayloadAction<IMovie["id"]>) => {
      const id = action.payload;
      const count = state.tickets[id] || 0;
      if (count > 0) {
        state.tickets[id] = count - 1;
      }
    },
  },
});

export const cartActions = cart.actions;
export default cart.reducer;
