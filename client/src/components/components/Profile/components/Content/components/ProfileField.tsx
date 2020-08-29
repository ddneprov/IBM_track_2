import React, { useState } from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        field: {
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            margin: theme.spacing(0.5)
        },
    })
);

type Props = {
    label: string,
    value: string
}

export const ProfileField : React.FC<Props> = ({
    label,
    value
}) => {
    
    const classes = useStyles();

    const [fieldValue, setFieldValue] = useState(value)
    const onChangeFieldValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFieldValue(event.target.value);
    }

    return <div className={classes.field}>
        <label>{label}</label>
        <input type='text' 
               value={fieldValue}
               onChange={onChangeFieldValue}></input>
    </div>
}