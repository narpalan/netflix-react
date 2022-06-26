import React from 'react';
import { ErrStyle } from './form-error.styled';
import { Props } from './form-error.type';

export default function FormErr({ message }:Props) {
  return (
    <ErrStyle>
      {message}
    </ErrStyle>
  );
}
