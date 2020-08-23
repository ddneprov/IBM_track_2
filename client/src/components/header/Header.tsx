import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";


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
        <img src="../../../images/ibm_logo-black 1.svg" alt="logo" />
      </div>
    </header>
  )
}