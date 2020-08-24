import React from "react"
import clsx from 'clsx'
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { IFormInput } from "./type"
import { IBM_Default_Color } from "../../../base/types/ColorBase"

type Props = {
    value: string | number | readonly string[] | undefined,
    errorMessage: string | undefined
    isError: boolean | "" | undefined,
    handleChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
    handleBlur: ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined
} & IFormInput

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form__container: {
            margin: theme.spacing(3)
        },
        form__label: {
            display: 'block',
            fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
            fontWeight: 'bold',
            color: IBM_Default_Color.black,
            margin: theme.spacing(1)
        },
        form__input: {
            width: '20rem',
            border: `3px solid ${IBM_Default_Color.black}`,
            borderRadius: '25px',
            boxSizing: 'border-box',
            padding: theme.spacing(1.5),
            outline: 'none'
        },
        error: {
            fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
            color: IBM_Default_Color.red,
            borderColor: IBM_Default_Color.red
        },
        error__message: {
            padding: theme.spacing(1.5)
        }
    })
)

export const FormInput: React.FC<Props> = ({
    label,
    value,
    errorMessage,
    isError,
    placeholder,
    handleChange,
    handleBlur
}) => {

    const classes = useStyles()

    return (<div className={classes.form__container}>
        <label htmlFor={label}
            className={classes.form__label}>{label}</label>
        <input
            id={label}
            placeholder={placeholder}
            type="text"
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
                clsx(classes.form__input, {
                    [classes.error]: isError
                })
            }
        />
        {isError && (
            <div className={clsx(classes.error, classes.error__message)}>{errorMessage}</div>
        )}
    </div>)
}