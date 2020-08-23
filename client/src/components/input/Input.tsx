import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { FormInput } from '../../interfaces'

const useStyles = makeStyles(
  createStyles({
    label: {
      paddingLeft: '34px',
      paddingBottom: '11px',
      fontSize: '1.9em'
    },
    input: {
      width: '476px',
      height: '62px',
      border: '3px solid #000000',
      boxSizing: 'border-box',
      borderRadius: '25px',
      paddingLeft: '25px',
      marginBottom: '22px',
      fontSize: '1.3em',
      outline: 'none'
    },
    inputInvalid: {
      border: '3px solid #FF0000',
    }
  })
)

interface InputValue {
  input: FormInput,
  changeHandler(value: string, type: string): void
}

export const Input: React.FC<InputValue> = (props) => {
  const classes = useStyles()
  const inputStyles = [classes.input]

  const [touched, setTouced] = useState(false)

  if (props.input.isValid === false && touched) {
    inputStyles.push(classes.inputInvalid)
  }

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTouced(true)
    props.changeHandler(event.target.value, props.input.type)
  }

  return (
    <>
      <label htmlFor={props.input.type} className={classes.label}>{props.input.label}</label>
      <input
        value={props.input.value}
        onChange={inputChangeHandler}
        className={inputStyles.join(' ')}
        id={props.input.type}
        type={props.input.type}
        placeholder={props.input.placeholder} />
    </>
  )
}