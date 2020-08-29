import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { ProfileHeader } from "./components/ProfileHeader";
import { ProfileContent } from "./components/Content/ProfileContent";

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

    return (<div className={classes.profile}>
        <ProfileHeader />
        <ProfileContent />
    </div>)
}