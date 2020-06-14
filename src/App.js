/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import LeftSide from './components/LeftNavigation/LeftSide';
import RightSide from './components/RightNavigation/RightSide';
import Container from './components/Global/Container';

import { MovieState } from './components/Context/MovieContext';

function App() {
  return (
    <MovieState>
      <div className="App" css={styles}>
        <Container>
          <LeftSide />
          <RightSide />
        </Container>
      </div>
    </MovieState>
  );
}

const styles = css`
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App;
