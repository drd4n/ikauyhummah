import React from 'react'
import styled from 'styled-components'


const StyledButton = styled.button `
    margin-bottom: 0.5em;
    margin-right: 3.5em;
    border-color: red;
    font-family: 'Montserrat', sans-serif;

    :hover {
        color: red;
    }
`
const Summit =()=>(
    <StyledButton id="auyporn">Submit</StyledButton>
    )

export default Summit