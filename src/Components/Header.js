import React from 'react'


class Header extends React.Component{
/*const Paragraph = styled.h2`
  text-align: left;
  text-indent: 1em;
  @media (min-width: 1300px) {
    font-size: 0.95em !important;
  }
  @media (min-width: 1440px) {
    font-size: 1.1em !important;
    margin: 1em 5.5em;
  }
  margin: 1em 0.5em;
`
const Logo = (props) => (
  <LogoStyle>{props.name}</LogoStyle>
)*/



// monthSwitch() {
//   swit ch(toMonth) {
//     case 1:
//       return 'มกรา';
//       case 2:
//       return 'กุมภา';
//       case 3:
//       return 'มีนา';
//       case 4:
//       return 'เมษา';
//       case 5:
//       return 'พฤษภา';
//       case 6:
//       return 'มิถุนา';
//       case 7:
//       return 'กรกฏา';
//       case 8:
//       return 'สิงหา';
//       case 9:
//       return 'กันยา';
//       case 10:
//       return 'ตุลา';
//       case 11:
//       return 'พฤศจิกา';
//       case 12:
//       return 'ธันวา';
//     default:
//       return 'เดือนนี้';
//   }
// }

// chbdSwitch() {
//   switch(toDay) {
//     case 0:
//       return 'hbd';
//       case 1:
//       return 'hbd';
//       case 2:
//       return 'hbd';
//       case 3:
//       return 'hbd';
//       case 4:
//       return 'hbd';
//     default:
//       return 'hbd วันไรเนี่ย';
//   }
// }

/*const LogoStyle = styled.h1`
  font-family: Book Antiqua;
  font-size:4em;
  color: #11432E;
  text-shadow: 5px 5px white;
`*/
 constructor(){
   super()
   this.state = {time:new Date()}
 }

currentTime(){
  this.setState({
    time: new Date()
  })
}

componentWillMount() {
setInterval(()=>this.currentTime(),1000)
}


  render() {
    return (
      <p>
      
        {this.state.time.toLocaleTimeString()}
      </p>
    );
   
    }
  }
export default Header
