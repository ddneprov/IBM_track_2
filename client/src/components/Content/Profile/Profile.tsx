import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { ProfileHeader } from "./components/ProfileHeader";
import { ProfileContent } from "./components/Content/ProfileContent";
import { ProfileFieldType } from "./components/type";
import { useSelector } from "react-redux";
import { getCurrentUser, isAuthorization, getSelectedUser } from "../../../redux/Profile/profile-selectors";
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

export type MapDispatchToProps = {
  logOut: () => any
}

export const Profile: React.FC<MapDispatchToProps> = (props) => {
  const classes = useStyles()
  const delimiterDefault = " ";
  const isAuth = useSelector(isAuthorization)
  const currentUser = useSelector(getCurrentUser)
  const selectedUser = useSelector(getSelectedUser)

  if (isAuth) {
    let user
    
    if (Object.keys(selectedUser).length !== 0) {
      user = selectedUser as ProfileFieldType
    } else {
      user = currentUser as ProfileFieldType
    }

    const fio = [user?.firstName, user?.lastName, user?.patronymic].join(delimiterDefault)

    return (<div className={classes.profile}>
      {currentUser === user ? <ProfileHeader fio={fio}
        logOut={props.logOut} /> : <></>}
      <ProfileContent user={user} />
    </div>)
  } else {
    return <Redirect to={`/${RouterMap.Auth}`} />
  }
}