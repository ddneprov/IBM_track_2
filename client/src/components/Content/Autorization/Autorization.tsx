import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { IBM_Default_Color } from "../../../base/types/ColorBase";
import { Theme, Typography } from "@material-ui/core";

import profileIcon_Default from "../../../assets/profileIcon_Default.png"
import { AutorizationForm } from "./AutorizationForm";
import { useSelector } from "react-redux";
import { isAuthorization } from "../../../redux/Profile/profile-selectors";
import { Redirect } from "react-router-dom";
import { ProfileFieldType } from "../Profile/components/type";
import { RouterMap } from "../../../base/types/RouterMap";
import { IBM_Style } from "../../../base/types/StyleBase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    autorization: {
      width: '30rem',
      margin: theme.spacing(3),

      display: 'flex',
      //justifyContent: 'center', /*Центрирование по горизонтали*/
      alignItems: 'center',     /*Центрирование по вертикали */
      flexFlow: 'column wrap',
      boxShadow: '0px 4px 20px 5px rgba(0, 0, 0, 0.25)',
      backgroundColor: IBM_Default_Color.white,
      borderRadius: IBM_Style.borderRadius
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

export type MapDispatchToProps = {
  logOut: () => any
  setUser: (user: string) => any
}

export type MapStateToProps = {
  currentUser: ProfileFieldType
}

export const Autorization: React.FC<MapStateToProps & MapDispatchToProps> = (props) => {
  const classes = useStyles()
  const isAuth = useSelector(isAuthorization)
  if (isAuth) {
    return <Redirect to={`/${RouterMap.Profile}`}/>
  }

  return (
    <div className={classes.autorization}>
      <img className={classes.autorization__icon}
        src={profileIcon_Default}
        alt="Профиль" />
      <Typography variant="h4"
                  align="center"
                  noWrap
                  className={classes.autorization__title}>Sign In</Typography>
      <AutorizationForm setUser={props.setUser}/>
    </div>)
}