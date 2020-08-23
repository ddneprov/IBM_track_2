import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(
    createStyles({
      autorizationForm: {
        width: '100%',
      }
    })
);

export const AutorizationForm: React.FC = () => {
    const classes = useStyles()

    return (<div className={classes.autorizationForm}>
        
    </div>)
}