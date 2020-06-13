/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Container = ({children}) => <div className="container" css={styles}>{children}</div>

const styles = css`
    width: 100%;
    height: 100%;
    max-height: 1200px;
    max-width: 1800px;
    margin: 0 auto;
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export default Container;