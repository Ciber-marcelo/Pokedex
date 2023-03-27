import React, { useState, useEffect } from "react";
import background from '../../assets/background.png'
import axios from 'axios';
import {
   Main,
   Container,
   Image,
   ScreenLeft,
   ScreenRight,
   PokemonImage,
   Info,
   Search,
   Buttons,
   Line,
   ButtonGen,
   ButtonSp
} from "./styles"

type PokemonObj = {
   name: string,
   id: number,
   types: PokemonType[]
   sprite: any
   url?: any
}

type PokemonType = {
   type: {
      name: string
   }
}

export default function Home() {
   const [pokemonArr, setPokemonArr] = useState([]);
   const [pokemonObj, setPokemonObj] = useState<PokemonObj>({} as PokemonObj)
   const [pokemonSp, setPokemonSp] = useState(false)

   //",[]" serve para que o useEffect chame a função apenas uma vez, quando a pagina é aberta.
   useEffect(() => {
      getPokemonGen(0, 151)
      getPokemon(4)
   }, [])

   const api = axios.create({
      baseURL: 'https://pokeapi.co/api/v2/'
   })

   async function getPokemon(pokemon: string | number) {
      const APIResponse = await api.get(`pokemon/${pokemon}`);
      if (APIResponse.status === 200) {
         const { name, id, types, sprites } = APIResponse.data;
         const loadPokemon = {
            name: name,
            id: id,
            types: types,
            sprite: pokemonSp ? sprites['other']['official-artwork']['front_shiny'] : sprites['other']['official-artwork']['front_default']
         }
         setPokemonObj(loadPokemon)
      }
   }

   async function getPokemonGen(offsetNumber: any, limitNumber: any) {
      const APIResponse = await api.get(`/pokemon/?offset=${offsetNumber}&limit=${limitNumber}`);
      if (APIResponse.status === 200) {
         const { results } = APIResponse.data
         //"promise.all" é usado quando vc faz varias requisições a API, o "promise.all" só finaliza depois de receber todas as requisições evitanto q as requisiçoes buguem.
         let loadPokemons: any = await Promise.all(
            results.map(async (pokemon: PokemonObj) => {
               const { id, types } = await getMoreInfo(pokemon.url)
               return {
                  name: pokemon.name,
                  id,
                  types
               }
            })
         )
         setPokemonArr(loadPokemons)
      }
   }

   //essa função serve para acessar a "url" e trazer mais informaçoes, acese esse link para endenter "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150"
   async function getMoreInfo(url: any) {
      const response = await api.get(url)
      //a baixo estamos usando a pratica de "desestruturação", normalemte a linha de baixo seria asim: "const id = response.data.id;" e "const tipos = response.data.types;".
      const { id, types } = response.data;
      return {
         id, types
      }
   }

   //tem q adicionar loading, principálemnte nessa função
   async function changeSprite() {
      setPokemonSp(!pokemonSp) 
      getPokemon(pokemonObj.id)
   }

   return (
      <Main>
         <Container>
            <ScreenLeft>
               <PokemonImage src={pokemonObj.sprite} />
            </ScreenLeft>

            <Info>
               {
                  pokemonObj.id ?
                     <span className="pokemon-number">{pokemonObj.id} - </span>
                     :
                     ""
               }
               <span className="pokemon-name">{pokemonObj.name}</span>
            </Info>

            <Search>
               <input
                  type="text"
                  placeholder="Name or Number"
                  onChange={e => getPokemon(e.target.value.toLowerCase())}
               />
            </Search>

            <Buttons>
               <button onClick={() => getPokemon(pokemonObj.id - 1)} >
                  &lt;&lt; Prev
               </button>

               <button onClick={() => getPokemon(pokemonObj.id + 1)} >
                  Next &gt;&gt;
               </button>
            </Buttons>

            <ScreenRight>
               {
                  pokemonArr.map((item: PokemonObj) =>
                     <button  onClick={() => getPokemon(item.id)}>
                        <text> {item.id}, </text>
                        <text> {item.name}, </text>
                        <Line type={item.types[0].type.name}> 
                           {item.types[0].type.name}, 
                        </Line>
                        <Line type={item.types.length > 1 ? item.types[1].type.name : ''}> 
                           {item.types.length > 1 ? item.types[1].type.name : ''} 
                        </Line>
                     </button>
                  )
               }
            </ScreenRight>

            <ButtonGen>
               <button onClick={() => getPokemonGen(0, 151)}>1</button>
               <button onClick={() => getPokemonGen(151, 100)}>2</button>
               <button onClick={() => getPokemonGen(251, 135)}>3</button>
               <button onClick={() => getPokemonGen(386, 107)}>4</button>
               <button onClick={() => getPokemonGen(493, 156)}>5</button>
               <button onClick={() => getPokemonGen(649, 72)}>6</button>
               <button onClick={() => getPokemonGen(721, 88)}>7</button>
               <button onClick={() => getPokemonGen(809, 96)}>8</button>
               <button onClick={() => getPokemonGen(905, 105)}>9</button>
            </ButtonGen>

            <ButtonSp>
               <button onClick={() => changeSprite()}>SP</button>
            </ButtonSp>

            <Image src={background} className='pokedex-image' alt="pokedexBackground" />
         </Container>
      </Main>
   );
}