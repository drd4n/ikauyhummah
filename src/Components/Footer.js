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
  height: 1.6em;
  padding: 0.25em 0.5em;
`
const Hack = styled.img`
  width: auto;
  height: 80px;
`

const StyledFooter = (props)=>(

    <Footer>

    
      <hr></hr>
      powered by :<Sponsor src={require('./pictures/sponsors/logo_Asset 53.png')} />
    <Sponsor src={require('./pictures/sponsors/logo_Asset 54.png')} />
    <Sponsor src={require('./pictures/sponsors/logo_Asset 55.png')} /> 
    <Sponsor src={require('./pictures/sponsors/logo_Asset 56.png')} /> 
    <Sponsor src={require('./pictures/sponsors/logo_Asset 57.png')} />
    <Sponsor src={require('./pictures/sponsors/logo_Asset 58.png')} /> 
    <Sponsor src={require('./pictures/sponsors/logo_Asset 59.png')} /> 
    <Sponsor src={require('./pictures/sponsors/logo_Asset 60.png')} />
    <Sponsor src={require('./pictures/sponsors/logo_Asset 61.png')} /> 
    <Sponsor src={require('./pictures/sponsors/logo_Asset 62.png')} /> 
    <Sponsor src={require('./pictures/sponsors/logo_Asset 63.png')} /> 
    <hr></hr>
    Created by KhaKai United<br></br>
    Contact us:
    <ul>
    <li>e-mail: freedompoon@gmail.com</li>
    <li>SoundCloud: www.SoundCloud.com/drd4nx</li>
    <li>IG: drd4nx , poonynh_ , konmeklotdai , Chickenrap_ </li>
    </ul> 
    </Footer>
    
    
)

export default StyledFooter