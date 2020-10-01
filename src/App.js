import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [cast, setCast] = useState([]);

  const url = 'https://rickandmortyapi.com/api/character/?limit=100';

  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(body => {
      setCast(body.results)
    })
  },[])

  return (
    <div className="App">
      <h1>Rick & Morty Cast</h1>
      <div className='cards'>
     {
       cast.map(character => (
        
         <Card key ={character.id} name={character.name} type ={character.species} img={character.image} status={character.status} />
       ))
     }
     </div>
    </div>
  );
}

export default App;
