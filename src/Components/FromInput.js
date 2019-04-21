import React from 'react'
import styled from 'styled-components'

const TextHere = styled.textarea`
    padding-top: 0.5em;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Roboto', sans-serif;

`


const FromInput = () => (


    <form>

        <TextHere class="HBDmsg" rows="4" cols="50" id="auyporn" placeholder="ใส่ชื่อตรงนี้ๆๆ" ></TextHere>
    </form>
)

export default FromInput