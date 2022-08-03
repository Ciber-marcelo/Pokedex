import React, { useState } from "react";
import "./styles.css";

import pokedex from '../../assets/pokedex.png';

export default function Home() {
   const [pokemonName, setPokemonName] = useState('pikachu');
   const [pokemonNumber, setPokemonNumber] = useState(25);
   const [pokemonImage, setPokemonImage] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif');

   //"await" é usado em funções "async", serve para a função só retornar depois de ter conseguido buscar os dados
   async function buscaPokemon(pokemon) {
      const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      if (APIResponse.status === 200) {
         return APIResponse.json();
      }
   }

   async function renderPokemon(pokemon) {
      //os "set" abaixo são oque aparece enquanto a API n busca os daods
      setPokemonName('Carregando...');
      setPokemonNumber('');

      const data = await buscaPokemon(pokemon);

      if (data) {
         setPokemonName(data.name);
         setPokemonNumber(data.id);
         setPokemonImage(data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']);
      } else {
         setPokemonName('Não encontrado');
         setPokemonNumber('');
         setPokemonImage('https://static.vecteezy.com/system/resources/previews/001/200/172/non_2x/x-png.png');
      }
   }

   function anterior() {
      renderPokemon(pokemonNumber - 1)
   }

   function proximo() {
      renderPokemon(pokemonNumber + 1)
   }

   return (
      <div className="main">
         <div className="container">
            <div className="tela">
               <img src={pokemonImage} className='pokemon-image' alt="pokemon" />
            </div>

            <h1 className="pokemon-data">
               <span className="pokemon-number">{pokemonNumber} - </span>
               <span className="pokemon-name">{pokemonName}</span>
            </h1>

            <div className="form">
               <input
                  type="text"
                  className="search"
                  placeholder="Nome ou Número"
                  // required
                  //"toLowerCase" serve para deixar as letras minusculas, asim mesmo se o usuario digitar com letras maiusculas a busca na API vai ser com letras minusculas
                  onChange={(e) => renderPokemon(e.target.value.toLowerCase())}
               />
            </div>

            <div className="buttons">
               <button 
                  className="button"
                  onClick={anterior}
               >
                  &lt;&lt; Anterior
               </button>

               <button 
                  className="button"
                  onClick={proximo}
               >
                  Próximo &gt;&gt;
               </button>
            </div>

            <img src={pokedex} className='pokedex-image' alt="pokedex" />
         </div>
      </div>
   )
}

