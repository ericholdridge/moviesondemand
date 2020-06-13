/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const QuickLinks = () => {
    return (
        <div css={styles}>
            <h3>MANAGE ACCOUNT</h3>
            <ul>
                <li><a href="/profile"><i className="fas fa-user-circle"></i>Profile</a></li>
                <li><a href="/payment"><i className="far fa-credit-card"></i>Payment</a></li>
                <li><a href="/support"><i className="fas fa-info-circle"></i>Support</a></li>
                <li><a href="/logout"><i className="fas fa-sign-out-alt"></i>Logout</a></li>
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