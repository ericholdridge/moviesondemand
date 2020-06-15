/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useContext } from "react";
import { MovieContext } from '../Context/MovieContext';
import Container from "../Global/Container";

const Movies = () => {
    const { popularMovies } = useContext(MovieContext)
    return (
        <div className="movies" css={styles}>
            <Container>
                {
                    popularMovies.map(result => {
                        let img = `https://image.tmdb.org/t/p/w400/${result.poster_path}`;
                        return <img src={img} />
                    })
                }
            </Container>

        </div>
    )
}

const styles = css`
    width: 100%;
    height: 100%;
    .container {
        padding: 30px 0 0 0;
        max-width: 92%;
        height: 84vh;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        overflow-y: scroll;
        &::-webkit-scrollbar{
            width: 0;
        }
    }
    img {
        display: block;
        width: 300px;
        margin: 22px 0;
        cursor: pointer;
    }
`;

export default Movies;