/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useContext } from 'react';
import { MovieContext } from '../Context/MovieContext';
import QuickLinks from './QuickLinks';
import Account from './Account';
import UserNotSignedIn from "../LeftNavigation/UserNotSignedIn";

const LeftSide = () => {
    const { hiddenMenu } = useContext(MovieContext);
    return (
        <section className={(!hiddenMenu ? 'hidden' : '') + " leftSide"} css={styles}>
            <Account />
            <QuickLinks />
            <UserNotSignedIn />
        </section>
    )
}

const styles = css`
    width: 100%;
    min-width: 300px;
    max-width: 300px;
    min-height: 100vh;
    background: #f4f0f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(max-width: 1040px){
        position: absolute;
        top: 0;
        left: 0;
        opacity: 1;
        transition: all 800ms ease-in-out;
        &.hidden{
            left: -700px;
            opacity: 0;
        }
    }
`;

export default LeftSide;