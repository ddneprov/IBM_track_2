import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

import profileIcon from '../../../../../assets/profile__photo.png'
import { ProfileFieldLabel, ProfileFieldType } from "../type.d"
import { IBM_Default_Color } from "../../../../../base/types/ColorBase"
import { ProfileField } from "./components/ProfileField"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        profileInfo: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        },
        profileInfo__icon: {
            alignItems: 'center',
            margin: theme.spacing(5),
            width: '13rem'
        },
        profileInfo__fields: {
            display: 'flex',
            flexDirection: 'column',
            padding: theme.spacing(2),
            borderRadius: '20px',
            backgroundColor: IBM_Default_Color.green
        }
    })
);

type Props = {
    pilot: ProfileFieldType
}

export const ProfileInfo: React.FC<Props> = ({
    pilot
}) => {
    const classes = useStyles()

    return (<div className={classes.profileInfo}>
        <img src={profileIcon}
            alt='Профиль'
            className={classes.profileInfo__icon} />
        <div className={classes.profileInfo__fields}>
            <ProfileField disabled={true} label={ProfileFieldLabel.firstName} value={pilot.firstName} />
            <ProfileField disabled={true} label={ProfileFieldLabel.lastName} value={pilot.lastName} />
            <ProfileField disabled={true} label={ProfileFieldLabel.patronimic} value={pilot.patronymic} />
            <ProfileField disabled={true} label={ProfileFieldLabel.crewRole} value={pilot.crewRole} />
        </div>
    </div>)
}