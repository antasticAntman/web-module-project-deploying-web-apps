import './App.css';
import data from './Data/data';

const dataa = [
  {
    name:'Naruto',
    rank:'7th Hokage',
    age:'28',
    affinity:'Wind',
    kekkei:' The 9 Tails Fox Kurama',
    id: Math.random(Date.now()*1000),
  },
  {
    name:'Sasuke',
    rank:'Shadow Hokage',
    age:'29',
    affinity:'fire, lightning',
    kekkei:'Sharingan',
    id: Math.random(Date.now()*1000),
  },
  {
    name:'Kakashi',
    rank:'6th Hokage',
    age:'45',
    affinity:'earth, lightning',
    kekkei:'none',
    id: Math.random(Date.now()*1000),
  },
  {
    name:'Sakura',
    rank:'Head of the medical core',
    age:'29',
    affinity:'Ying and Yang',
    kekkei:'none',
    id: Math.random(Date.now()*1000),
  },
]



function App() {
  return (
    <div className="App">
      <header>
        <h1>Naruto Character cards</h1>
      </header>
      <div className='Char-container'>
        {data.map(char => {
          return (
            <div key={char.id} className='Character-card'>
              <h4>Name: {char.name}</h4>
              <p>Rank: {char.rank}</p>
              <p>Their age is {char.age}</p>
              <p>Their elemental affinity is {char.affinity}</p>
              <p>Their kekkie genkai is {char.kekkei}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
