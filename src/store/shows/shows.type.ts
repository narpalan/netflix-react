import { PayloadAction } from '@reduxjs/toolkit';
import { Settings } from 'http2';

type List = Shows[];

export enum Category {
  MOVIE = 'MOVIE',
  TV_SHOWS = 'TV_SHOWS',
}

export type Data = {
  showDetail: {
    showId?:number
    title?: string
    cover?: string
    director?: string
    actors?: string
    category?: Category
    episodes?: string[]
  },
  list?: List,
};

export type Shows = {
  data: Data,
  settings: {},
  error: {}
};

export type BaseReducer<Payload> = (state: Shows, action: PayloadAction<Payload>) => void;

export type GetShowsList = BaseReducer<undefined>;
export type SetData = BaseReducer<Data>;
export type SetSettings = BaseReducer<Settings>;
export type SetError = BaseReducer<Error>;
