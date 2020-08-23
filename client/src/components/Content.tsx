import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(
    createStyles({
      content: {
        width: '100%'
      }
    })
);

export const Content: React.FC = () => {
    const classes = useStyles()

    return (<div className={classes.content}>
        
    </div>)
}