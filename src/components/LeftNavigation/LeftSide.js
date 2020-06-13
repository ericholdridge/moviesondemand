/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import QuickLinks from './QuickLinks';
import ManageAccount from './ManageAccout';
import Account from './Account';


const LeftSide = () => {
    return (
        <section className="leftSide" css={styles}>
            <Account />
            <QuickLinks />
            <ManageAccount />
        </section>
    )
}

const styles = css`
    width: 100%;
    max-width: 300px;
    background: #f4f0f9;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default LeftSide;