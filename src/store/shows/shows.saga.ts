import { AxiosResponse } from 'axios';
import {
  call,
  cancel,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';

import showsService from '../../services/shows/shows';
import { Show } from './shows.type';
import { tokenSelector } from '../user/user.selector';
import { Data as UserData } from '../user/user.type';
import { showsActions } from './shows.slice';

function* getList() {
  yield put(showsActions.setSettings({ loading: true }));

  const token: UserData['token'] = yield select(tokenSelector);

  if (!token) {
    yield put(showsActions.setError('User token was not found'));
    yield cancel();
  }

  try {
    const res: AxiosResponse<Show[]> = yield call(showsService({ token: token as string }).getList);

    const showsList = res.data.reduce((accumulator, show) => {
      // @ts-ignore
      const categoryKey = accumulator[show.category] || [];

      return {
        ...accumulator,
        [show.category]: categoryKey.concat(show),
      };
    }, {});

    yield put(showsActions.setList(showsList));
  } catch (e:any) {
    yield put(showsActions.setError('Error'));
  } finally {
    yield put(showsActions.setSettings({ loading: false }));
  }
}

function* getMyList() {
  yield put(showsActions.setSettings({ loading: true }));
  const token: UserData['token'] = yield select(tokenSelector);

  if (!token) {
    yield put(showsActions.setError('User token was not found'));
    yield cancel();
  }

  try {
    const res: AxiosResponse<Show[]> = yield call(
      showsService({ token: token as string }).getMyList,
    );
    yield put(showsActions.setMyList(res.data));
    yield put(showsActions.setError(''));
  } catch (e: any) {
    yield put(showsActions.setError('Error'));
  } finally {
    yield put(showsActions.setSettings({ loading: false }));
  }
}

const showsSaga = [
  takeLatest('shows/getList', getList),
  takeLatest('shows/getMyList', getMyList),
];

export default showsSaga;
