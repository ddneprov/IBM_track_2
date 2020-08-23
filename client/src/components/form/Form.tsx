import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Input } from '../input/Input';
import { FormInput } from '../../interfaces'
import isEmail from 'validator/lib/isEmail';

const useStyles = makeStyles(
  createStyles({
    auth: {
      width: '917px',
      height: '766px',
      margin: '90px auto 0',
      boxShadow: '0 0 15px rgba(0, 0, 0, 0.4)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#FFFFFF'
    },
    image: {
      marginTop: '53px'
    },
    title: {
      margin: '40px auto',
      fontSize: '3.8em'
    },
    form: {
      display: 'flex',
      flexDirection: 'column'
    },
    formButton: {
      backgroundColor: '#000000',
      borderRadius: '50px',
      width: '320px',
      fontSize: '2.2em',
      alignSelf: 'center',
      height: '70px',
      color: '#fff',
      marginTop: '30px',
      outline: 'none',
      cursor: 'pointer',
      border: 'none',
      position: 'relative'
    },
    formButtonDisabled: {
      cursor: 'default',
      backgroundColor: '#C0C0C0'
    },
    loader: {
      display: 'block',
      width: '50px',
      height: '50px',
      border: '4px solid #444',
      borderBottomColor: '#4169E1',
      borderRadius: '50%',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      margin: 'auto',
      animation: '$spin .75s infinite linear',
    },
    '@keyframes spin': {
      '100%': {
        transform: 'rotate(360deg)'
      },
    }
  })
);

interface FormState {
  email: FormInput,
  password: FormInput
}

export const Form: React.FC = () => {
  const classes = useStyles()
  const btnStyles = [classes.formButton]

  const [loading, setLoading] = useState(false)

  const [inputs, setInputs] = useState<FormState>({
    email: {
      type: 'email',
      label: 'Login',
      value: '',
      placeholder: 'Please enter your email address',
      isValid: false
    },
    password: {
      type: 'password',
      label: 'Password',
      value: '',
      placeholder: 'Please enter your password',
      minLength: 6,
      maxLength: 12,
      isValid: false
    }
  })

  const btnActive = Object.values(inputs).every(input => {
    return input.isValid === true;
  })

  if (!btnActive) {
    btnStyles.push(classes.formButtonDisabled)
  }

  const inputChangeHandler = (value: string, type: string) => {
    const state = { ...inputs }
    Object.values(state).forEach(input => {
      if (input.type === type) {
        input.value = value
        validInput(input)
      }
    })
    setInputs(state)
  }

  const validInput = (input: FormInput): void => {
    input.isValid = true
    if (input.type === 'email') {
      if (!isEmail(input.value)) {
        input.isValid = false
      }
    }

    if (input.type === 'password') {
      if (input.value.length < input.minLength! || input.value.length > input.maxLength!) {
        input.isValid = false
      }
    }
  }

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  return (
    <div className={classes.auth}>
      <img src="../../images/profileIcon-Default.png" alt="Профиль" className={classes.image} />
      <h2 className={classes.title}>Sign in</h2>
      <form className={classes.form} noValidate onSubmit={formSubmitHandler}>
        <Input
          input={inputs.email}
          changeHandler={inputChangeHandler}
        />
        <Input
          input={inputs.password}
          changeHandler={inputChangeHandler}
        />
        {loading ?
          <button className={btnStyles.join(' ')} disabled={!btnActive}>
            <i className={classes.loader}></i>
          </button>
          : <button className={btnStyles.join(' ')} disabled={!btnActive}>Confirm</button>}
      </form>
    </div>
  );
};
