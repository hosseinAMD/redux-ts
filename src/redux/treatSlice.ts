import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Treat } from "../models/Treat";

const initialState: Treat[] = [];

interface ChangeStatusPayload {
  id: number;
  value: boolean;
}

export const treatSlice = createSlice({
  name: "treats",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTreats: (state, action: PayloadAction<Treat[]>) => {
      state = [...action.payload];
      return state;
    },
    addTreat: (state, action: PayloadAction<Treat>) => {
      return [...state, action.payload];
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeStatus: (state, action: PayloadAction<ChangeStatusPayload>) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index].paid = action.payload.value;
      return state;
    },
  },
});

export const { addTreat, changeStatus } = treatSlice.actions;

export default treatSlice.reducer;
