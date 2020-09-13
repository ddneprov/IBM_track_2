import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { ProfileHeader } from "./components/ProfileHeader";
import { ProfileContent } from "./components/Content/ProfileContent";
import { ProfileFieldType } from "./components/type";
import { useSelector } from "react-redux";
import { getCurrentUser, isAuthorization, getPilots } from "../../../redux/Profile/profile-selectors";
import { Redirect } from "react-router-dom";
import { RouterMap } from "../../../base/types/RouterMap";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profile: {
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(2),
      width: '95%'
    }
  })
);

/**
 * Значение идентификатора текущего пользователя.
 */
export const currentUserIdDefault = -1

type Props = {
  userId: number
}

export type MapDispatchToProps = {
  logOut: () => any
}

export const Profile: React.FC<Props & MapDispatchToProps> = (props) => {
  const classes = useStyles()
  const delimiterDefault = " ";
  const isAuth = useSelector(isAuthorization)
  const currentUser = useSelector(getCurrentUser)
  const pilots = useSelector(getPilots)

  if (isAuth) {
    let user

    if (props.userId === currentUserIdDefault) {
      user = currentUser as ProfileFieldType
    } else {
      user = pilots[props.userId]
    }

    const fio = [user?.firstName, user?.secondName, user?.patronymic].join(delimiterDefault)

    return (<div className={classes.profile}>
      {currentUser === user ? <ProfileHeader fio={fio}
        logOut={props.logOut} /> : <></>}
      <ProfileContent user={user} />
    </div>)
  } else {
    return <Redirect to={`/${RouterMap.Auth}`} />
  }
}