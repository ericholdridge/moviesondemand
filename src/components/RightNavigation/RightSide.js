/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import RightSideNav from './RightSideNav';
import Movies from '../Movies/Movies';
import React, { useContext } from "react";
import { MovieContext } from '../Context/MovieContext';

const RightSide = () => {
    const { popularMovies, handleMovieSearch, handleInputValue, inputValue, setInputValue } = useContext(MovieContext);
    return (
        <section className="rightSide" css={styles}>
            <RightSideNav />
            <Movies />
        </section>
    )
}

const styles = css`
    width: 100%;
    height: 100%;
    background: #fdfbff;
`

export default RightSide;