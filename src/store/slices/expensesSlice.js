import { createSlice } from '@reduxjs/toolkit';

export const expensesReducer = createSlice({
  name: 'expensesReducer',
  initialState: JSON.parse(localStorage.getItem('expenses')) || [],
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('expenses', JSON.stringify(state));
    },
    removeExpense: (state, action) => {
      const newState = state.filter(expense => expense.id !== action.payload);
      localStorage.setItem('expenses', JSON.stringify(newState));
      return newState;
    },
  },
});
export const { addExpense, removeExpense } = expensesReducer.actions;
export default expensesReducer.reducer;
