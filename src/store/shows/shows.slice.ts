import { createSlice } from '@reduxjs/toolkit';
import { Shows } from './shows.type';
import reducers from './shows.reducer';

const initialState: Shows = {
  data: {
    myList: [],
    list: {},
  },
  settings: {
    loading: false,
  },
  error: '',
};

const showsSlice = createSlice({
  name: 'shows',
  reducers,
  initialState,
});

const {
  actions: showsActions,
  reducer: showsReducer,
} = showsSlice;

export {
  showsReducer,
  showsActions,
};

export default showsSlice;
