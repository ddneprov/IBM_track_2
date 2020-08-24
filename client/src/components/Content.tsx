import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Autorization } from "./components/Autorization/Autorization";

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
        <Autorization />
    </div>)
}