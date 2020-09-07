import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { ProfileHeader } from "./components/ProfileHeader";
import { ProfileContent } from "./components/Content/ProfileContent";
import pilots from "../../../moc/pilots.json"

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

export const Profile: React.FC = () => {
    const classes = useStyles()
    const pilot = pilots[0]
    const delimiterDefault = " ";
    const fio = [pilot.firstName, pilot.lastName, pilot.patronymic].join(delimiterDefault)


    return (<div className={classes.profile}>
        <ProfileHeader fio={fio}/>
        <ProfileContent pilot={pilot}/>
    </div>)
}