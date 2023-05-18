import styled from 'styled-components';
import theme from '../../global/theme'

// USA REM EM VEZ DE PX, nos textos e tamanhos(width e height) de div por createExternalModuleExport
// borda e outras coisas faz com px mesmo q é bem melhor

type genButtom = {
   active: boolean
}

export const Main = styled.div`
   background-color: ${theme.colors.background};
   display: flex;
   height: 100vh;
   align-items: center;
   justify-content: center;
`;

export const Container = styled.div`
   /* "position: relative" serve para que os itens dentro dessa tag com a propriedade "position: absolute" não saiam de dentro dela */
   position: relative;
   display: flex;
`;

export const Background = styled.img`
   width: 100%;
   min-width: 43.75rem;
   max-width: 43.75rem;
`;

export const ScreenLeft = styled.div`
   position: absolute;
   width: 17.25rem;
   height: 13.75rem;
   border: 3.5px solid ${theme.colors.gray1};
   //"box-sizing: border-box" serve para fazer a borda ficar pro lado de dentro
   box-sizing: border-box;
   border-top-right-radius: 10px;
   border-top-left-radius: 10px;
   background-color: ${theme.colors.white};
   bottom: 34.5%;
   left: 4%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const PokemonImage = styled.img`
    position: absolute;
    height: 95%;
`

export const Info = styled.text`
   position: absolute;
   width: 39.4%;
   height: 5%;
   border: 3.5px solid ${theme.colors.gray1};
   border-top: 0px;
   border-bottom-right-radius: 10px;
   border-bottom-left-radius: 10px;
   left: 4%;
   bottom: 29.5%;
   /* padding: 0.5%; */
   background-color: ${theme.colors.black};
   text-transform: capitalize;
   font-size: 1rem;
   text-align: center;
   color: white;
`

export const ContainerSearch = styled.div`
   display: flex;
   position: absolute;
   width: 39.4%;
   left: 4%;
   bottom: 19%;

   input {
      width: 100%;
      padding: 3%;
      /* "outline: none;" serve para tirar a borda quando se clica no input */
      outline: none;
      border: 3.5px solid ${theme.colors.gray1};
      border-radius: 10px;
      font-size: 1rem;
      color: ${theme.colors.gray1};
   }
`
export const ContainerPrevNext = styled.div`
   position: absolute;
   width: 17.25rem;
   bottom: 8.5%;
   left: 4%;
   display: flex;
   gap: 15px;
`

export const Generation = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 4.4rem;
   height: 1.8rem;
   background-color: ${theme.colors.black};
   border-top: 3.5px solid ${theme.colors.gray1};
   border-left: 3.5px solid ${theme.colors.gray1};
   border-right: 3.5px solid ${theme.colors.gray1};
   border-radius: 10px 10px 0 0;
   position: absolute;
   bottom: 78%;
   left: 54.5%;

   font-size: 0.75rem;
   font-weight: bold;
   text-transform: uppercase;
   color: ${theme.colors.white};
`

export const ScreenRight = styled.div`
   //"overflow-y" serve para os item dentro da dive ficarem dentro dela e caso n cabão, aparece um scroll na vertical, para um scroll orizontal só colocar "x" em vez de "y"
   overflow-y: auto;
   position: absolute;
   width: 17.25rem;
   height: 19.5rem;
   border: 3.5px solid ${theme.colors.gray1};
   box-sizing: border-box;
   border-radius: 0 10px 10px 10px;
   background-color: ${theme.colors.white};
   bottom: 16.05%;
   left: 54.5%;
   display: flex;
   flex-direction: column;
   gap: 5px;
   padding: 2px;

   //estilizações da scrollbar, link de referencia: https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp
   ::-webkit-scrollbar {
      width: 12px;
   }

   ::-webkit-scrollbar-track {
      background: ${theme.colors.gray1};
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
   }

   ::-webkit-scrollbar-thumb {
      background: ${theme.colors.gray2};
      border-left: 3px solid ${theme.colors.gray1};
      margin: 5px;
      border-radius: 5px;
      height: 20% ;
   }

   ::-webkit-scrollbar-thumb:active {
      background: ${theme.colors.black};
   }
`;

export const ContainerGen = styled.div`
   display: flex;
   width: 39.4%;
   position: absolute;
   bottom: 8.5%;
   left: 54.5%;   
   justify-content: space-between;

   button:active {
       background-color: ${theme.colors.gray1};
   }
`;

export const ButtonGen = styled.button<genButtom>`
   display: flex;
   width: 25px;
   height: 25px;
   justify-content: center;
   border: 3.5px solid ${theme.colors.gray1};
   border-radius: 25px;
   background-color: ${theme.colors.black};
   ${({ active }) => active && ` background-color: ${theme.colors.gray1}; `}
   font-size: 1rem;
   color: ${theme.colors.white};
`;

export const ContainerShiny = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 8.8%;
   height: 12%;
   position: absolute;
   bottom: 85%;
   left: 2.1%;   
`;
