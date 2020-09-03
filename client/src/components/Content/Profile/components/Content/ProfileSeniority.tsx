import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { ProfileFieldType, CrewRoleEnum } from "../type.d"
import { Chart } from "../../../../../common/components/Chart"
import { IBM_Default_Color } from "../../../../../base/types/ColorBase"
import { getCharacteristic, getSeniorityResult } from "../../../../../utils/Profile/characteristic"
import starIcon from "../../../../../assets/Star.png"

const iconSize = '12rem'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        seniority__result: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            marginTop: '2rem',
            color: IBM_Default_Color.black,
            width: iconSize,
            height: iconSize,
            background: `url(${starIcon})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
        },
        seniority__result_value: {
            marginTop: '1rem',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '2rem'
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

    const seniorityResult = getSeniorityResult(characteristic)

    return (<>
        <div className={classes.seniority__result} >
            <div className={classes.seniority__result_value} >{seniorityResult}</div>
        </div>
        {isManager ?
            <Chart pilot={pilot}
                characteristic={characteristic}
                classes={classes.seniority__chart} />
            : <></>}
    </>)
}