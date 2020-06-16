/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useContext } from "react";
import { MovieContext } from '../Context/MovieContext';

const RightSideNav = () => {
    const { handleMovieSearch, inputValue, setInputValue, hiddenMenu, setHiddenMenu } = useContext(MovieContext);
    return (
        <nav css={styles}>
            <h3>Movies On Demand</h3>
            <form action="" onSubmit={handleMovieSearch}>
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search" onChange={e => setInputValue(e.target.value)} value={inputValue} />
            </form>
            <i onClick={() => setHiddenMenu(!hiddenMenu)} id="burgerMenu" className="fas fa-bars"></i>
        </nav>
    )
}

const styles = css`
    width: 100%;
    max-width: 92%;
    margin: 0 auto;
    padding: 30px 0 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    #burgerMenu{
        color: #fe8da1;
        cursor: pointer;
        display: none;
    }
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
            width: 400px;
        }
    }
    @media(max-width: 800px){
        h3{
            display: none;
        }
        form{
            input{
                width: 360px;
            }
        }
    }

    @media(max-width: 1040px){
        #burgerMenu{
        display: block;
    }
    }
`;

export default RightSideNav;