import React, { useState } from 'react'

import { InputNumber } from 'react-input-number'
import 'react-input-number/dist/index.css'

function App() {
  const [value, setValue] = useState(0)
  const onChange = (e) => {
    console.log(e)
    setValue(e)
  }
  return (
    <InputNumber
      values={value}
      label={'number'}
      background={'#f1f1f1'}
      onChange={(e) => onChange(e)}
    />
  )
}

export default App
