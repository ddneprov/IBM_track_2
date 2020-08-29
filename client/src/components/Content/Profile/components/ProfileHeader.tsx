import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import clsx from 'clsx'
import { IBM_Default_Color } from "../../../../base/types/ColorBase"
import vkIcon from "../../../../assets/vk_icon.png"
import { Typography, Button, Theme } from "@material-ui/core";

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
      margin: theme.spacing(1)
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

export const ProfileHeader: React.FC = () => {
  const classes = useStyles()

  return (<div className={classes.profile__header}>
    <img src={vkIcon} 
         alt='Profile: '
         className={classes.icon} />
    <Typography variant='h5'
                className={clsx(classes.fio, 'alignLeft')}
                >Иванов Иван Иванович</Typography>
    <Button type="submit"
            variant="contained"
            color="secondary"
            className={classes.logOut_button}>
      Log out
    </Button>
  </div>)
}