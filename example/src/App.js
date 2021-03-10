import React, { useState } from 'react'

import { InputNumber } from 'react-input-number'
import 'react-input-number/dist/index.css'

const App = () => {
  const [value, setValue] = useState(0)
  const onChange = (e) => {
    setValue(e)
  }
  return <InputNumber
    values={value}
    label={'number'}
    background={'#f1f1f1'}
    onChange={(e) => onChange(e)}
  />
}

export default App
