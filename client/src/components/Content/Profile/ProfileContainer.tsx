import React from 'react'
import {withRouter, RouteComponentProps} from "react-router-dom"
import {compose} from "redux"

import pilots from "../../../moc/pilots_preprod.json"
import { Profile } from './Profile';
import { isManager } from '../../../utils/Profile/userHelpers';

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        cookies: ownProps.cookies,
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
        
        const user = pilots.find( (pilot, index) => index.toString() === this.props.match.params.userId);

        this.props.cookies.set('isManager', isManager(user?.crewRole), { path: '/' })

        if (user)
        {
            return <Profile user={user}/>;
        }
        else
        {
            return <div>404 NOT FOUND</div>;
        }
    } 
};

export const ProfileContainer = compose<React.ComponentType>(
    withRouter
)(ProfileClassComponent);