import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { List, ListItem, Typography } from "@material-ui/core"
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'
import pilots from "../../../moc/pilots_preprod.json"
import { IBM_Default_Color, Seniority_Color } from "../../../base/types/ColorBase"
import { getSeniorityResult, getCharacteristic, getColorBySeniority } from "../../../utils/Profile/characteristic"
import { RouterMap } from "../../../base/types/RouterMap"
const profileIcon_Default = require("../../../assets/profileIcon_Default.png")

const seniorityResSize = '4rem'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        pilotsList: {
            display: 'flex',
            width: '95%',
            height: '35rem',
            flexDirection: 'column',
            margin: theme.spacing(2),
            backgroundColor: IBM_Default_Color.white,
            borderRadius: '20px',
            boxShadow: '0px 4px 20px 5px rgba(0, 0, 0, 0.25)',
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
                backgroundColor: Seniority_Color.green,
                backgroundImage: `-webkit-gradient(linear, 0 0, 0 100%,
                              color-stop(.5, rgba(255, 255, 255, .2)),
                                      color-stop(.5, transparent), to(transparent))`
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

export const PilotsList: React.FC = () => {
    const classes = useStyles()

    const getFIO = (pilot: any) => {
        const delimiterDefault = " "
        return [pilot.firstName,
        pilot.lastName[0] + '.',
        pilot.patronymic[0] + '.'].join(delimiterDefault)
    }

    return (<List className={classes.pilotsList}>
        {pilots.map((pilot, key) => (<ListItem className={classes.pilotsList__item}
            key={key}>
            <Button fullWidth={true}
                component={NavLink}
                to={`/${RouterMap.Profile}/${key}`}>
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
}