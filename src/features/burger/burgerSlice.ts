import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface IIngredient{
  id: number
  name: string
  value: number
}

export interface Burger {
  ingredients: IIngredient[];
}

const initialState: Burger = {
  ingredients: [
    {id:0, name: "bun top", value: 2.5 },
    {id:1, name: "meat", value: 5 },
    {id:2, name: "bun bottom", value: 2.5 },
  ],
};

export const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    addIngredient: (state, action: PayloadAction<IIngredient>) => {
      state.ingredients.push(action.payload);
    },
    removeIngredient: (state, action: PayloadAction<IIngredient>) => {
      state.ingredients.push(action.payload);
    },
  },
});

export const { addIngredient, removeIngredient } = burgerSlice.actions;

export const selectBurger = (state: RootState) => state.burger;

export default burgerSlice.reducer;
