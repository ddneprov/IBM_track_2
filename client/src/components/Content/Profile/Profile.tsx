import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { ProfileHeader } from "./components/ProfileHeader";
import { ProfileContent } from "./components/Content/ProfileContent";
import { ProfileFieldType } from "./components/type";
import { useSelector } from "react-redux";
import { getCurrentUser, isAuthorization } from "../../../redux/Profile/profile-selectors";
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

type Props = {
  user: ProfileFieldType
}

export type MapDispatchToProps = {
  logOut: () => any
}

export const Profile: React.FC<Props & MapDispatchToProps> = (props) => {
  const classes = useStyles()
  const delimiterDefault = " ";
  const isAuth = useSelector(isAuthorization)
  const currentUser = useSelector(getCurrentUser)

  if (isAuth) {
    let user = props.user

    if (!props.user) {
      user = currentUser as ProfileFieldType
    }

    const fio = [user?.firstName, user?.lastName, user?.patronymic].join(delimiterDefault)


    return (<div className={classes.profile}>
      {currentUser === user ? <ProfileHeader fio={fio}
                                             logOut={props.logOut} /> : <></>}
      <ProfileContent user={user} />
    </div>)
  } else {
    return <Redirect to={`/${RouterMap.Auth}`}/>
  }
}