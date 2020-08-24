import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { IBM_Default_Color } from "../../base/types/ColorBase";
import { Theme, Typography } from "@material-ui/core";

import profileIcon_Default from "../../assets/profileIcon_Default.png"
import { AutorizationForm } from "./AutorizationForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    autorization: {
      width: '70rem',
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),

      display: 'flex',
      justifyContent: 'center', /*Центрирование по горизонтали*/
      alignItems: 'center',     /*Центрирование по вертикали */
      flexDirection: 'column',
      flexWrap: 'wrap',
      boxShadow: '0px 4px 20px 5px rgba(0, 0, 0, 0.25)',
      backgroundColor: IBM_Default_Color.white
    },
    autorization__icon: {
      marginTop: '2rem',
      maxWidth: '5rem'
    },
    autorization__title: {
      marginTop: '2rem',
      color: IBM_Default_Color.black,
      fontWeight: 'bold'
    }
  })
);

export const Autorization: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.autorization}>
      <img className={classes.autorization__icon}
        src={profileIcon_Default}
        alt="Профиль" />
      <Typography variant="h4" noWrap className={classes.autorization__title}>Sign In</Typography>
      <AutorizationForm />
     </div>)
}