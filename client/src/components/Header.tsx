import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { ButtonBase, Theme } from "@material-ui/core";

const ibm_logo = require("../assets/ibm_logo.svg")

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    header: {
      backgroundColor: '#FFFFFF'
    },
    header__logo: {
      padding: theme.spacing(2, 2, 2, 5)
    }
  })
);

/**
 * Заголовок страницы
 */
export const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.header}>
      <ButtonBase
        className={classes.header__logo}>
        <img src={ibm_logo} alt="logo" />
      </ButtonBase>
    </div>
  )
}