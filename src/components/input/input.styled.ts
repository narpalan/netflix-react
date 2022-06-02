import styled from "styled-components";

export const InputStyled = styled.input`
    //width: calc(100% - 18px);
    width: 100%;
    margin: 0 0 22px;
    background: ${props=>props.theme.palette.field.primary};        
    padding: 8px;
    border: ${props=>props.theme.border.core.primary};
    border-radius:${props=>props.theme.border.radius.field};
`