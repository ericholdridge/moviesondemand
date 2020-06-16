/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <div css={styles}>
            <h3>Register Movies On Demand Account</h3>
            <form action="">
                <label>Email</label>
                <input type="text" placeholder="Email..." />
                <label>Username</label>
                <input type="text" placeholder="Username" />
                <label>Password</label>
                <input type="password" />
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    )
}

const styles = css`
    width: 100%;
    padding: 20px 0;    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #000;
    h3 {
        color: #6f7181;
        letter-spacing: 2px;
        padding: 0 0 20px 0;
    }
    form {
        display: flex;
        flex-direction: column;
        width: 600px;
        label {
            color: #fff;
            padding: 0 0 6px 0;
        }
        input {
            height: 40px;
            margin: 0 0 20px 0;
            border: none;
            outline: none; 
            padding: 0 0 0 10px;
            border-radius: 8px;
            &:last-of-type {
                cursor: pointer;
                margin: 0 auto;
                width: 200px;   
            }
        }  
    }
`;

export default Register;
