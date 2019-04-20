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
      
        <CakeImg src={require('./pictures/cake.png')} alt="The Cake" />

      
    );
   
    }
  }

  export default Cake