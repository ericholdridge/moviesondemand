/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useContext } from "react";
import { MovieContext } from '../Context/MovieContext';

const RightSideNav = () => {
    const { handleMovieSearch, inputValue, setInputValue } = useContext(MovieContext);
    return (
        <div className="hello" css={styles}>
            <h3>TRENDING NOW</h3>
            <ul>
                <li><a href="">All</a></li>
                <li><a href="">Movies</a></li>
                <li><a href="">Series</a></li>
                <li><a href="">TV Shows</a></li>
            </ul>
            <form action="" onSubmit={handleMovieSearch}>
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search" onChange={e => setInputValue(e.target.value)} value={inputValue} />
            </form>
        </div>
    )
}

const styles = css`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fdfbff;
    h3 {
        color: #fe8da1;
        letter-spacing: 2px;
    }
    ul {
        display: flex;
        align-items: center;
        list-style: none;
        li {
            padding: 8px 30px;
            border: 2px solid white;
            background: #f9f7fb;
            border-radius: 20px;
            margin: 0 14px;
            a {
                text-decoration: none;
                color: #000;
                font-size: .9rem;
            }
        }
    }
    form {
        display: flex;
        height: 40px;
        i {
            background: #edebee;
            padding: 0 10px;
            height: inherit;
            display: flex;
            border-radius: 10px 0 0 10px;
            align-items: center;
            cursor: pointer;
        }
        input {
            background: #edebee;
            border-radius: 0 10px 10px 0;
            border: none;
            outline: none;
        }
    }
`;

export default RightSideNav;