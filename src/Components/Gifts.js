import React from 'react'
import styled from 'styled-components'



const Gift = styled.img `
  width: 30px;
  height: 30px;
`
class Gifts = () => {
  render() {
    return (
    <div class="container-fluid">
  <div class="row">
    <div class="col-sm-3">
    </div>
    <div class="col-sm-1">
    <Gift src={require('./pictures/fb1_like.png')}></Gift>
    </div>
    <div class="col-sm-1">
    <Gift src={require('./pictures/fb1_love.png')}> </Gift>
    </div>
    <div class="col-sm-1">
    <Gift src={require('./pictures/fb1_lol.png')}> </Gift>
    </div>   
    <div class="col-sm-1">
    <Gift src={require('./pictures/fb1_sad.png')}> </Gift>
    </div>
    <div class="col-sm-1">
    <Gift src={require('./pictures/fb1_wow.png')}> </Gift>
    </div>
    <div class="col-sm-1">
    <Gift src={require('./pictures/fb1_angry.png')}> </Gift>
    </div>
    <div class="col-sm-3">
    </div>
    </div>

    <div class="row">
    <div class="col-sm-3">
    </div>
    <div class="col-sm-1">
    <Gift src={require('./pictures/fb1_like.png')}> </Gift>
    </div>
    <div class="col-sm-1">
    <Gift src={require('./pictures/fb1_love.png')}> </Gift>
    </div>
    <div class="col-sm-1">
    <Gift src={require('./pictures/fb1_lol.png')}> </Gift>
    </div>   
    <div class="col-sm-1">
    <Gift src={require('./pictures/fb1_sad.png')}> </Gift>
    </div>
    <div class="col-sm-1">
    <Gift src={require('./pictures/fb1_wow.png')}> </Gift>
    </div>
    <div class="col-sm-1">
    <Gift src={require('./pictures/fb1_angry.png')}> </Gift>
    </div>
    <div class="col-sm-3">
    </div>
    </div>


    <div class="row">
    <div class="col-sm-3">
    </div>
    <div class="col-sm-1">
    <Gift src={require('./pictures/fb1_like.png')}> </Gift>
    </div>
    <div class="col-sm-1">
    <Gift src={require('./pictures/fb1_love.png')}> </Gift>
    </div>
    <div class="col-sm-1">
    <Gift src={require('./pictures/fb1_lol.png')}> </Gift>
    </div>   
    <div class="col-sm-1">
    <Gift src={require('./pictures/fb1_sad.png')}> </Gift>
    </div>
    <div class="col-sm-1">
    <Gift src={require('./pictures/fb1_wow.png')}> </Gift>
    </div>
    <div class="col-sm-1">
    <Gift src={require('./pictures/fb1_angry.png')}> </Gift>
    </div>
    <div class="col-sm-3">
    </div>
    </div>


</div>
    )
  }
}

export default Gifts