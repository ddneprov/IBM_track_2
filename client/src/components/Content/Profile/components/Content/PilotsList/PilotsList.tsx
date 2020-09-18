import React, { useEffect } from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { List, ListItem, Typography } from "@material-ui/core"
import Button from '@material-ui/core/Button'
import { IBM_Default_Color } from "../../../../../../base/types/ColorBase"
import { getSeniorityResult, getCharacteristic, getColorBySeniority } from "../../../../../../utils/Profile/characteristic"
import { ProfileFieldType } from "../../type"
import { isUserManager } from "../../../../../../utils/Profile/userHelpers"
import { getPilots } from "../../../../../../redux/Profile/profile-selectors"
import { useSelector, useDispatch } from "react-redux"
import { requestPilots } from "../../../../../../redux/Profile/profile-reducer"
import { IBM_Style } from "../../../../../../base/types/StyleBase"
const profileIcon_Default = require("../../../../../../assets/profileIcon_Default.png")

const seniorityResSize = '4rem'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        pilotsList: {
            display: 'flex',
            width: '95%',
            height: '25rem',
            flexDirection: 'column',
            margin: theme.spacing(2),
            backgroundColor: IBM_Default_Color.white,
            borderRadius: IBM_Style.borderRadius,
            overflow: 'auto',
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
        },
        pilotsList__item: {
            width: '100%'
        },
        pilotsList__item_icon: {
            width: '3rem',
            marginRight: '1rem'
        },
        pilotsList__item_fio: {
            width: '90%'
        },
        pilotsList__item_seniority: {
            display: 'flex',
            justifyContent: 'center',
            width: seniorityResSize,
            height: seniorityResSize,
            textAlign: 'center',
            fontWeight: 'bold',
            borderWidth: '5px',
            borderStyle: 'solid',
            borderRadius: '100%',
            '& > div': {
                margin: 'auto 0'
            }
        }
    })
);

export type MapDispatchToProps = {
    setSelectedUser: (userLogin: string) => any
}

export const PilotsList: React.FC<MapDispatchToProps> = (props) => {
    const classes = useStyles()
    let pilots = useSelector(getPilots)

    const dispatch = useDispatch()

    useEffect(() => {
        if (pilots.length === 0) {
            dispatch(requestPilots())
        }
    })

    if (isUserManager() && pilots.length !== 0) {
        const getFIO = (pilot: any) => {
            const delimiterDefault = " "
            return [pilot.firstName,
            pilot.lastName[0] + '.',
            pilot.patronymic[0] + '.'].join(delimiterDefault)
        }

        return (<List className={classes.pilotsList}>
            {pilots.map((pilot: ProfileFieldType, key: string | number | null | undefined) => (<ListItem className={classes.pilotsList__item}
                key={pilot.userLogin}>
                <Button fullWidth={true}
                    onClick={() => props.setSelectedUser(pilot.userLogin)}>
                    <img src={profileIcon_Default} alt="logo" className={classes.pilotsList__item_icon} />
                    <Typography className={classes.pilotsList__item_fio}
                        variant='h6'>
                        {getFIO(pilot)}
                    </Typography>
                    {
                        (function (seniority: number) {
                            return (<div className={classes.pilotsList__item_seniority}
                                style={{ borderColor: getColorBySeniority(seniority) }}>
                                <div>
                                    {seniority}
                                </div>
                            </div>)
                        })(Number(
                            getSeniorityResult(
                                getCharacteristic(pilot)
                            )
                        ))
                    }
                </Button>
            </ListItem>))}
        </List>)
    } else {
        return (<div>404 NOT FOUND</div>)
    }

}