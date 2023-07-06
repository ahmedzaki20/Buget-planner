import { createSlice } from '@reduxjs/toolkit';

export const bugetReducer = createSlice({
  name: 'bugetReducer',
  initialState: JSON.parse(localStorage.getItem('buget')) || 2000,
  reducers: {
    addBuget: (state, action) => {
      localStorage.setItem('buget', JSON.stringify(action.payload));
      return action.payload;
    },
  },
});
export const { addBuget } = bugetReducer.actions;
export default bugetReducer.reducer;
