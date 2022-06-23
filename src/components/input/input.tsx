import { InputStyled } from './input.styled';
import { Props } from './input.type';

export default function Input({
  type,
  name,
  placeHolder,
  onChange,
}: Props) {
  return (
    <InputStyled
      type={type}
      name={name}
      placeholder={placeHolder}
      onChange={onChange}
    />
  );
}
