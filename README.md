# react-input-number-clf

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-input-number.svg)](https://www.npmjs.com/package/react-input-number) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-input-number-clf
```

## Usage

```jsx
import React, { useState } from 'react'
import { InputNumber } from 'react-input-number-clf'
function Example(){
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
```

## License

MIT © [](https://github.com/)
