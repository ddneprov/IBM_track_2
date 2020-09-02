import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { ProfileTabFrame } from "../hoc/ProfileTabFrame";
import { IBM_Default_Color } from "../../../../../base/types/ColorBase";
import { ProfileInfo } from "./ProfileInfo";
import { ProfileFieldType } from "../type";
import { ProfileSeniority } from "./ProfileSeniority";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profile__content: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: theme.spacing(2),
      paddingBottom: theme.spacing(4),
      backgroundColor: IBM_Default_Color.white
    }
  })
);

type Props = {
  pilot: ProfileFieldType
}

export const ProfileContent: React.FC<Props> = ({
  pilot
}) => {
  const classes = useStyles()

  const titleTabs = {
    seniority: 'Seniority',
    profileInfo: 'Profile info'
  }

  return (<div className={classes.profile__content}>
    <ProfileTabFrame title={titleTabs.profileInfo}
      Component={<ProfileInfo pilot={pilot} />} />
    <ProfileTabFrame title={titleTabs.seniority}
      Component={<ProfileSeniority pilot={pilot} />} />
    {/* <Divider orientation='vertical'
      variant='middle' />
        <ProfileTabFrame title={titleTabs.seniority}
                     Component={<ProfileInfo />}/> */}
  </div>)
}