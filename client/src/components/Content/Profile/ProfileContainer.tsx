import React from 'react'
import { withRouter, RouteComponentProps, Redirect } from "react-router-dom"
import { compose } from "redux"
import { connect } from 'react-redux';
import { Profile, MapDispatchToProps } from './Profile';
import { AppStateType } from '../../../redux/redux-store'
import { logOut } from '../../../redux/Profile/profile-actions'
import { RouterMap } from '../../../base/types/RouterMap';

type PathParamsType = {
    userId: string
}

const mapStateToProps = (state: AppStateType) => {
    return {
        currentUser: state.profilePage.currentUser
    }
};

type Props = ReturnType<typeof mapStateToProps> &
    MapDispatchToProps &
    RouteComponentProps<PathParamsType>;

class ProfileClassComponent extends React.Component<Props> {
    render() {
        // Если пользователь авторизован.
        if (Object.keys(this.props.currentUser).length > 0) {
            return <Profile logOut={this.props.logOut}/>
        } else {
            return <Redirect to={`/${RouterMap.Auth}`} />
        }
    }
};

export const ProfileContainer = compose<React.ComponentType>(
    withRouter
)(connect<{}, MapDispatchToProps, {}, AppStateType>(
    mapStateToProps,
    { 
        logOut
    }
)(ProfileClassComponent))