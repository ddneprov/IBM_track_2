import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { ProfileTabFrame } from "../hoc/ProfileTabFrame";
import { ProfileInfo } from "./ProfileInfo";
import { ProfileFieldType } from "../type";
import { ProfileSeniority } from "./ProfileSeniority";
import { PilotsList } from "./PilotsList";
import { isManager } from "../../../../../utils/Profile/userHelpers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profile__content: {
      display: 'flex',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      marginTop: theme.spacing(2),
    }
  })
);

type Props = {
  user: ProfileFieldType
}

export const ProfileContent: React.FC<Props> = ({
  user
}) => {
  const classes = useStyles()

  const titleTabs = {
    pilotsList: 'Pilots List',
    seniority: 'Seniority',
    profileInfo: 'Profile info'
  }

  return (<div className={classes.profile__content}>
    {isManager(user.role) ? <ProfileTabFrame title={titleTabs.pilotsList} Component={<PilotsList />} /> : <></>}
    <ProfileTabFrame title={titleTabs.seniority}
      Component={<ProfileSeniority user={user} />} />
    <ProfileTabFrame title={titleTabs.profileInfo}
      Component={<ProfileInfo user={user} />} />
    {/* <Divider orientation='vertical'
      variant='middle' />
        <ProfileTabFrame title={titleTabs.seniority}
                     Component={<ProfileInfo />}/> */}
  </div>)
}