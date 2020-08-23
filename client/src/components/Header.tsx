import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"

const ibm_logo = require("../assets/ibm_logo.svg")

const useStyles = makeStyles(
  createStyles({
    header: {
      width: '100%',
      backgroundColor: '#FFFFFF'
    },
    headerContainer: {
      maxWidth: '1440px',
      margin: '0 auto',
      height: '77px',
      display: 'flex',
      justifyContent: 'space-between',
    }
  })
);

export const Header = () => {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <div className={classes.headerContainer}>
        <img src={ibm_logo} alt="logo" />
      </div>
    </header>
  )
}