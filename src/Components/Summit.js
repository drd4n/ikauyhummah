import React from 'react'
import styled from 'styled-components'


const StyledButton = styled.button `
    margin-bottom: 0.5em;
    margin-left: 0.5em;
    border-color: red;

    :hover {
        color: red;
    }
`
const Summit =()=>(
    <StyledButton id="auyporn">Submit</StyledButton>
    )

export default Summit