/**
 *  Separação do componente Wrapper que pode ser utilizado 
 * em casos variados como: pop-ups de alerta, menus, detalhes do 
 * filme/série como sinopse, seleção de episodios em modais
 * ou outros componentes no que lhe couber.
 * 
 */

import { Wrapper } from "./grid.styled";

export default function FWrapper(props: any){    
    return (
        
        <Wrapper {...props}></Wrapper>
    )
}