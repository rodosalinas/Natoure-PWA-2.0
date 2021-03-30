import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root{
    --dark-blue: #2c375a;
    --green-natoure: #06bc68;
    --fb-blue: #4f6eac;
    --light-green: #06bc68;
    --black: #1c1c1c;
    --light-grey: #f0f0f0;
    --white: #ffffff;
    --grey: #ced0da;
    --dark-grey: #9a9fa8;
    --blue: #65afff;
  }
  body{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
  input:focus, button:focus, textarea:focus, select:focus {
    outline: none !important;
  }
`
