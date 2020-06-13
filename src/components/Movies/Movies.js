/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Movies = ({movieResults}) => {
    return (
        <section className="movies" css={styles}>
            { 
                movieResults.results.map(result => {
                    let img = `https://image.tmdb.org/t/p/w400/${result.poster_path}`;
                    return <img src={img}/>
                })
            }
        </section>
    )
}

const styles = css`
    width: 100%;
    height: 100%;
    max-height: 720px;
    max-width: 1300px;
    margin: 0 auto;
    overflow-x: scroll;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    img {
        display: block;
        width: 300px;
        margin: 0 0 26px 0;
        cursor: pointer;
        border-radius: 10px;
    }
`;

export default Movies;