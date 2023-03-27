import React, { useState, useEffect } from "react";
import background from '../../assets/background.png'
import axios from 'axios';
import {
   Main,
   Container,
   Image,
   ScreenLeft,
   ScreenRight,
   PokemonImage
} from "./styles"

type Pokemon = {
   id: number
   name: string
   url: string
   types: PokemonType[]
}

export type PokemonType = {
   type: {
      name: string
   }
}

export default function Home() {
   // const [search, setSearch] = useState('');
   // const [pokemonNumber, setPokemonNumber] = useState(25);
   // const [pokemonName, setPokemonName] = useState('pikachu');
   const [pokemonArr, setPokemonArr] = useState([]);
   const [pokemonImg, setPokemonImg] = useState('')
   // const [pokemonImage, setPokemonImage] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png');
   // const [pokemonType1, setPokemonType1] = useState('electric');
   // const [pokemonType2, setPokemonType2] = useState('');

   //",[]" serve para que o useEffect chame a função apenas uma vez, quando a pagina é aberta.
   useEffect(() => {
      getPokemonGen(10)
      searchPokemon(25)
   })

   const api = axios.create({
      baseURL: 'https://pokeapi.co/api/v2/'
   })

   async function searchPokemon(pokemon : any) {
      const APIResponse = await api.get(`pokemon/${pokemon}`);
      if (APIResponse.status === 200) {
         setPokemonImg(APIResponse['data']['sprites']['other']['official-artwork']['front_default'])
      }
   }

   async function getPokemonGen(generationNumber: any) {
      const APIResponse = await api.get(`/pokemon/?offset=0&limit=${generationNumber}`);
      if (APIResponse.status === 200) {
         const { results } = APIResponse.data
         //"promise.all" é usado quando vc faz varias requisições a API, o "promise.all" só finaliza depois de receber todas as requisições evitanto q as requisiçoes buguem.
         const loadPokemons : any = await Promise.all(
            results.map(async (pokemon : Pokemon) => {
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

   return(
      <Main>
         <Container>
            <ScreenLeft>
               <PokemonImage src={pokemonImg} />
            </ScreenLeft>

            <ScreenRight>
               {
                  pokemonArr.map((item : Pokemon) =>
                     <text>
                        {item.id},
                        {item.name},
                        {item.types[0].type.name},
                        {item.types.length > 1 ? item.types[1].type.name : ''}
                     </text>
                  )
               }
            </ScreenRight>

            {/* <h1 className="pokemon-data">
               {
                  pokemonNumber !== '' ?
                     <span className="pokemon-number">{pokemonNumber} - </span>
                     :
                     ""
               }
               <span className="pokemon-name">{pokemonName}</span>
            </h1> */}

            {/* <div className="form">
               <input
                  className="search"
                  placeholder="Name or Number"
                  onChange={onChangeHandler}
                  //sempre que vc apeta um botão vc chama o "onKeyDown"
                  onKeyDown={keyPress}
               />
            </div> */}
            

            {/* não sei exatamente como se usa "arrow function / () =>" mas tive q usar aqui se não a aplicação buga */}
            {/* <button onClick={() => renderPokemon(search)} className='button-search'>
                  <img src={lupa} className='lupa-image' alt="lupa" />
               </button>
            </div> */}

            {/* <div className="buttons">
               <button className="button" onClick={anterior} >
                  &lt;&lt; Prev
               </button>

               <button className="button" onClick={proximo} >
                  Next &gt;&gt;
               </button>
            </div> */}

            <Image src={background} className='pokedex-image' alt="pokedexBackground" />
         </Container>
      </Main>
   );
}