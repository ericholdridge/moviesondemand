/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import LeftSide from './components/LeftNavigation/LeftSide';
import RightSide from './components/RightNavigation/RightSide';
import Container from './components/Global/Container';
import Axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [popularMovies, setPopularMovies] = useState({results: []});
  const API_KEY = '57f65183575e8374ca2935e492541b4e';
  const popularMoviesAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  // Display popular movies when user loads page
  useEffect(() => {
    Axios.get(popularMoviesAPI).then(({data})=> {
      const response = data.results;
      setPopularMovies((prevState) => {
        return {...prevState, results: response}
      })
    })
  }, []);

  return (
    <div className="App" css={styles}>
      <Container>
        <LeftSide />
        <RightSide results={popularMovies}/>
      </Container>
    </div>
  );
}

const styles = css`
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App;
