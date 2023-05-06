import styled from 'styled-components';
import theme from '../../global/theme';

export const Button = styled.button`
   width: 100%;
   height: 100%;
   border: 7px solid ${theme.colors.gray1};
   border-radius: 45px;
   background-color: rgba(8, 164, 189, 1);
   cursor: pointer;

   animation-name: piscar;
   animation-duration: 3s;
   animation-iteration-count: infinite;

   @keyframes piscar {
      0% {
         background-color: rgba(8, 164, 189, 1);
      }
      50% {
         background-color: darkorange;
      }
      100% {
         background-color: rgba(8, 164, 189, 1);
      }
   }

   &:active{
      width: 90%;
      height: 90%;
   }
`;