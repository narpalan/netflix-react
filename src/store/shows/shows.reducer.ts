import { PayloadAction } from '@reduxjs/toolkit';
import { GetShowsPayload } from 'services/shows/shows.type';
import {
  Data, GetShowsList, SetData, SetError, SetSettings, Shows,
} from './shows.type';

const getShowList: GetShowsList = (_state: Shows, _action: PayloadAction<undefined>) => {};

const setData: SetData = (state: Shows, action: PayloadAction<Data>) => {
  state.data = action.payload;
};

const setError: SetError = (state: Shows, action: PayloadAction<Shows['error']>) => {
  state.error = action.payload;
};

const setSettings: SetSettings = () => {};

const reducers = {
  setData,
  setError,
  setSettings,
  getShowList,
};

export default reducers;
