import React from "react"
import { IFormInput } from "./type";

type Props = {
    value: string | number | readonly string[] | undefined,
    errorMessage: string | undefined
    isValid: boolean | "" | undefined,
    handleChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
    handleBlur: ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined
} & IFormInput

export const FormInput: React.FC<Props> = ({
    label,
    value,
    errorMessage,
    isValid,
    placeholder,
    handleChange,
    handleBlur
}) => {

    return (<>
        <label htmlFor={label} style={{ display: "block" }}>{label}</label>
        <input
            id={label}
            placeholder={placeholder}
            type="text"
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
                isValid
                    ? "text-input error"
                    : "text-input"
            }
        />
        {isValid && (
            <div className="input-feedback">{errorMessage}</div>
        )}
    </>)
}