import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type IFilters = {
  title: string | null;
  genre: string | null;
  theatre: string | null;
  theatreId: string | null;
  genreList: string[];
};

const initialState: IFilters = {
  title: null,
  genre: null,
  theatre: null,
  theatreId: null,
  genreList: [],
};

export const filters = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      if (action.payload === "") {
        state.title = null;
        return;
      }
      state.title = action.payload;
    },
    setGenre(state, action: PayloadAction<string>) {
      if (action.payload === "") {
        state.genre = null;
        return;
      }
      state.genre = action.payload;
    },
    setTheatre(state, action: PayloadAction<string>) {
      if (action.payload === "") {
        state.theatre = null;
        return;
      }
      state.theatre = action.payload;
    },
    setTheatreId(state, action: PayloadAction<string | null>) {
      state.theatreId = action.payload;
    },
    setGenreList(state, action: PayloadAction<string[]>) {
      state.genreList = action.payload;
    },
  },
});

export const filtersActions = filters.actions;
export default filters.reducer;
