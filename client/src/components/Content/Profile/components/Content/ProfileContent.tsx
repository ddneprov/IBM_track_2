import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { ProfileTabFrame } from "../hoc/ProfileTabFrame";
import { ProfileInfo } from "./ProfileInfo";
import { ProfileFieldType } from "../type";
import { ProfileSeniority } from "./ProfileSeniority";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profile__content: {
      display: 'flex',
      justifyContent: 'space-between',
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
    seniority: 'Seniority',
    profileInfo: 'Profile info'
  }

  return (<div className={classes.profile__content}>
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