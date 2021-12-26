import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: '@counter',
  initialState: {
    value: 0,
  },

  reducers: {
    incrementCounter: (state) => {
      state.value += 1;
    },
    randomIncrementCounter: (state, action: PayloadAction<number>) => {
      if (state.value < 99) {
        state.value += action.payload;
      }
    },
    decrementCounter: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    resetCounter: (state) => {
      state.value = 0;
    },
  },
});

export const {
  incrementCounter,
  decrementCounter,
  randomIncrementCounter,
  resetCounter,
} = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
