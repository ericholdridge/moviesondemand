/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Container = ({ children }) => <div className="container" css={styles}>{children}</div>

const styles = css`
    width: 100%;
    max-width: 94%;
    margin: 0 auto;
`

export default Container;