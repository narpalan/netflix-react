import React from 'react';
import { Link } from 'react-router-dom';
import { Props } from './item.type';
import { Cover } from './item.styled';

export default function Item({
  cover,
  id,
  width,
  height,
}: Props) {
  const idSTR = id.toString();
  return (
    <Link to={idSTR}>
      <Cover
        cover={cover}
        width={width}
        height={height}
      />
    </Link>
  );
}
