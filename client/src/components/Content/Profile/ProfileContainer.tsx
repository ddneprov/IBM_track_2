import React from 'react'
import { withRouter, RouteComponentProps } from "react-router-dom"
import { compose } from "redux"
import cookie from 'react-cookies'

import pilots from "../../../moc/pilots_preprod.json"
import { Profile } from './Profile';
import { config } from '../../../react-app-env.d'

const mapStateToProps = (state: any) => {
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

        const user = pilots.find((pilot, index) => index.toString() === this.props.match.params.userId);

        if (config.getDebugEnable()) {
            cookie.save('isManager',
                'true',
                { path: '/' })
            return <Profile user={user} />;
        }
        else {
            return <div>404 NOT FOUND</div>;
        }
    }
};

export const ProfileContainer = compose<React.ComponentType>(
    withRouter
)(ProfileClassComponent);