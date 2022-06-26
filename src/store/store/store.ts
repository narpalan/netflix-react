import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';

import { showsReducer } from '../shows/shows.slice';
import userSaga from '../user/user.saga';
import showsSaga from '../shows/shows.saga';
import userSlice from '../user/user.slice';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    shows: showsReducer,
  },
  middleware: [saga],
});

function* storeSaga() {
  yield all([
    ...userSaga,
    ...showsSaga,
  ]);
}

saga.run(storeSaga);

export default store;
