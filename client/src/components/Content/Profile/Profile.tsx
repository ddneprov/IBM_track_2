import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { ProfileHeader } from "./components/ProfileHeader";
import { ProfileContent } from "./components/Content/ProfileContent";
import pilots from "../../../moc/pilots.json"
import { ProfileFieldType } from "./components/type";

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

    if (!user) {
      user = pilots[0]
    } 

    const fio = [user.firstName, user.lastName, user.patronymic].join(delimiterDefault)


    return (<div className={classes.profile}>
        <ProfileHeader fio={fio}/>
        <ProfileContent pilot={user}/>
    </div>)
}