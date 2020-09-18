import React from "react"
import clsx from 'clsx'
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { IFormInput } from "./type"
import { IBM_Default_Color } from "../../../base/types/ColorBase"
import { IBM_Style } from "../../../base/types/StyleBase"

type Props = {
    value: string | number | readonly string[] | undefined,
    errorMessage: string | undefined
    isError: boolean | "" | undefined,
    inputType:  "text" | "password",
    handleChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
    handleBlur: ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined
} & IFormInput

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form__input_container: {
            margin: theme.spacing(2)
        },
        form__label: {
            display: 'block',
            fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
            fontWeight: 'bold',
            color: IBM_Default_Color.black,
            margin: theme.spacing(1),
            marginLeft: theme.spacing(2)
        },
        form__input: {
            width: '100%',
            border: `3px solid ${IBM_Default_Color.black}`,
            borderRadius: IBM_Style.borderRadius,
            boxSizing: 'border-box',
            padding: theme.spacing(1.5),
            outline: 'none'
        },
        error: {
            fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
            color: IBM_Default_Color.error,
            borderColor: IBM_Default_Color.error
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
    inputType,
    handleChange,
    handleBlur
}) => {

    const classes = useStyles()

    return (<div className={classes.form__input_container}>
        <label htmlFor={label}
            className={classes.form__label}>{label}</label>
        <input
            id={label}
            placeholder={placeholder}
            type={inputType}
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