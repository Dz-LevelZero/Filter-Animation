import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [popular, setPopular] = useState([]);
  
  const fetchPopular = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=1af8f5a0dac921ed793eaf9b1a89b23e&language=en-US&page=1");
    const movies = await response.json();
    setPopular(movies.results);
    console.log(movies.results);
  }

  useEffect(() => {
    fetchPopular();
  }, []);
  


  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
