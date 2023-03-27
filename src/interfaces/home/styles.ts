import styled from 'styled-components';
import theme from '../../global/theme'

type PokemonType = {
   type: string
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
   /* background-color: red; */
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
    /* background-color: red; */
`

export const Info = styled.text`
   position: absolute;
   width: 39.4%;
   height: 5%;
   /* border: 1px solid #4E4E4E; */
   border-bottom-right-radius: 10px;
   border-bottom-left-radius: 10px;
   left: 4%;
   bottom: 29.5%;
   /* padding: 0.5%; */
   background-color: #4E4E4E;

   text-transform: capitalize;
   font-size: 16px;
   text-align: center;
   color: white;
`

export const Search = styled.div`
   display: flex;
   position: absolute;
   width: 39.4%;
   left: 4%;
   bottom: 19%;
   /* "gap" foi usado aqui para dar espaço entre os botoes */
   gap: 5px;

   input {
      width: 100%;
      padding: 3%;
      /* "outline: none;" serve para tirar a borda quando se clica no input */
      outline: none;
      border: 3.5px solid #4E4E4E;
      border-radius: 10px;

      font-size: 16px;
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

   button {
      width: 50%;
      padding: 3%;
      border: 3.5px solid #4E4E4E;
      border-radius: 10px;
      background-color: rgb(49, 49, 49);
      font-size: 16px;
      color: #fff;
   }

   button:active {
       background-color: #4E4E4E;
   }
`
export const ScreenRight = styled.div`
   //"overflow-y" serve para os item destro da tive ficarem dentro dela e caso n cabão, aparece um scroll na vertical, para um scroll orizontal só colocar "x" em vez de "y"
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
   padding: 3px;

   button {
      display: flex;
   }

   //estilizações da scrollbar, link de referencia: https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp
   ::-webkit-scrollbar {
      width: 10px;
   }

   ::-webkit-scrollbar-track {
      /* background: #f1f1f1; */
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
      /* background: #555;  */
      background: lightgray;
   }
`;

export const Line = styled.div<PokemonType>`
   //"as" ser para usar as tags "...of", da uma pesquisada depois pra entender melhor
   //na parte do "({type})" vc esta usando desestruturação, normalmente seria "props.type"
   background: ${({type}) => theme.typesColor[type as keyof typeof theme.typesColor] }
`;

export const ButtonGen = styled.div`
   display: flex;
   width: 39.4%;
   position: absolute;
   bottom: 8.5%;
   left: 54.5%;   
   /* background-color: green; */
   justify-content: space-between;

   button {
      /* padding: 1%; */                                                                                                                                                                                                                                                                                                                                                                                                                                                     
      width: 25px;
      height: 25px;
      border: 2px solid #4E4E4E;
      border-radius: 25px;
      background-color: rgb(49, 49, 49);
      font-size: 1rem;
      color: #fff;
   }
   
   button:active {
       background-color: #4E4E4E;
   }
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
