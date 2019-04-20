import React from 'react'
import styled from 'styled-components'


const CakeImg = styled.img `
  width: 100px;
  height: auto;
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
      <div>
        <CakeImg src='./pictures/cake.png' alt="The Cake" />

      </div>
    );
   
    }
  }

  export default Cake