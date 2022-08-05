import React, { useState } from "react";
import "./styles.css";

import pokedex from '../../assets/pokedex.png';
import lupa from '../../assets/lupa.png';

export default function Home() {
   const [search, setSearch] = useState('');

   const [pokemonNumber, setPokemonNumber] = useState(25);
   const [pokemonName, setPokemonName] = useState('pikachu');
   const [pokemonImage, setPokemonImage] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png');
   const [pokemonType1, setPokemonType1] = useState('electric');
   const [pokemonType2, setPokemonType2] = useState('');
   const [pokemonSpecie, setPokemonSpecie] = useState('pikachu');
   const [pokemonHeight, setPokemonHeight] = useState('4');
   const [pokemonWeight, setPokemonWeight] = useState('60');
   const [pokemonAbilitie, setPokemonAbilitie] = useState('static');

   

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
      setPokemonType1('Carregando...');
      setPokemonType2('');
      setPokemonSpecie('Carregando...');
      setPokemonHeight('Carregando...');
      setPokemonWeight('Carregando...');
      setPokemonAbilitie('Carregando...');

      const data = await buscaPokemon(pokemon);

      if (data) {
         setPokemonName(data.name);
         setPokemonNumber(data.id);
         setPokemonImage(data['sprites']['other']['official-artwork']['front_default']);
         setPokemonType1(data['types']['0']['type']['name']);
         setPokemonType2(data['types']['1']['type']['name']);
         setPokemonSpecie(data['species']['name']);
         setPokemonHeight(data.height);
         setPokemonWeight(data.weight);
         setPokemonAbilitie(data['abilities']['0']['ability']['name']);
      } else {
         setPokemonName('Not found');
         setPokemonNumber('');
         setPokemonImage('https://static.vecteezy.com/system/resources/previews/001/200/172/non_2x/x-png.png');
         setPokemonType1('Not found');
         setPokemonType2('');
         setPokemonSpecie('Not found');
         setPokemonHeight('Not found');
         setPokemonWeight('Not found');
         setPokemonAbilitie('Not found');
      }
   }

   // "e" signific evento e "e.target.value" é oque tem nesse evento, neste caso é o texto digitado.
   //"toLowerCase" serve para deixar as letras minusculas, asim mesmo se o usuario digitar com letras maiusculas a busca na API vai ser com letras minusculas
   //aqui eu usei "const" em vez de "function" pq tive q usar o "() =>" q é uma arrow function, então se eu usasse "function" ficaria redundante com dus funçoes e ia dar erro.
   const onChangeHandler = (e) => {
      setSearch(e.target.value.toLowerCase())
      console.log(e.target.value)
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

            <div className="tela2">
               <ul className="list-items">
                  {
                     pokemonType2 !== '' ? 
                     <li>Type: {pokemonType1} / {pokemonType2} </li>
                     :
                     <li>Type: {pokemonType1} </li>
                  }
                  <li>Specie: {pokemonSpecie} </li>
                  <li>Height: {pokemonHeight} </li>
                  <li>weight: {pokemonWeight} </li>
                  <li>Abilitie: {pokemonAbilitie} </li>
               </ul>
            </div>

            <h1 className="pokemon-data">
               {
                  pokemonNumber !== '' ?
                  <span className="pokemon-number">{pokemonNumber} - </span>
                  :
                  ''
               }
               <span className="pokemon-name">{pokemonName}</span>
            </h1>

            <div className="form">
               <input
                  // type="text"
                  // required
                  className="search"
                  placeholder="Name or Number"
                  onChange={onChangeHandler}
               />
               {/* não sei exatamente como se usa "arrow function / () =>" mas tive q usar aqui se não a aplicação buga */}
               <button onClick={() => renderPokemon(search)} className='button-search'>
                  <img src={lupa} className='lupa-image' alt="lupa" />
               </button>
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

