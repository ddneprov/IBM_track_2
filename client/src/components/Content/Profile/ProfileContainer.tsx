import React from 'react'
import { withRouter, RouteComponentProps, Redirect } from "react-router-dom"
import { compose } from "redux"
import { connect } from 'react-redux';
import { Profile, MapDispatchToProps } from './Profile';
import { AppStateType } from '../../../redux/redux-store'
import { ProfileFieldType } from './components/type.d';
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
        const userId = this.props.match.params.userId
        const pilots = require("../../../moc/pilots_preprod.json") as Array<ProfileFieldType>
        let user = pilots.find((pilot, index) => index.toString() === userId);

        // TODO: исправить логику, чтобы был getEnableDebug и поддерживалась prod версия
        if (Object.keys(this.props.currentUser).length > 0) {
            return <Profile user={this.props.currentUser as ProfileFieldType}
                logOut={this.props.logOut} />
        }
        else if (!user) {
            return <Redirect to={`/${RouterMap.Auth}`} />
        }

        return <Profile user={user}
            logOut={this.props.logOut} />
    }
};

export const ProfileContainer = compose<React.ComponentType>(
    withRouter
)(connect<{}, MapDispatchToProps, {}, AppStateType>(
    mapStateToProps,
    { logOut }
)(ProfileClassComponent))