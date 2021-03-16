import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as ArrowDownBlueSVG } from './icon.svg'
import { useDebounce } from 'react-use'

const Inputs = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    max-width: 400px;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    background: ${props => props.background ? props.background : '#fff'};
    height: ${props => props.size ? `${props.size}px` : '30px'};
    padding: 0 3px;
    font-weight: bold;
    border-radius: 24px;
    font-size: 12px;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }
;

    input {
        width: 45px;
        border: none;
        outline: none;
        text-align: center;
        font-weight: bold;
        font-size: 12px;
        background: transparent;
    }

,
`
const InputText = styled.span`
    white-space: nowrap;
    padding: 0 10px;
    font-size: ${props => props.size ? `${props.size / 2}px` : '12px'};
`
const ButtonLeft = styled.button(props => ({
  border: 'none',
  background: 'none',
  padding: 0,
  margin: 0,
  width: props.size,
  height: props.size,
  cursor: 'pointer',
  transform: 'rotate(90deg)',
  outline: 'none',
  '& svg': {
    width: props.size,
    height: props.size
  }
}))
const ButtonRight = styled.button(props => ({
  border: 'none',
  background: 'none',
  padding: 0,
  margin: 0,
  width: props.size,
  height: props.size,
  cursor: 'pointer',
  transform: 'rotate(-90deg)',
  outline: 'none',
  '& svg': {
    width: props.size,
    height: props.size
  }
}))
const StyledArrowDownBlueSVG = styled(ArrowDownBlueSVG)`
    fill: ${props => props.colors || props.fill};
`

export const InputNumber = ({
                              onKeyDown,
                              onChange,
                              onBlur,
                              values,
                              steps = 1,
                              label,
                              field,
                              min,
                              max,
                              disabled,
                              type,
                              background,
                              fill,
                              size = 25,
                              isDisableLeft = false,
                              colors = '#1790FF'

                            }) => {
  const [inputValue, setInputValue] = useState(Number(values || 0))

  useDebounce(() => {
    if (Number(inputValue) !== Number(values || 0)) {
      onChange(inputValue)
    }

  }, 300, [inputValue])
  useEffect(() => {
    if (Number(inputValue) !== Number(values || 0)) {
      setInputValue(Number(values || 0))
    }
  }, [values])


  const onClickLeft = (e) => {
    if (disabled || isDisableLeft)
      return
    if (type === 'text') {
      if (typeof onChange === 'function')
        onChange(e)
      return
    }
    if (Number(values - steps) >= (min || 0)) {
      setInputValue(Number(values - steps))
      onChange(Number(values - steps))
      return
    }
  }

  const onClickRight = (e) => {
    if (disabled)
      return
    if (type === 'text') {
      if (typeof onChange === 'function')
        onChange(e)
      return
    }
    if (max && Number(values + steps) <= max) {
      setInputValue(Number(values + steps))
      onChange(Number(values + steps))
      return
    } else {
      setInputValue(Number(values + steps))
      onChange(Number(values + steps))

      return
    }
  }

  const onChangeNumber = (e) => {
    if (Number(e.target.value) >= 0)
      setInputValue(Number(e.target.value))
    else setInputValue(Number(values || 0))
  }

  return (
    <Inputs styles background={background} size={size}>
      <ButtonLeft
        size={size - 2}
        onClick={onClickLeft}
      >
        <StyledArrowDownBlueSVG fill={fill} colors={colors}/>
      </ButtonLeft>
      <div>
        {
          type === 'text' ?
            <InputText size={size}>{label}</InputText>
            :
            <React.Fragment
            >
              <input
                value={inputValue ? inputValue : 0}
                step={steps}
                onKeyDown={onKeyDown}
                onChange={onChangeNumber}
                onBlur={onBlur}
                type={'number'}
                min={min}
                max={max}
                disabled={disabled}
              />
              <span>{label}</span>
            </React.Fragment>
        }

      </div>
      <ButtonRight
        size={size - 2}
        onClick={onClickRight}
      >
        <StyledArrowDownBlueSVG colors={colors}/>
      </ButtonRight>
    </Inputs>
  )
}
