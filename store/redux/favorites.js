import { createSlice } from "@reduxjs/toolkit";

const favoiriteSclie = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },

  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.id.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = favoiriteSclie.actions.addFavorite;
export const removeFavorite = favoiriteSclie.actions.removeFavorite;
export default favoiriteSclie.reducer;
