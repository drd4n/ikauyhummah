import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const PornOptions = [
  {
    text: 'HBD นะ มีความสุขมากๆ',
    value: '1',
  },
  {
    text: '',
    value: '',
  },
  {
    text: '',
    value: '',
  },  
  {
    text: '',
    value: '',
  },  
  {
    text: '',
    value: '',
  },  
  {
    text: '',
    value: '',
  },  
  {
    text: '',
    value: '',
  },  
  {
    text: '',
    value: '',
  },
]

const PornSelection = () => (
  <Dropdown
    placeholder='Select Porn'
    fluid
    selection
    options={friendOptions}
  />
)

export default PornSelection
