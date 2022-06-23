import { ButtonStyled } from './button.styled';
import { Props } from './button.type';

export default function Button({ onClick, children }: Props) {
  return (
    <ButtonStyled onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}
