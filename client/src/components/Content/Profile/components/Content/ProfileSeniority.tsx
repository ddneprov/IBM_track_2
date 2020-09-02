import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { ProfileFieldType, CrewRoleEnum } from "../type.d"
import { Chart } from "../../../../../common/Chart"
import StarsIcon from '@material-ui/icons/Stars'
import { yellow } from "@material-ui/core/colors"
import clsx from 'clsx'
import { Typography } from "@material-ui/core"
import { IBM_Default_Color } from "../../../../../base/types/ColorBase"
import { getCharacteristic } from "../../../../../utils/Profile/characteristic"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        seniority__result_value: {
            marginTop: '2rem',
            color: IBM_Default_Color.black,
            fontWeight: 'bold'
        },
        seniority__result_icon: {
            width: '13rem',
            height: '13rem',
            alignItems: 'center',
            margin: theme.spacing(5),
            color: yellow[500]
        },
        seniority__chart: {
            margin: theme.spacing(9),
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
    const isManager = pilot.crewRole === CrewRoleEnum.manager
    const characteristic = getCharacteristic(pilot)

    //const seniorityResult = 

    return (<>
        <Typography variant="h4"
            align="center"
            className={classes.seniority__result_value} />
        <StarsIcon className={classes.seniority__result_icon} />
        {isManager ?
            <>
                <Chart pilot={pilot}
                    characteristic={characteristic}
                    classes={clsx({ [classes.seniority__chart]: !isManager })} />
            </>
            : <></>}
    </>)
}