/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { NavLink } from "react-router-dom";

const UserNotSignedIn = () => {
    return (
        <div css={styles}>
            <h3>REGISTER/SIGN IN</h3>
            <ul>
                <li><NavLink activeClassName="active" exact to="/register"><i class="fas fa-user-plus"></i>Register</NavLink></li>
                <li><NavLink activeClassName="active" to="/login"><i class="fas fa-sign-in-alt"></i>Login</NavLink></li>
            </ul>
        </div>
    )
}

const styles = css`
    width: 100%;
    max-width: 230px;
    text-align: left;
    padding: 30px 0 0 0;
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


export default UserNotSignedIn;