import styled from 'styled-components';
import { TextProps } from './title.type';

export const Title = styled.span<TextProps>`
  color: white;
  display: block;
  font-size: 24px;
  margin: 0 0 18px;
  font-weight: ${(props) => props.fontWeight};
`;
