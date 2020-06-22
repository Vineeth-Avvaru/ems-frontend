import React from 'react';
import { connect } from 'react-redux';
import AdminHome from './AdminComponent';
import EmployeeHome from './EmployeeComponent';

const mapStateToProps = state => {
    return {
        role: state.UserAuthenticationData.role,
    }
}

class Home extends React.Component {

    render() {
        return(
            <div>
                {this.props.role === "Admin" ? <AdminHome/>:<EmployeeHome/>}
            </div>
        )
    }
}

export default (connect(mapStateToProps)(Home));