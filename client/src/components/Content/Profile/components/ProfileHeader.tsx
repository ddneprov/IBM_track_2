import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import clsx from 'clsx'
import { IBM_Default_Color } from "../../../../base/types/ColorBase"
import profileStatusIcon from "../../../../assets/profile__icon_status.png"
import { Typography, Button, Theme } from "@material-ui/core"
import { NavLink } from 'react-router-dom'
import { RouterMap } from "../../../../base/types/RouterMap"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profile__header: {
      display: 'flex',
      width: '100%',
      flexWrap: 'wrap',
      backgroundColor: IBM_Default_Color.white
    },
    icon: {
      flexBasis: '1rem',
      margin: theme.spacing(1),
      width: '2rem',
      height: '2rem'
    },
    fio: {
      flexBasis: '80vw',
      margin: 'auto 0.5rem '
    },
    logOut_button: {
      margin: theme.spacing(1)
    }
  })
);

type Props = {
  fio: string
}

export const ProfileHeader: React.FC<Props> = ({
  fio
}) => {
  const classes = useStyles()

  return (<div className={classes.profile__header}>
    <img src={profileStatusIcon} 
         alt='Profile: '
         className={classes.icon} />
    <Typography variant='h5'
                className={clsx(classes.fio, 'alignLeft')}
                >{fio}</Typography>
    <Button type="submit"
            variant="contained"
            color="secondary"
            component={NavLink}
            to={RouterMap.Auth}
            className={classes.logOut_button}>
      Log out
    </Button>
  </div>)
}