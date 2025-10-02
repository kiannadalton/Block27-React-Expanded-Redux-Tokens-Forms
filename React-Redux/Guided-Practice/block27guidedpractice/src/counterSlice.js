import { createSlice } from "react-redux";

const counterSlice = createSlice({
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = counterSlice.action;
