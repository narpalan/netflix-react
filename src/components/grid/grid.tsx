/**
 *  Separação do componente Wrapper que pode ser utilizado
 * em casos variados como: pop-ups de alerta, menus, detalhes do
 * filme/série como sinopse, seleção de episodios em modais
 * ou outros componentes no que lhe couber.
 *
 */

import { Wrapper } from './grid.styled';
import { Props } from './grid.type';

export default function FWrapper({
  container,
  alignContent,
  justifyContent,
  children,
}: Props) {
  return (
    <Wrapper
      container={container}
      alignContent={alignContent}
      justifyContent={justifyContent}
    >
      {children}

    </Wrapper>
  );
}
