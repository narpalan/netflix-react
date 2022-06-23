import { AxiosResponse } from 'axios';

export type GetShowsPayload = {

};

export type GetShowsResponse = AxiosResponse <{
  shows:[{}]
}>;

export enum GetShowsErrorMessage {
  UNREACHABLE = 'An error ocurred getting shows',
};
