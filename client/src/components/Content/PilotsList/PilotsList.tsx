import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pilotsList: {
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(2),
        boxShadow: '0px 4px 20px 5px rgba(0, 0, 0, 0.25)',
        width: '95%'
    }
  })
);

export const PilotsList: React.FC = () => {
  const classes = useStyles()

  return (<div className={classes.pilotsList}>
    
  </div>)
}