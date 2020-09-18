import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { ProfileFieldType } from "../type.d"
import { Chart } from "../../../../../common/components/Chart"
import { IBM_Default_Color } from "../../../../../base/types/ColorBase"
import { getCharacteristic, getSeniorityResult } from "../../../../../utils/Profile/characteristic"
import starIcon from "../../../../../assets/Star.png"
import { isUserManager } from "../../../../../utils/Profile/userHelpers"

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
            width: '20rem !important',
            overflowX: 'auto',
            overflowY: 'hidden',
            marginTop: theme.spacing(9),
            '&::-webkit-scrollbar': {
                width: '1em'
            },
            '&::-webkit-scrollbar-track': {
                borderRadius: '30px',
                boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
                backgroundColor: IBM_Default_Color.white
            },
            '&::-webkit-scrollbar-thumb': {
                borderRadius: '50px',
                backgroundColor: IBM_Default_Color.blue
            }
        }
    })
);

type Props = {
    user: ProfileFieldType
}

export const ProfileSeniority: React.FC<Props> = ({
    user
}) => {
    const classes = useStyles()
    const characteristic = getCharacteristic(user)

    const seniorityResult = getSeniorityResult(characteristic)

    return (<>
        <div className={classes.seniority__result} >
            <div className={classes.seniority__result_value} >{seniorityResult}</div>
        </div>
        {isUserManager() ?
            <Chart
                characteristic={characteristic}
                classes={classes.seniority__chart} />
            : <></>}
    </>)
}