import styled from 'styled-components';
import theme from '../../global/theme'

type PokemonType = {
    type: string
}

export const ButtonPok = styled.button`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.white};
    border: 3.5px solid ${theme.colors.gray1};
    border-radius: 5px;

    :active{
        background-color: lightgray;
    }
`;

export const NumberPok = styled.text`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 2.1rem;
   height: 1.8rem;
   border-right: 3.5px solid ${theme.colors.gray1};
   background-color: ${theme.colors.black};

   font-size: 0.625rem;
   /* font-size: clamp(0.25rem, 1vw, 0.625rem); */
   font-weight: bold;
   text-transform: uppercase;
   color: ${theme.colors.white};
`;

export const NamePok = styled.text`
   display: flex;
   justify-content: start;
   align-items: center;
   width: 5.6rem;
   height: 1.8rem;
   padding-left: 5px;

   font-size: 0.625rem;
   /* font-size: clamp(0.25rem, 1vw, 0.625rem); */
   font-weight: bold;
   text-transform: uppercase;
   color: ${theme.colors.gray1};
`;

export const TypeContainer = styled.text`
   display: flex;
   justify-content: end;
   align-items: center;
   width: 7.5rem;
   height: 1.8rem;
   gap: 5px;
`;

export const TypePok = styled.div<PokemonType>`
   //"as" ser para usar as tags "...of", da uma pesquisada depois pra entender melhor
   //na parte do "({type})" vc esta usando desestruturação, normalmente seria "props.type"
   background: ${({ type }) => theme.typesColor[type as keyof typeof theme.typesColor]};
   display: flex;
   justify-content: center;
   align-items: center;
   width: 3.4rem;
   height: 1.6rem;
   border: 2.5px solid ${theme.colors.gray1};
   border-radius: 15px;

   font-size: 0.625rem;
   /* font-size: clamp(0.25rem, 1vw, 0.625rem); */
   font-weight: bold;
   text-transform: uppercase;
   color: ${theme.colors.white};
`;