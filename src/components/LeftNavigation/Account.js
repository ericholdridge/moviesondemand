/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import PersonImage from '../../images/profileImage.jpg';

const Account = () => {
    return (
        <div css={styles}>
            <div className="profileImage">
                <img src={PersonImage} alt="Profile Picture"/>
            </div>
            <span>Leslie Robertson</span>
        </div>
    )
}

const styles = css`
    border: 2px solid white;
    border-radius: 30px;
    display: flex;
    align-items: center;
    margin: 20px 0 30px 0;
    .profileImage {
        width: 50px;
        height: 50px;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            display: block;
        }
    }
    span {
        display: block;
        padding: 0 20px;
        font-weight: bold;
    }
`;


export default Account;