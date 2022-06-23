import styled from 'styled-components';

export const InputStyled = styled.input`
    //width: calc(100% - 18px);
    width: 100%;
    margin: 0 0 22px;
    background: ${(props) => props.theme.palette.core.input};        
    padding: 8px;
    //border: 0;
    border: ${(props) => {
    const { theme: { border, palette } } = props;
    return `${border.strut.small} solid ${palette.core.input}`;
  }};
    border-radius:${(props) => props.theme.border.radius.field};
`;
