import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [cast, setCast] = useState([]);

  const url = 'https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20';

  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(body => {
      setCast(body)
    })
  },[])

  return (
    <div className="App">
      <h1>Rick & Morty Cast</h1>
      <div className='cards'>
     {
       cast.map(character => (
        
         <Card key ={character.id} name={character.name} type ={character.species} img={character.image} />
       ))
     }
     </div>
    </div>
  );
}

export default App;
