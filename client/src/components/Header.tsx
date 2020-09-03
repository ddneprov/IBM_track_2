import React, { useState } from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Theme, IconButton, Button } from "@material-ui/core"
import { IBM_Default_Color } from "../base/types/ColorBase"
import { NavigationItemInfo } from "../common/components/type"
import { DropRightMenu } from "../common/components/DropRightMenu"
import { RouterMap } from "../base/types/RouterMap"

const profileIcon_Default = require("../assets/profileIcon_Default.png")
const ibm_logo = require("../assets/ibm_logo.svg")

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      backgroundColor: IBM_Default_Color.white
    },
    header__logo: {
      padding: theme.spacing(2, 2, 2, 5)
    },
    header__profileIcon: {
      width: '3rem'
    },
    header__profileIcon_button: {
      position: 'relative',
      left: '83%'
    }
  })
);

/**
 * Заголовок страницы
 */
export const Header = () => {
  const classes = useStyles()

  const [isOpen, setState] = useState(false);
  const pages: Array<NavigationItemInfo> = [
    { text: "Мой профиль", pathURL: RouterMap.Profile },
    { text: "Выйти", pathURL: RouterMap.Auth }
  ]

  const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {

    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState(isOpen);
  };

  return (
    <div className={classes.header}>
      <Button
        className={classes.header__logo}>
        <img src={ibm_logo} alt="logo" />
      </Button>

      {/* Кнопка выпадающего меню */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        className={classes.header__profileIcon_button}
        onClick={toggleDrawer(true)}
      >
        <img src={profileIcon_Default} alt="logo" className={classes.header__profileIcon} />
      </IconButton>

      {/* Выпадающее меню */}
      <React.Fragment>
        <DropRightMenu pages={pages}
          isOpen={isOpen}
          toggleDropRightMenu={toggleDrawer} />
      </React.Fragment>
    </div>
  )
}