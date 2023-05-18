import React, { useState, useEffect } from "react";
import background from '../../assets/background.png'
import api from '../../services/api'
import { gens } from '../../global/gens'
import {
   Main,
   Container,
   Background,
   ScreenLeft,
   ScreenRight,
   PokemonImage,
   Info,
   ContainerSearch,
   ContainerPrevNext,
   ContainerGen,
   ButtonGen,
   ContainerShiny,
   Generation
} from "./styles"
import { Loading } from "../../components/loading";
import { ButtonPokemon } from "../../components/buttonPokemon"
import { ButtonShiny } from "../../components/buttonShiny";
import { ButtonsPrevNext } from "../../components/buttonsPrevNext";
import { InputSearch } from "../../components/inputSearch";

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

type genType = {
   id: number,
   name: string,
   offSet: number,
   limit: number
}

export default function Home() {
   const [pokemonObj, setPokemonObj] = useState<PokemonObj>({ id: 25 } as PokemonObj)
   const [pokemonArr, setPokemonArr] = useState([]);
   const [shiny, setShiny] = useState(false)
   const [loading, setLoading] = useState(false)
   const [loadingGen, setLoadingGen] = useState(false)
   const [active, setActive] = useState(gens[0]);

   //colocar o "[]" vazio serve para que o useEffect chame a função apenas uma vez, quando a pagina é aberta.
   useEffect(() => {
      getPokemonGen(0, 151)
   }, [])

   //se colocar uma varialvel dentro de "[]", o useEffect será chamado sempre que essa variavel tiver seu estado alterado
   useEffect(() => {
      getPokemon(pokemonObj.id)
   }, [shiny])

   async function getPokemon(pokemon: string | number) {
      setLoading(true)
      const APIResponse = await api.get(`pokemon/${pokemon}`);
      if (APIResponse.status === 200) {
         const { name, id, types, sprites } = APIResponse.data;
         const loadPokemon = {
            name: name,
            id: id,
            types: types,
            sprite: !shiny ? sprites['other']['official-artwork']['front_default'] : sprites['other']['official-artwork']['front_shiny']
         }
         setPokemonObj(loadPokemon)
         setLoading(false)
      }
   }

   async function getPokemonGen(offsetNumber: any, limitNumber: any) {
      setLoadingGen(true)
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
         setLoadingGen(false)
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

   function handleButtonGen(gen: any) {
      setActive(gen)
      getPokemonGen(gen.offSet, gen.limit)
      // setTimeout(() =>  getPokemon(pokemonObj.id), 2000)
   }

   return (
      <Main>
         <Container>
            <ScreenLeft>
               {!loading ?
                  <PokemonImage src={pokemonObj.sprite ? pokemonObj.sprite : 'https://static.vecteezy.com/system/resources/previews/001/200/172/non_2x/x-png.png'} />
                  :
                  <Loading />
               }
            </ScreenLeft>

            <Info>
               {!loading ? <span className="pokemon-number">{pokemonObj.id} - </span> : '-'}
               {!loading ? <span className="pokemon-name">{pokemonObj.name}</span> : ''}
            </Info>

            <ContainerSearch>
               <InputSearch 
                  onChange={(e: any) => getPokemon(e.target.value.toLowerCase())}
               />
            </ContainerSearch>

            <ContainerPrevNext>
               <ButtonsPrevNext
                  onClickPrev={() => getPokemon(pokemonObj.id - 1)}
                  onClickNext={() => getPokemon(pokemonObj.id + 1)}
                  pokemonId={pokemonObj.id}
               />
            </ContainerPrevNext>

            <ScreenRight>
               {!loadingGen ?
                  pokemonArr.map((item: PokemonObj) =>
                     <ButtonPokemon
                        onClick={() => getPokemon(item.id)}
                        number={item.id}
                        name={item.name}
                        type={item.types[0].type.name}
                        type2={item.types.length > 1 ? item.types[1].type.name : null}
                     />
                  )
                  :
                  <Loading />
               }
            </ScreenRight>

            <Generation>
               <text>{active.name}</text>
            </Generation>

            <ContainerGen>
               {gens.map((gen: genType) => (
                  <ButtonGen active={active === gen} onClick={() => handleButtonGen(gen)}>
                     {gen.id}
                  </ButtonGen>
               ))}
            </ContainerGen>

            <ContainerShiny>
               <ButtonShiny onClick={() => setShiny(!shiny)} />
            </ContainerShiny>

            <Background src={background} className='pokedex-image' alt="pokedexBackground" />
         </Container>
      </Main>
   );
}