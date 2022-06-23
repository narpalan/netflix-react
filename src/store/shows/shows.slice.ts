import { createSlice } from '@reduxjs/toolkit';
import { Shows } from './shows.type';
import reducers from './shows.reducer';

export const initialState: Shows = {
  data: {
    list: [],
    showDetail: {},
  },
  settings: {
    loading: false,
  },
  error: '',
};

const showSlice = createSlice({
  name: 'shows',
  reducers,
  initialState,
});

export default showSlice;
