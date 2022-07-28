import "./styles.css";

import pokedex from '../../assets/pokedex.png';

export default function Home() {
   return (
      <div className="main">
         <div className="container">
            <div className="tela"> 
               <img src="https://i.pinimg.com/originals/e9/38/d1/e938d18fc07a3ffd16b4864ef2f1308f.gif" className='pokemon-image' alt="pokemon" />
            </div>

            <h1 className="pokemon-data">
               <span className="pokemon-number">25 - </span>
               <span className="pokemon-name">pikachu</span> 
            </h1>

            <div className="form">
               <input
                  type={"search"}
                  className="search"
                  placeholder="Nome ou Número"
                  required
               />
            </div>

            <div className="buttons">
               <button className="button">&lt;&lt; Anterior</button>
               <button className="button">Próximo &gt;&gt;</button>
            </div>

            <img src={pokedex} className='pokedex-image' alt="pokedex" />
         </div>
      </div>
   )
}