import React, { useState } from "react"
import { Formik } from "formik";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import CircularProgress from '@material-ui/core/CircularProgress';
import * as Yup from "yup";
import jwt from 'jwt-decode'
import { authAPI } from "../../../api/auth/auth-api";
import { UserAuth } from "../../../api/auth/auth-type.d";
import { IFormInput } from "./type";
import { FormInput } from "./FormInput";
import { Button } from "@material-ui/core";
import { IBM_Default_Color } from "../../../base/types/ColorBase";

export interface IFormState {
    login: IFormInput,
    password: IFormInput
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        autorizationForm: {
            display: 'flex',
            width: '20rem',
            flexFlow: 'column wrap',
            justifyContent: 'center'
        },
        autorizationform__loader: {
            color: IBM_Default_Color.blue,
        },
        autorizationForm__button_submit: {
            backgroundColor: IBM_Default_Color.black,
            borderRadius: '50px',
            color: IBM_Default_Color.white,
            margin: `${theme.spacing(2)}px ${theme.spacing(5)}px`,
            padding: theme.spacing(1),
            fontSize: '1.3em',
            '&:hover': {
                backgroundColor: IBM_Default_Color.black,
            }
        }
    })
)

export type MapDispatchToProps = {
    setUser: (user: string) => any
}

export const AutorizationForm: React.FC<MapDispatchToProps> = (props) => {

    const classes = useStyles()

    const inputs: IFormState = {
        login: {
            label: 'Login',
            value: '',
            placeholder: 'Please enter your login address'
        },
        password: {
            label: 'Password',
            value: '',
            placeholder: 'Please enter your password'
        }
    }

    const [isErrorAuth, setIsErrorAuth] = useState(false);

    return (<Formik
        initialValues={{
            Login: '',
            Password: ''
        }}
        onSubmit={async (values) => {
            //const response = await authAPI.logIn(new UserAuth(values.Login, values.Password));
            let response = await fetch('http://130.193.38.154:1337/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    'userLogin': values.Login,
                    'userPassword': values.Password
                })
            });

            let result = await response.json();
            console.log('response: ', result)
            if (!result.token) {
                setIsErrorAuth(true)
                alert('Неверный логин или пароль !')
            } else {
                setIsErrorAuth(false)
            }
            const token = result.token;
            console.log('jwt_decode: ', jwt(token))
            props.setUser(token)
        }}
        validationSchema={Yup.object().shape({
            Login: Yup.string().email("Login is not valid").required("Required"),
            Password: Yup.string().required("Required")
        })}
    >
        {(props) => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
            } = props;
            return (
                <form onSubmit={handleSubmit}
                    className={classes.autorizationForm}>
                    <FormInput label={inputs.login.label}
                        value={values.Login}
                        placeholder={inputs.login.placeholder}
                        isError={errors.Login && touched.Login && !isErrorAuth}
                        errorMessage={errors.Login}
                        handleBlur={handleBlur}
                        handleChange={handleChange} />

                    <FormInput label={inputs.password.label}
                        value={values.Password}
                        placeholder={inputs.password.placeholder}
                        isError={errors.Password && touched.Password && !isErrorAuth}
                        errorMessage={errors.Password}
                        handleBlur={handleBlur}
                        handleChange={handleChange} />

                    <Button type="submit"
                        disabled={errors.Login !== undefined ||
                            errors.Password !== undefined ||
                            values.Login === '' ||
                            values.Password === '' ||
                            isSubmitting}
                        variant="contained"
                        className={classes.autorizationForm__button_submit}>
                        {isSubmitting ? <CircularProgress className={classes.autorizationform__loader} /> : <span>Confirm</span>}
                    </Button>
                </form>)
        }}
    </Formik>)
}