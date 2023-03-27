import styled from 'styled-components';
import theme from '../../global/theme'

export const Main = styled.div`
   background-color: ${theme.colors.backgroundGray};
   display: flex;
   height: 100vh;
   align-items: center;
   justify-content: center;
`;

export const Container = styled.div`
   /* "position: relative" serve para que os itens dentro dessa tag com a propriedade "position: absolute" não saiam de dentro dela */
   position: relative;
`;

export const Image = styled.img`
   width: 100%;
   max-width: 700px;
`;

export const ScreenLeft = styled.div`
   position: absolute;
   width: 35%;
   height: 30%;
   border: 3.5px solid #4E4E4E;
   border-top-right-radius: 10px;
   border-top-left-radius: 10px;
   background-color: #fff;
   bottom: 40%;
   left: 6%;

   display: flex;
   align-items: center;
   justify-content: center;
`;

export const PokemonImage = styled.img`
    position: absolute;
    height: 80%;
`

export const ScreenRight = styled.div`
   position: absolute;
   width: 35%;
   height: 58%;
   border: 3.5px solid #4E4E4E;
   border-radius: 10px;
   background-color: #fff;
   bottom: 12%;
   left: 57.5%;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

/* //////////////////////////////////////////////////////////////////////////////////// */
/* //////////////////////////////////////////////////////////////////////////////////// */
// .main {
//    background - color: rgb(53, 194, 255, 1);
//    display: flex;
//    height: 100vh;
//    align - items: center;
//    justify - content: center;
// }

// .container {
//    /* "position: relative" serve para que os itens dentro dessa tag com a propriedade "position: absolute" não saiam de dentro dela */
//    position: relative;
//    /* background-color: green; */
// }

// .pokedex - image {
//    width: 100 %;
//    max - width: 700px;
// }

// .tela {
//    position: absolute;
//    width: 35 %;
//    height: 30 %;
//    border: 3.5px solid #4E4E4E;
//    border - top - right - radius: 10px;
//    border - top - left - radius: 10px;
//    background - color: #fff;
//    bottom: 40 %;
//    left: 6 %;

//    display: flex;
//    align - items: center;
//    justify - content: center;
// }

// .tela2 {
   // position: absolute;
   // width: 35 %;
   // height: 58 %;
   // border: 3.5px solid #4E4E4E;
   // border - radius: 10px;
   // background - color: #fff;
   // bottom: 12 %;
   // left: 57.5 %;

   // display: flex;
   // flex - direction: column;
   // align - items: center;
   // justify - content: center;
// }

// .list - items1 {
//    display: flex;
//    height: 18 %;
//    width: 90 %;
//    align - items: center;
//    list - style: none;

//    font - weight: 600;
//    font - size: 16px;
//    color: #4E4E4E;
// }

// .list - items2 {
//    display: flex;
//    flex - direction: column;
//    height: 18 %;
//    width: 90 %;
//    justify - content: center;
//    list - style: none;

//    font - weight: 600;
//    font - size: 16px;
//    color: #4E4E4E;
//    /* "capitalize" serve para deixar a primeira letra maiuscula */
//    text - transform: capitalize;
// }

// .type {
//    width: 66px;
//    border: 1px solid #a3a3a3;
//    border - radius: 4px;
//    padding: 5px;
//    margin - left: 5px;
//    text - align: center;

//    color: #fff;
//    font - size: 0.75rem;
//    text - transform: uppercase;
//    text - shadow: 1px 1px 2px rgb(0 0 0 / 70 %);
// }

// .pokemon - image {
//    position: absolute;
//    height: 80 %;
// }

// .pokemon - data {
//    position: absolute;
//    width: 35 %;
//    border: 1px solid #4E4E4E;
//    border - bottom - right - radius: 10px;
//    border - bottom - left - radius: 10px;
//    left: 6 %;
//    bottom: 35 %;
//    padding: 0.5 %;
//    background - color: #4E4E4E;

//    font - size: 16px;
//    text - align: center;
// }

// .pokemon - number {
//    color: #aaa;
// }

// .pokemon - name {
//    color: #fff;
//    text - transform: capitalize;
// }

// .form {
//    display: flex;
//    position: absolute;
//    width: 35 %;
//    left: 6 %;
//    bottom: 23 %;
//    /* "gap" foi usado aqui para dar espaço entre os botoes */
//    /* gap: 5px; */
// }

// .search {
//    width: 100 %;
//    padding: 3 %;
//    /* "outline: none;" serve para tirar a borda quando se clica no input */
//    outline: none;
//    border: 3.5px solid #4E4E4E;
//    border - right: 0px;
//    /* border-radius: 10px; */
//    border - top - left - radius: 10px;
//    border - bottom - left - radius: 10px;

//    font - size: 16px;
//    color: #4E4E4E;
// }

// .button - search {
//    display: flex;
//    width: 20 %;
//    border: 3.5px solid #4E4E4E;
//    /* border-radius: 10px; */
//    border - top - right - radius: 10px;
//    border - bottom - right - radius: 10px;
//    background - color: rgb(49, 49, 49);

//    align - items: center;
//    justify - content: center;
// }

// /* ":active" serve para mudar o visual do botão quando ele é clicado */
// .button - search:active {
//    background - color: #4E4E4E;
// }

// .lupa - image {
//    width: 70 %;
// }

// .buttons {
//    position: absolute;
//    width: 35 %;
//    bottom: 12 %;
//    left: 6 %;
//    display: flex;
//    gap: 15px;
// }

// .button {
//    width: 50 %;
//    padding: 3 %;
//    border: 3.5px solid #4E4E4E;
//    border - radius: 10px;
//    background - color: rgb(49, 49, 49);
//    font - size: 16px;
//    color: #fff;
// }

// .button:active {
//    background - color: #4E4E4E;
// }
// /* ////////////////////////COLOR-TYPES//////////////////////// */


// /* ////////////////////////TABLET//////////////////////// */
// @media(max - width: 700px) {
//    .container {
//       margin - left: 2 %;
//       margin - right: 2 %;
//    }

//    .tela {
//       border: 3px solid #4E4E4E;
//    }

//    .tela2 {
//       border: 3px solid #4E4E4E;
//    }

//    .pokemon - data {
//       border - top: 4px solid #4E4E4E;
//       font - size: 12px;
//    }

//    .search {
//       border: 3px solid #4E4E4E;
//       border - right: 0px;
//       font - size: 12px;
//    }

//    .button - search {
//       border: 3px solid #4E4E4E;
//    }

//    .button {
//       border: 3px solid #4E4E4E;
//       font - size: 12px;
//    }

//    .list - items1 {
//       font - size: 12px;
//    }

//    .list - items2 {
//       font - size: 12px;
//    }
// }

// /* ////////////////////////MOBILE//////////////////////// */
// @media(max - width: 450px) {
//    .tela {
//       border: 2px solid #4E4E4E;
//    }

//    .tela2 {
//       border: 2px solid #4E4E4E;
//    }

//    .pokemon - data {
//       border - top: 3px solid #4E4E4E;
//       font - size: 7px;
//    }

//    .search {
//       border: 2px solid #4E4E4E;
//       border - right: 0px;
//       font - size: 7px;
//    }

//    .button - search {
//       border: 2px solid #4E4E4E;
//    }

//    .button {
//       border: 2px solid #4E4E4E;
//       font - size: 7px;
//    }

//    .list - items1 {
//       font - size: 7px;
//    }

//    .list - items2 {
//       font - size: 7px;
//    }
// }