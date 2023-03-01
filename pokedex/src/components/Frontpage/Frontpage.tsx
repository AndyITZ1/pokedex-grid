import './Frontpage.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import PokeCard from '../PokeCard/PokeCard';

interface Pokemon {
  name: string,
  dexNum: number,
  sprite: string
};

function Frontpage() {

  const [pokeList, setPokeList] = useState<Pokemon[]>([]);
  
  useEffect(() => {
    getPokemonList();
    },[]);

  async function getPokemonList() {
    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10set=0`).then(async (res: any) => 
        {
            // console.log(res);
            let currentList: Pokemon[] = [];
            for (let i = 0; i < res.data.results.length; i++) {
              // console.log(res.data.results[i].url);
              const r2 = await axios.get(res.data.results[i].url).then((poke2) => {
                let pokemon: Pokemon = {
                  name: res.data.results[i].name,
                  dexNum: poke2.data.id,
                  sprite: poke2.data.sprites.front_default
                };
                currentList.push(pokemon);
              });
            }
            
            console.log("I am current list:" + currentList);
            setPokeList(currentList);
            console.log(pokeList);
        });
    }
    catch(error)
    {
        console.log(error);
    }
  }

  
  return (
    <div className = "frontPageMain">
        <div className = "header">
            <h2>Pokedex Grid</h2>
        </div>

        <div className="pokemon-box"> 
            {
                pokeList.map((poke) => 
                  <PokeCard url={poke.sprite} name={poke.name}></PokeCard>
                )
            }
        </div>

        
    </div>
  )
}

export default Frontpage