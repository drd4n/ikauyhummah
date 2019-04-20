import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const PornOptions = [
  {
    text: 'สุขสันต์วันเกิดน้า',
    value: '1',
  },
  {
    text: 'สุขภาพแข็งแรงครับผม',
    value: '2',
  },
  {
    text: 'Happy Birthday',
    value: '3',
  },  
  {
    text: 'เฮงๆรวยๆตลอดไปนะจ๊ะ',
    value: '4',
  },  
  {
    text: 'แฮบปี้เบิร์ดเดย์',
    value: '5',
  },  
  {
    text: 'HBD นะ มีความสุขมากๆ',
    value: '6',
  },  
  {
    text: 'ขอให้มีความสุขมากๆ',
    value: '7',
  },  
  {
    text: 'ขอให้มีแฟนหล่อรวยใหญ่ยาว',
    value: '8',
  },
  {
    text: 'ขอให้รวย ถูกหวย',
    value: '9',
  }, 
  {
    text: 'ถึงจะดูเล็กน้อย แต่คำอวยพรที่ให้เต็มร้อยนะ',
    value: '10',
  }, 
  {
    text: 'จะเจออะไรก็ขอให้สู้นะ',
    value: '11',
  }, 
  {
    text: 'ทำอะไรก็ขอให้สำเร็จ',
    value: '12',
  } 
]

const PornSelection = () => (
  <Dropdown
    placeholder='Select Porn'
    fluid
    selection
    options={PornOptions}
  />
)

export default PornSelection
