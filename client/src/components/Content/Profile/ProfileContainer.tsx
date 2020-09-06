import React from 'react'
import { withRouter, RouteComponentProps } from "react-router-dom"
import { compose } from "redux"

import pilots from "../../../moc/pilots_preprod.json"
import { Profile } from './Profile';
import { AppStateType } from '../../../redux/redux-store'

const mapStateToProps = (state: AppStateType) => {
    return {

    }
};

const mapDispatchToProps = {

};

type PathParamsType = {
    userId: string
}

type Props = ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps &
    RouteComponentProps<PathParamsType>;

class ProfileClassComponent extends React.Component<Props> {
    render() {
        const userId = this.props.match.params.userId
        const user = pilots.find((pilot, index) => index.toString() === userId);
        
        return <Profile user={user} />
    }
};

export const ProfileContainer = compose<React.ComponentType>(
    withRouter
)(ProfileClassComponent);