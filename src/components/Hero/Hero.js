/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import HeroNav from "./HeroNav";
import Movies from "../Movies/Movies";

const Hero = () => {
    return (
        <section css={styles} className="hero">
            <HeroNav />
            <Movies />
        </section>
    );
};

const styles = css`
    background: #fdfbff;
`

export default Hero;