import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { ButtonBase, Theme, Toolbar } from "@material-ui/core";
import { IBM_Default_Color } from "../base/types/ColorBase";

const ibm_logo = require("../assets/ibm_logo.svg")

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    header: {
      backgroundColor: IBM_Default_Color.white
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
    <Toolbar className={classes.header}>
      <ButtonBase
        className={classes.header__logo}>
        <img src={ibm_logo} alt="logo" />
      </ButtonBase>
    </Toolbar>
  )
}