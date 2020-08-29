import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { ProfileHeader } from "./ProfileHeader";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      profile: {
        display: 'flex',
        margin: theme.spacing(2),
        width: '95%'
      }
    })
);

export const Profile: React.FC = () => {
    const classes = useStyles()

    return (<div className={classes.profile}>
        <ProfileHeader />
    </div>)
}