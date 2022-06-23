import { ChangeEvent } from 'react';

export type Props = {
  type: string
  name: string
  placeHolder: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
};
