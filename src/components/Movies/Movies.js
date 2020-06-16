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
                        return <img src={`https://image.tmdb.org/t/p/w400/${result.poster_path}`} />
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
        img {
        display: block;
        width: 300px;
        margin: 22px 0;
        cursor: pointer;
    }
    }

    @media(max-width: 710px){
        .container{
            img{
                width: 100%;
                height: 600px;
            }
        }
    }

    @media(min-width: 711px) and (max-width: 1040px){
        .container{
            img{
                width: 46.5%;
                height: 490px;
            }
        }
    }

    @media(min-width: 1041px) and (max-width: 1403px){
        .container{
            img{
                width: 46.5%;
                height: 450px;
            }
        }
    }

    @media(min-width: 1404px) and (max-width: 1776px){
        .container{
            img{
                width: 30%;
                height: 450px;
            }
        }
    }
    @media(min-width: 1931px) and (max-width: 2155px) {
        .container{
            img{
                width: 22%;
                height: 450px;
            }
        }
    }
    @media(min-width: 2156px) {
        .container{
            img{
                width: 15%;
                height: 450px;
            }
        }
    }
`;

export default Movies;