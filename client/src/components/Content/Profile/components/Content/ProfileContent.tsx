import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { ProfileTabFrame } from "../hoc/ProfileTabFrame";
import { ProfileInfo } from "./ProfileInfo";
import { ProfileFieldType } from "../type";
import { ProfileSeniority } from "./ProfileSeniority";
import { isManager } from "../../../../../utils/Profile/userHelpers";
import { PilotsListContainer } from "./PilotsList/PilotsListContainer";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../../../../redux/Profile/profile-selectors";

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
  const currentUser = useSelector(getCurrentUser) as ProfileFieldType

  const titleTabs = {
    pilotsList: 'Pilots List',
    seniority: 'Seniority',
    profileInfo: 'Profile info'
  }

  return (<div className={classes.profile__content}>
    {isManager(currentUser.role) ? <ProfileTabFrame title={titleTabs.pilotsList} width='30rem' Component={<PilotsListContainer />} /> : <></>}
    <ProfileTabFrame title={titleTabs.seniority}
      width='20rem'
      Component={<ProfileSeniority user={user} />} />
    <ProfileTabFrame title={titleTabs.profileInfo}
      width='30rem'
      Component={<ProfileInfo user={user} />} />
  </div>)
}