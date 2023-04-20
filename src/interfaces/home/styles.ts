import styled from 'styled-components';

// USA REM EM VEZ DE PX, nos textos e tamanhos(width e height) de div por createExternalModuleExport
// borda e outras coisas faz com px mesmo q é bem melhor

type genButtom = {
   active: boolean
}

export const Main = styled.div`
   background-color: rgb(53, 194, 255, 1);
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

export const Image = styled.img`
   width: 100%;
   max-width: 700px;
`;

export const ScreenLeft = styled.div`
   position: absolute;
   width: 39.4%;
   height: 43.55%;
   border: 3.5px solid #4E4E4E;
   //"box-sizing: border-box" serve para fazer a borda ficar pro lado de dentro
   box-sizing: border-box;
   border-top-right-radius: 10px;
   border-top-left-radius: 10px;
   background-color: #fff;
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
   border: 3.5px solid #4E4E4E;
   border-top: 0px;
   border-bottom-right-radius: 10px;
   border-bottom-left-radius: 10px;
   left: 4%;
   bottom: 29.5%;
   /* padding: 0.5%; */
   background-color: rgb(49, 49, 49);
   text-transform: capitalize;
   font-size: 1rem;
   text-align: center;
   color: white;
`

export const Search = styled.div`
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
      border: 3.5px solid #4E4E4E;
      border-radius: 10px;
      font-size: 1rem;
      color: #4E4E4E;
   }
`
export const Buttons = styled.div`
   position: absolute;
   width: 39.4%;
   bottom: 8.5%;
   left: 4%;
   display: flex;
   gap: 15px;

   .buttonOn {
      width: 50%;
      padding: 3%;
      border: 3.5px solid #4E4E4E;
      border-radius: 10px;
      background-color: rgb(49, 49, 49);
      font-size: 1rem;
      color: #fff;
   }

   .buttonOn:active {
       background-color: #4E4E4E;
   }

   .buttonOff {
      width: 50%;
      padding: 3%;
      border: 3.5px solid #4E4E4E;
      border-radius: 10px;
      background-color: rgb(49, 49, 49);
      opacity: 0.8;
      font-size: 1rem;
      color: #fff;
   }   
`
export const ScreenRight = styled.div`
   //"overflow-y" serve para os item dentro da dive ficarem dentro dela e caso n cabão, aparece um scroll na vertical, para um scroll orizontal só colocar "x" em vez de "y"
   overflow-y: auto;
   position: absolute;
   width: 39.4%;
   height: 62%;
   border: 3.5px solid #4E4E4E;
   box-sizing: border-box;
   border-radius: 10px;
   background-color: #fff;
   bottom: 16.05%;
   left: 54.5%;
   display: flex;
   flex-direction: column;
   gap: 5px;
   padding: 2px;

   //estilizações da scrollbar, link de referencia: https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp
   ::-webkit-scrollbar {
      width: 10px;
   }

   ::-webkit-scrollbar-track {
      background: #4E4E4E;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
   }

   ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
      height: 20% ;
   }

   ::-webkit-scrollbar-thumb:hover {
      background: lightgray;
   }
`;

export const ButtonsGen = styled.div`
   display: flex;
   width: 39.4%;
   position: absolute;
   bottom: 8.5%;
   left: 54.5%;   
   justify-content: space-between;

   button:active {
       background-color: #4E4E4E;
   }
`;

export const ButtonGen = styled.button<genButtom>`
   display: flex;
   width: 25px;
   height: 25px;
   justify-content: center;
   border: 3.5px solid #4E4E4E;
   border-radius: 25px;
   background-color: rgb(49, 49, 49);
   ${({ active }) => active && ` background-color: #4E4E4E; `}
   font-size: 1rem;
   color: #fff;
`;

export const ButtonSp = styled.div`
   position: absolute;
   bottom: 90%;
   left: 6%;   
   background-color: green;

   button {
      /* padding: 1%; */
      border: 3.5px solid #4E4E4E;
      border-radius: 25px;
      background-color: rgb(49, 49, 49);
      font-size: 1rem;
      color: #fff;
   }
   
   button:active {
       background-color: #4E4E4E;
   }
`;
