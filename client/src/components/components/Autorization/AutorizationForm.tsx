import React from "react"
import { Formik } from "formik";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import * as Yup from "yup";

import { IFormInput } from "./type";
import { FormInput } from "./FormInput";

interface IFormState {
    login: IFormInput,
    password: IFormInput
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        autorizationForm: {
            //margin: theme.spacing(5)
        }
    })
)

export const AutorizationForm: React.FC = () => {

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
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
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
                </form>)
        }}
    </Formik>)
}