import React from 'react'
import styled from 'styled-components'

<-----example form beaver----->

const Paragraph = styled.h2`
  text-align: left;
  text-indent: 1em;
  @media (min-width: 1300px) {
    font-size: 0.95em !important;
  }
  @media (min-width: 1440px) {
    font-size: 1.1em !important;
    margin: 1em 5.5em;
  }
  margin: 1em 0.5em;
`
const Logo = (props) => (
  <LogoStyle>{props.name}</LogoStyle>
)


const LogoStyle = styled.h1`
  font-family: Book Antiqua;
  font-size:4em;
  color: #11432E;
  text-shadow: 5px 5px white;
`

const Header = () => (
    <div>
    </div>
)

export default Header