import React from 'react'
import styled from 'styled-components'


const CakeImg = styled.img `
  width: 350px;
  height: auto;
`


class Cake extends React.Component {

  // // const Cake = (props) => {
    constructor(props) {
      super(props);
      this.state = { x: 0, y: 0 };
    }
    onclick(e) {
      this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    }
  // // }

// clickImage = (event) => { //เปลี่ยนค่า 3ค่าเพื่อส่งตอน submit
//   let xCoordinate = event.offsetX;
//   let yCoordinate = event.offsetY;
//   let numberProp = numProp;
// }


  render() {
    return (
      <div>
        <CakeImg src={require('./pictures/cake.png')} alt="The Cake" />
        {/* onClick={this.clickImage(event)}; */}

      </div>
    );
   
    }
  }

  export default Cake