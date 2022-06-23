import { AxiosResponse } from 'axios';

export type AuthPayload = {
  email: string
  pswd: string
};

export type AuthResponse = AxiosResponse <{
  token:string
}>;

export enum AuthErrorMessage {
  UNREACHABLE_AUTHENTICATION = 'An error occurred on authenticate user',
}
