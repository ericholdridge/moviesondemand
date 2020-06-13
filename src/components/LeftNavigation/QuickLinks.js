/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const QuickLinks = () => {
    return (
        <div css={styles}>
            <h3>QUICK LINKS</h3>
            <ul>
                <li><a href="/favoritemovies"><i className="fas fa-heart"></i>Favorite Movies</a></li>
                <li><a href="/popular"><i className="fas fa-star"></i>Popular</a></li>
                <li><a href="/watchlater"><i className="fas fa-folder"></i>Watch Later</a></li>
                <li><a href="/podcasts"><i className="fas fa-podcast"></i>Podcasts</a></li>
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
                i {
                    margin: 0 30px 0 0;
                }
            }
        }
    }
`;


export default QuickLinks;