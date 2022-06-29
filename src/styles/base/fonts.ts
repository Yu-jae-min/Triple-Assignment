import { css } from 'styled-components'

const font = css`
  body,
  button,
  input,
  textarea {
    font-family: sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-feature-settings: 'tnum';
  }

  input[type='number'] {
    font-feature-settings: 'tnum';

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      margin: 0;
      appearance: none;
    }
  }
`

export default font
