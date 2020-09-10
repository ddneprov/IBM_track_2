import React from "react"
import { Formik } from "formik";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import CircularProgress from '@material-ui/core/CircularProgress';
import * as Yup from "yup";
import jwt from 'jwt-decode'

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

    return (<Formik
        initialValues={{
            Login: '',
            Password: ''
        }}
        onSubmit={async (values) => {
            //const response = await authAPI.logIn(new UserAuth(values.Login, values.Password));
            //alert(response)
            const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5hZ2VyQG1haWwucnUiLCJpZCI6MzAsImZpcnN0TmFtZSI6IkRlbmlzIiwic2Vjb25kTmFtZSI6IlBldHJvdiIsInBhdHJvbnltaWMiOiJBbmRyZWV2aWNoIiwiY3Jld1JvbGUiOiLQmtCS0KEt0YHRgtCw0LbQtdGAIiwic3RhbmRpbmdGcm9tRGF0ZSI6IjIwMTEtMDYtMTMgMDQ6MDA6MDAuMCIsInN0YW5kaW5nRnJvbURhdGVJblJvbGUiOiIyMDIwLTA1LTExIDAzOjAwOjAwLjAiLCJyZWxpYWJpbGl0eUluZGV4Ijo1LCJyZXdhcmRzQW5kUHVuaXNobWVudHMiOjAsInVzZXJTdGF0dXMiOiJBQ1RJVkUiLCJyb2xlIjoiUk9MRV9NQU5BR0VSIiwiaWF0IjoxNTk5NjA2MjU2LCJleHAiOjE1OTk2MDk4NTZ9.lcZmTuCMC2rEOHOXDg9CdEecIMnupzW_UVPgMNE1zmw";
            console.log(jwt(token))
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
                        isError={errors.Login && touched.Login}
                        errorMessage={errors.Login}
                        handleBlur={handleBlur}
                        handleChange={handleChange} />

                    <FormInput label={inputs.password.label}
                        value={values.Password}
                        placeholder={inputs.password.placeholder}
                        isError={errors.Password && touched.Password}
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