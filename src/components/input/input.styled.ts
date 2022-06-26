import styled, { css } from 'styled-components';

export const InputStyled = styled.input`
    width: 100%;
    margin: 0 0 22px;
    background: ${(props) => props.theme.palette.core.input};        
    padding: 8px;    
    border: ${(props) => {
    const { theme: { border, palette } } = props;
    return css`${border.strut.small} solid ${palette.core.input}`;
  }};
    border-radius:${(props) => props.theme.border.radius.field};
`;
