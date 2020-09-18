import React from 'react'
import { connect } from 'react-redux'
import { PilotsList, MapDispatchToProps } from './PilotsList'
import { AppStateType } from '../../../../../../redux/redux-store'
import { setSelectedUser } from '../../../../../../redux/Profile/profile-actions'

const mapStateToProps = (state: AppStateType) => {
    return {
        
    }
};

type Props = ReturnType<typeof mapStateToProps> &
             MapDispatchToProps

class PilotsListClassComponent extends React.Component<Props> {
    render() {
        return <PilotsList {...this.props}/>
    }
};

export const PilotsListContainer = connect<{}, MapDispatchToProps, {}, AppStateType>(
    mapStateToProps,
    { setSelectedUser }
)(PilotsListClassComponent)