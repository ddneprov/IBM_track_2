import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { ProfileTabFrame } from "../hoc/ProfileTabFrame";
import { Divider } from '@material-ui/core'
import { IBM_Default_Color } from "../../../../../base/types/ColorBase";
import { ProfileInfo } from "./ProfileInfo";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profile__content: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: theme.spacing(2),
      backgroundColor: IBM_Default_Color.white
    }
  })
);

export const ProfileContent: React.FC = () => {
  const classes = useStyles()

  const titleTabs = {
    seniority: 'Seniority',
    profileInfo: 'Profile info'
  }

  return (<div className={classes.profile__content}>
    <ProfileTabFrame title={titleTabs.profileInfo}
                     Component={<ProfileInfo />}/>
    {/* <Divider orientation='vertical'
      variant='middle' />
        <ProfileTabFrame title={titleTabs.seniority}
                     Component={<ProfileInfo />}/> */}
  </div>)
}