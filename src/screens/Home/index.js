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
      setPokemonNumber('');
      setPokemonName('Carregando...');
      setPokemonType1('');
      setPokemonType2('');
      setPokemonSpecie('');
      setPokemonHeight('');
      setPokemonWeight('');
      setPokemonAbilitie('');

      const data = await buscaPokemon(pokemon);

      if (data && data.id) {
         setPokemonNumber(data.id);
         setPokemonName(data.name);
         setPokemonImage(data['sprites']['other']['official-artwork']['front_default']);
         setPokemonType1(data['types']['0']['type']['name']);
         if (data['types']['1'] !== undefined) {
            setPokemonType2(data['types']['1']['type']['name']);
         }
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

   // "e" significa evento e "e.target.value" é oque tem nesse evento, neste caso é o texto digitado.
   //"toLowerCase" serve para deixar as letras minusculas, asim mesmo se o usuario digitar com letras maiusculas a busca na API vai ser com letras minusculas
   //aqui eu usei "const" em vez de "function" pq tive q usar o "() =>" q é uma arrow function, então se eu usasse "function" ficaria redundante com dus funçoes e ia dar erro.
   const onChangeHandler = (e) => {
      setSearch(e.target.value.toLowerCase())
   }

   //o numero "13" é o codigo(keyCode) referente a telcla "Enter"
   const keyPress = (e) => {
      if (e.keyCode === 13) {
         renderPokemon(search);
      }
   }

   function anterior() {
      if (pokemonNumber > 1) {
         renderPokemon(pokemonNumber - 1)
      }
   }

   function proximo() {
      if (pokemonNumber < 898) {
         renderPokemon(pokemonNumber + 1)
      }
   }

   return (
      <div className="main">
         <div className="container">
            <div className="tela">
               <img src={pokemonImage} className='pokemon-image' alt="pokemon" />
            </div>

            <div className="tela2">
               <ul className="list-items1">
                  <li>Type: </li>
                  {
                     pokemonType1 === 'normal' ?
                        <li className="type normal">{pokemonType1}</li>
                        :
                        pokemonType1 === 'fire' ?
                           <li className="type fire">{pokemonType1}</li>
                           :
                           pokemonType1 === 'water' ?
                              <li className="type water">{pokemonType1}</li>
                              :
                              pokemonType1 === 'electric' ?
                                 <li className="type electric">{pokemonType1}</li>
                                 :
                                 pokemonType1 === 'grass' ?
                                    <li className="type grass">{pokemonType1}</li>
                                    :
                                    pokemonType1 === 'ice' ?
                                       <li className="type ice">{pokemonType1}</li>
                                       :
                                       pokemonType1 === 'fighting' ?
                                          <li className="type fighting">{pokemonType1}</li>
                                          :
                                          pokemonType1 === 'poison' ?
                                             <li className="type poison">{pokemonType1}</li>
                                             :
                                             pokemonType1 === 'ground' ?
                                                <li className="type ground">{pokemonType1}</li>
                                                :
                                                pokemonType1 === 'flying' ?
                                                   <li className="type flying">{pokemonType1}</li>
                                                   :
                                                   pokemonType1 === 'psychic' ?
                                                      <li className="type psychic">{pokemonType1}</li>
                                                      :
                                                      pokemonType1 === 'bug' ?
                                                         <li className="type bug">{pokemonType1}</li>
                                                         :
                                                         pokemonType1 === 'rock' ?
                                                            <li className="type rock">{pokemonType1}</li>
                                                            :
                                                            pokemonType1 === 'ghost' ?
                                                               <li className="type ghost">{pokemonType1}</li>
                                                               :
                                                               pokemonType1 === 'dragon' ?
                                                                  <li className="type dragon">{pokemonType1}</li>
                                                                  :
                                                                  pokemonType1 === 'dark' ?
                                                                     <li className="type dark">{pokemonType1}</li>
                                                                     :
                                                                     pokemonType1 === 'steel' ?
                                                                        <li className="type steel">{pokemonType1}</li>
                                                                        :
                                                                        pokemonType1 === 'fairy' ?
                                                                           <li className="type fairy">{pokemonType1}</li>
                                                                           :
                                                                           <li> {pokemonType1}</li>
                  }

                  {
                     pokemonType2 === "" ?
                        ""
                        :
                        pokemonType2 === 'normal' ?
                           <li className="type normal">{pokemonType2}</li>
                           :
                           pokemonType2 === 'fire' ?
                              <li className="type fire">{pokemonType2}</li>
                              :
                              pokemonType2 === 'water' ?
                                 <li className="type water">{pokemonType2}</li>
                                 :
                                 pokemonType2 === 'electric' ?
                                    <li className="type electric">{pokemonType2}</li>
                                    :
                                    pokemonType2 === 'grass' ?
                                       <li className="type grass">{pokemonType2}</li>
                                       :
                                       pokemonType2 === 'ice' ?
                                          <li className="type ice">{pokemonType2}</li>
                                          :
                                          pokemonType2 === 'fighting' ?
                                             <li className="type fighting">{pokemonType2}</li>
                                             :
                                             pokemonType2 === 'poison' ?
                                                <li className="type poison">{pokemonType2}</li>
                                                :
                                                pokemonType2 === 'ground' ?
                                                   <li className="type ground">{pokemonType2}</li>
                                                   :
                                                   pokemonType2 === 'flying' ?
                                                      <li className="type flying">{pokemonType2}</li>
                                                      :
                                                      pokemonType2 === 'psychic' ?
                                                         <li className="type psychic">{pokemonType2}</li>
                                                         :
                                                         pokemonType2 === 'bug' ?
                                                            <li className="type bug">{pokemonType2}</li>
                                                            :
                                                            pokemonType2 === 'rock' ?
                                                               <li className="type rock">{pokemonType2}</li>
                                                               :
                                                               pokemonType2 === 'ghost' ?
                                                                  <li className="type ghost">{pokemonType2}</li>
                                                                  :
                                                                  pokemonType2 === 'dragon' ?
                                                                     <li className="type dragon">{pokemonType2}</li>
                                                                     :
                                                                     pokemonType2 === 'dark' ?
                                                                        <li className="type dark">{pokemonType2}</li>
                                                                        :
                                                                        pokemonType2 === 'steel' ?
                                                                           <li className="type steel">{pokemonType2}</li>
                                                                           :
                                                                           <li className="type fairy">{pokemonType2}</li>
                  }
               </ul>
               <li className="list-items2">Specie: {pokemonSpecie} </li>
               <li className="list-items2">Height: {pokemonHeight * 10}c </li>
               <li className="list-items2">Weight: {pokemonWeight * 100}g </li>
               <li className="list-items2">Abilitie: {pokemonAbilitie} </li>
            </div>

            <h1 className="pokemon-data">
               {
                  pokemonNumber !== '' ?
                     <span className="pokemon-number">{pokemonNumber} - </span>
                     :
                     ""
               }
               <span className="pokemon-name">{pokemonName}</span>
            </h1>

            <div className="form">
               <input
                  className="search"
                  placeholder="Name or Number"
                  onChange={onChangeHandler}
                  //sempre que vc apeta um botão vc chama o "onKeyDown"
                  onKeyDown={keyPress}
               />

               {/* não sei exatamente como se usa "arrow function / () =>" mas tive q usar aqui se não a aplicação buga */}
               <button onClick={() => renderPokemon(search)} className='button-search'>
                  <img src={lupa} className='lupa-image' alt="lupa" />
               </button>
            </div>

            <div className="buttons">
               <button className="button" onClick={anterior} >
                  &lt;&lt; Prev
               </button>

               <button className="button" onClick={proximo} >
                  Next &gt;&gt;
               </button>
            </div>

            <img src={pokedex} className='pokedex-image' alt="pokedex" />
         </div>
      </div>
   )
}

