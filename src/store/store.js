import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from './slices/expensesSlice';
import bugetReducer from './slices/bugetSlice';
const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    buget: bugetReducer,
  },
});
export default store;
