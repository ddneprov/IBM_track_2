import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { IBM_Default_Color } from "../../../../../base/types/ColorBase"
import { ProfileFieldType } from "../type"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        profile__seniority: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: theme.spacing(2),
            backgroundColor: IBM_Default_Color.white
        }
    })
);

type Props = {
    pilot: ProfileFieldType
}

export const ProfileSeniority: React.FC<Props> = ({
    pilot
}) => {
    const classes = useStyles()

    return (<div className={classes.profile__seniority}>
    </div>)
}