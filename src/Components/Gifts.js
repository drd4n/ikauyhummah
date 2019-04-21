import React from 'react'
import styled from 'styled-components'

const setProp = (value) => {
   let numProp = value;
 }

const Gift = styled.img`
  width: auto;
  height: 40px;
`

const Gifts = () => (
  <div>
    <Gift src={require('./pictures/candle_prop.png') onClick={setProp(1)} /> &nbsp;

<Gift src={require('./pictures/cherry_prop.png')} onClick={setProp(2)}/> &nbsp;
    
<Gift src={require('./pictures/cone_prop.png')} onClick={setProp(3)}/> &nbsp;
    
<Gift src={require('./pictures/egg_prop.png')} onClick={setProp(4)}/> &nbsp;
    
<Gift src={require('./pictures/straw_prop.png')} onClick={setProp(5)}/> &nbsp;
    
<Gift src={require('./pictures/hbd_prop.png')} onClick={setProp(6)}/><br></br>
    <Gift src={require('./pictures/pizza_prop.png')} onClick={setProp(7)}/> &nbsp;

    <Gift src={require('./pictures/genius_prop.png')} onClick={setProp(8)}/> &nbsp;

    <Gift src={require('./pictures/spoonfork_prop.png')} onClick={setProp(9)}/> &nbsp;

    <Gift src={require('./pictures/prayuth_prop.png')} onClick={setProp(10)}/> &nbsp;

    <Gift src={require('./pictures/cash_prop.png')} onClick={setProp(11)}/> &nbsp;

    <Gift src={require('./pictures/cake.png')} onClick={setProp(12)}/><br></br>

    <Gift src={require('./pictures/fb1_like.png')} onClick={setProp(13)}/> &nbsp;

    <Gift src={require('./pictures/fb1_love.png')} onClick={setProp(13)}/> &nbsp;

    <Gift src={require('./pictures/fb1_lol.png')} onClick={setProp(13)}/> &nbsp;

    <Gift src={require('./pictures/fb1_sad.png')} onClick={setProp(13)}/> &nbsp;

    <Gift src={require('./pictures/fb1_wow.png')} onClick={setProp(13)}/> &nbsp;

    <Gift src={require('./pictures/fb1_angry.png')} onClick={setProp(13)}/>

  </div>
)



export default Gifts