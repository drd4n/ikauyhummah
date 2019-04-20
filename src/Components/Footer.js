import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer `
    font-family: 'Montserrat', sans-serif;
    font-size: 1em;
    text-align: left;
`

const StyledFooter = (props)=>(
    <Footer>
    <hr></hr>
    Powered by FireBase<br></br>
    Created by KhaKai United(Dr.D4N, PoonnyNH, KONMEKLOYDAI, Chickenrap_)<br></br>
    Contact us:
    <ul>
    <li>e-mail: poon.002@hotmail.com</li>
    <li>SoundCloud: www.SoundCloud.com/drd4nx</li>
    <li>IG: drd4nx</li>
    </ul> 
    </Footer>
)

export default StyledFooter