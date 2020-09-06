import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { ProfileHeader } from "./components/ProfileHeader";
import { ProfileContent } from "./components/Content/ProfileContent";
import { ProfileFieldType } from "./components/type";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../../redux/Profile/profile-selectors";

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
  user?: ProfileFieldType | undefined
}

export const Profile: React.FC<Props> = ({
  user
}) => {
    const classes = useStyles()
    const delimiterDefault = " ";
    const currentUser = useSelector(getCurrentUser)

    if (!user) {
      user = currentUser as ProfileFieldType
    } 

    const fio = [user.firstName, user.lastName, user.patronymic].join(delimiterDefault)


    return (<div className={classes.profile}>
        {currentUser === user ? <ProfileHeader fio={fio}/> : <></>}
        <ProfileContent user={user}/>
    </div>)
}