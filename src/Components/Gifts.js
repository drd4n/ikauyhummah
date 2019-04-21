import React from 'react'
import styled from 'styled-components'

// setProp = () => {
//   let numProp = {value}
// }

const Gift = styled.img`
  width: auto;
  height: 50px;
  margin: 5px 30px;
`

const Gifts = () => (
  <div>
    <a src="google.com">
    <Gift src={require('./pictures/candle_prop.png')} /> &nbsp;
    </a>
<Gift src={require('./pictures/cherry_prop.png')} /> &nbsp;
    
<Gift src={require('./pictures/cone_prop.png')} /> &nbsp;
    
<Gift src={require('./pictures/egg_prop.png')} /> &nbsp;
    
<Gift src={require('./pictures/straw_prop.png')} /> &nbsp;
    
<Gift src={require('./pictures/hbd_prop.png')} /><br></br>
    <Gift src={require('./pictures/pizza_prop.png')} /> &nbsp;

    <Gift src={require('./pictures/genius_prop.png')} /> &nbsp;

    <Gift src={require('./pictures/spoonfork_prop.png')} /> &nbsp;

    <Gift src={require('./pictures/prayuth_prop.png')} /> &nbsp;

    <Gift src={require('./pictures/cash_prop.png')} /> &nbsp;

    <Gift src={require('./pictures/cake.png')} /><br></br>

    <Gift src={require('./pictures/fb1_like.png')} /> &nbsp;

    <Gift src={require('./pictures/fb1_love.png')} /> &nbsp;

    <Gift src={require('./pictures/fb1_lol.png')} /> &nbsp;

    <Gift src={require('./pictures/fb1_sad.png')} /> &nbsp;

    <Gift src={require('./pictures/fb1_wow.png')} /> &nbsp;

    <Gift src={require('./pictures/fb1_angry.png')} />

  </div>
)



export default Gifts