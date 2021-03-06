/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { NavLink } from "react-router-dom";

const QuickLinks = () => {
    return (
        <div css={styles}>
            <h3>QUICK LINKS</h3>
            <ul>
                <li><NavLink activeClassName="active" exact to="/"><i className="fas fa-heart"></i>Popular</NavLink></li>
                <li><NavLink activeClassName="active" to="/trending"><i className="fas fa-star"></i>Trending</NavLink></li>
            </ul>
        </div>
    )
}

const styles = css`
    width: 100%;
    max-width: 230px;
    text-align: left;
    h3 {
        color: #6f7181;
        letter-spacing: 2px;
    }
    ul {
        text-align: left;
        padding: 0;
        li {
            list-style: none;
            width: 100%;
            a {
                display: block;
                text-decoration: none;
                color: #6f7181;
                padding: 20px 0;
                &.active{
                    font-weight: 700;
                    color: #000;
                }
                i {
                    margin: 0 30px 0 0;
                }
            }
        }
    }
`;


export default QuickLinks;