import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer `
    font-family: 'Montserrat', sans-serif;
    font-size: 1em;
    text-align: left;
    font-family: 'Montserrat', sans-serif;
`
const Sponsor = styled.img`
  width: auto;
  height: 50px;
`
const Hack = styled.img`
  width: auto;
  height: 80px;
`

const StyledFooter = (props)=>(
    <Footer>
    <hr></hr>
    Created by KhaKai United<br></br>
    Contact us:
    <ul>
    <li>e-mail: freedompoon@gmail.com</li>
    <li>SoundCloud: www.SoundCloud.com/drd4nx</li>
    <li>IG: drd4nx , poonynh_ , konmeklotdai , Chickenrap_ </li>
    </ul> 
    <hr></hr>
    powered by : &nbsp;&nbsp;<Sponsor src={require('./pictures/sponsors/logo_Asset 53.png')} /> &nbsp;&nbsp;
    <Sponsor src={require('./pictures/sponsors/logo_Asset 54.png')} /> &nbsp;&nbsp;
    <Sponsor src={require('./pictures/sponsors/logo_Asset 55.png')} /> &nbsp;&nbsp;
    <Sponsor src={require('./pictures/sponsors/logo_Asset 56.png')} /> &nbsp;&nbsp;
    <Sponsor src={require('./pictures/sponsors/logo_Asset 57.png')} /><br>
    </br> &nbsp;&nbsp;
    <Sponsor src={require('./pictures/sponsors/logo_Asset 58.png')} /> &nbsp;&nbsp;
    <Sponsor src={require('./pictures/sponsors/logo_Asset 59.png')} /> &nbsp;&nbsp;
    <Sponsor src={require('./pictures/sponsors/logo_Asset 60.png')} /> &nbsp;&nbsp;
    <Sponsor src={require('./pictures/sponsors/logo_Asset 61.png')} /> &nbsp;&nbsp;
    <Sponsor src={require('./pictures/sponsors/logo_Asset 62.png')} /> &nbsp;&nbsp;
    <Hack src={require('./pictures/sponsors/logo_Asset 63.png')} /> 
    </Footer>
)

export default StyledFooter