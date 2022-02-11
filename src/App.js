import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './App.css';
import Filter from './Components/Filter';
import Movie from './Components/Movie';

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  
  const fetchPopular = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=1af8f5a0dac921ed793eaf9b1a89b23e&language=en-US&page=1");
    const movies = await response.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  }

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div className="App">
    <Filter 
      popular={popular}
      setFiltered={setFiltered}
      activeGenre={activeGenre}
      setActiveGenre={setActiveGenre}
    />
      <motion.div
        layout 
        className="popular-movies"
      >
        <AnimatePresence>
          {filtered.map(movie => (
            <Movie 
              key={movie.id} 
              movie = {movie}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
