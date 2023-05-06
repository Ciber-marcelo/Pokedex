import styled from 'styled-components';
import theme from '../../global/theme';

export const Input = styled.input`
      width: 100%;
      padding: 3%;
      /* "outline: none;" serve para tirar a borda quando se clica no input */
      outline: none;
      border: 3.5px solid ${theme.colors.gray1};
      border-radius: 10px;
      font-size: 1rem;
      color: ${theme.colors.gray1};
`