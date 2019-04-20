import React from 'react'
import styled from 'styled-components'


const CakeImg = styled.img `
  width: 300px;
  height: auto;
  align: center;
`

class Cake extends React.Component {

  // const Cake = (props) => {
    constructor(props) {
      super(props);
      this.state = { x: 0, y: 0 };
    }
    onclick(e) {
      this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    }
  // }


  render() {
    return (
      
        <CakeImg src="https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/52908248_304817086889615_5342276976432381952_n.jpg?_nc_cat=107&_nc_eui2=AeHky1joq_IZhUE6-dsrg5yB5_nvxcT5k0dQ-dDnx654C3VrDHBsZquJWLzl_5pxaWXWef4tLyZ181UjA0rbTztjeCFYhTS0u3-EBJsUlpMw2A&_nc_ht=scontent.fbkk8-2.fna&oh=c07ad367ffb00246597bd31b8e31eba6&oe=5D475AC1" alt="The Cake" />

      
    );
   
    }
  }

  export default Cake