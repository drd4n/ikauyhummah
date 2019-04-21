import React from 'react'
import styled from 'styled-components'
import FromInput from './FromInput'

// sendToBase = () => { //ส่งค่าไป firebase
//     ___ = Cake.xCoordinate ;
//     ___ = Cake.yCoordinate ;
//     ___ = numProp ;
//   }

const StyledButton = styled.button`
    margin-bottom: 0.5em;
    margin-right: 3.5em;
    border-color: red;
    font-family: 'Montserrat', sans-serif;

    :hover {
        color: red;
    }
`
let name = prompt("ชื่ออะไรเหรอเราอะ?", "");

class Submit extends React.Component {

    render() {
        return (
            <div>
                <StyledButton onClick={chkPrompt}>click me to HBD you!</StyledButton>
            </div>
        );
    }
}


const chkPrompt =() => (   
    alert("Happy Birth Day นะเจ้า" + name + "💓")
)


export default Submit