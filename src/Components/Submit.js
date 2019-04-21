import React from 'react'
import styled from 'styled-components'

// sendToBase = () => { //ส่งค่าไป firebase
//     ___ = Cake.xCoordinate ;
//     ___ = Cake.yCoordinate ;
//     ___ = numProp ;
//   }

const StyledButton = styled.button `
    margin-bottom: 0.5em;
    margin-right: 3.5em;
    border-color: red;
    font-family: 'Montserrat', sans-serif;

    :hover {
        color: red;
    }
`
const Submit =()=>(
    <StyledButton id="auyporn">Submit</StyledButton>
    )

export default Submit