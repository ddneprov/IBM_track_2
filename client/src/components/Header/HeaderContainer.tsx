import React from 'react'
import { connect } from 'react-redux'
import { Header, MapDispatchToProps } from './Header'
import { AppStateType } from '../../redux/redux-store'
import { logOut } from '../../redux/Profile/profile-actions'

const mapStateToProps = (state: AppStateType) => {
    return {
        
    }
};

type Props = ReturnType<typeof mapStateToProps> &
             MapDispatchToProps

class HeaderClassComponent extends React.Component<Props> {
    render() {
        return <Header {...this.props}/>
    }
};

export const HeaderContainer = connect<{}, MapDispatchToProps, {}, AppStateType>(
    mapStateToProps,
    { logOut }
)(HeaderClassComponent)