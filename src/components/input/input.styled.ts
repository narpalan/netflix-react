import styled from "styled-components";

export const InputStyled = styled.input`
    //width: calc(100% - 18px);
    width: 100%;
    margin: 0 0 22px;
    background: ${props=>props.theme.palette.inputField.primary};        
    padding: 8px;
    //border: 0;
    border: ${props=>{
        const {theme: {border,palette}} =  props
        return `${border.strut.small} solid ${palette.inputField.primary}`

    }};
    border-radius:${props=>props.theme.border.radius.field};
`