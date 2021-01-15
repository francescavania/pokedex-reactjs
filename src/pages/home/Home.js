import React, { useEffect, useState } from "react";
import { API_URL } from "../../utils/Constants";
import axios from 'axios'
import './Home.scss'

export default function Home() {
  const [Pokedex,setPokedex] = useState([])
  const pokeContext = React.createContext(Pokedex);

  // useEffect(() => {
  //   axios.get(API_URL)
  //       .then(res => {
  //         setPokedex(res.data.results)
  //       })
  //       .catch(error => {
  //           console.log(error);
  //       })
  // }, [])

    useEffect(() => {
      async function fetchData(){
        try{
          const resUrl = await axios.get(API_URL)
          let poke = await Promise.all(
            resUrl.data.results.map(async (element) =>{
              let pokeResponse = await axios.get(element.url)
              return pokeResponse.data
            })
          )
          setPokedex(poke)
        }catch(error){
          console.log(error)
        }
      }
      fetchData();
    }, [])
    console.log(pokeContext._currentValue)


  return (
    <>
    
      <div class="d-flex flex-wrap d-flex d-flex d-flex justify-content-evenly mt-3">
        {
          Pokedex.map((poke,i)=>(
            <div className="card shadow p-3 mb-3" style={{width: "200px"}}>
              <img className="card-img-top" height="100"src={poke.sprites.other.dream_world.front_default} alt="Card image cap"/>
              <div className="card-body mt-3">
              <p className="card-text text-center">{poke.name}</p>
              </div>
            </div>
          ))
        }
      </div>
      
    </>
  );
}
