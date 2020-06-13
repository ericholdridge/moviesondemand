/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import RightSideNav from './RightSideNav';
import Movies from '../Movies/Movies';

const RightSide = ({results}) => {
    return (
        <section className="rightSide" css={styles}>
            <RightSideNav />
            <Movies movieResults={results}/>
        </section>
    )
}

const styles = css`
    width: 100%;
    height: 100%;
    background: #fdfbff;
`

export default RightSide;