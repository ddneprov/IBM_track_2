import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

import profileIcon from '../../../../../assets/profile__photo.png'
import pilots from "./../../../../../moc/pilots.json"
import { ProfileField } from "./components/ProfileField"
import { ProfileFieldLabel } from "./../type.d"
import { IBM_Default_Color } from "../../../../../base/types/ColorBase"

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

export const ProfileInfo: React.FC = () => {
    const classes = useStyles()

    const pilot = pilots[0];

    return (<div className={classes.profileInfo}>
        <img src={profileIcon}
            alt='Профиль'
            className={classes.profileInfo__icon} />
        <div className={classes.profileInfo__fields}>
            <ProfileField label={ProfileFieldLabel.firstName} value={pilot.firstName} />
            <ProfileField label={ProfileFieldLabel.lastName} value={pilot.lastName} />
            <ProfileField label={ProfileFieldLabel.patronimic} value={pilot.patronimic} />
            <ProfileField label={ProfileFieldLabel.crewRole} value={pilot.crewRole} />
            <ProfileField label={ProfileFieldLabel.standingFromDate} value={pilot.standingFromDate} />
            <ProfileField label={ProfileFieldLabel.standingFromDateInRole} value={pilot.standingFromDateInRole} />
            <ProfileField label={ProfileFieldLabel.reliabilityIndex} value={pilot.reliabilityIndex} />
            <ProfileField label={ProfileFieldLabel.rewardsAndPunishments} value={pilot.rewardsAndPunishments} />
        </div>
    </div>)
}