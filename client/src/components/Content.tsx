import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { AutorizationForm } from "./components/AutorizationForm";

const useStyles = makeStyles(
    createStyles({
      content: {
        display: 'flex',
        justifyContent: 'center', /*Центрирование по горизонтали*/
        alignItems: 'center',     /*Центрирование по вертикали */
        height: '100%'
      }
    })
);

export const Content: React.FC = () => {
    const classes = useStyles()

    return (<div className={classes.content}>
        <AutorizationForm />
    </div>)
}