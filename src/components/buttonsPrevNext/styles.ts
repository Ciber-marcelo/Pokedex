import styled from 'styled-components';
import theme from '../../global/theme';

export const Container = styled.div`
   width: 17.25rem;
   display: flex;
   gap: 15px;

   .buttonOn {
      width: 50%;
      padding: 3%;
      border: 3.5px solid ${theme.colors.gray1};
      border-radius: 10px;
      background-color: ${theme.colors.black};
      font-size: 1rem;
      color: ${theme.colors.white};
   }

   .buttonOn:active {
       background-color: ${theme.colors.gray1};
   }

   .buttonOff {
      width: 50%;
      padding: 3%;
      border: 3.5px solid ${theme.colors.gray1};
      border-radius: 10px;
      background-color: ${theme.colors.black};
      opacity: 0.8;
      font-size: 1rem;
      color: ${theme.colors.white};
   }   
`