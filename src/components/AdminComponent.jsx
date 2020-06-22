import React from 'react';
import { fetchEmployees } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import './AdminComponent.css';
import EmployeesList from './EmployeesListComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { UncontrolledTooltip } from 'reactstrap';

const mapStateToProps = state => {
    return {
        employeesData: state.EmployeesData.employees,
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchEmployees: () => dispatch(fetchEmployees()),
})

class AdminHome extends React.Component {

    componentDidMount() {
        this.props.fetchEmployees();
    }
    render() {
        return (
            <div className="admin-home-container">
                <h3 className="results-container"><b>Current Employees: </b> {this.props.employeesData.length}</h3>
                <div className="employees-list-header">
                    <div className="header-item">Employee ID</div>
                    <div className="header-item">Name</div>
                    <div className="header-item">Employee Role</div>
                    <div className="header-item">Actions</div>
                </div>
                <div>
                    {this.props.employeesData.length ? <EmployeesList employees={this.props.employeesData} /> : ""}
                </div>
                <div>
                <FontAwesomeIcon icon={faPlusCircle} id="Addtooltip" className="add-employee" />
                <UncontrolledTooltip placement="bottom" target="Addtooltip">
                    Add Employee
                </UncontrolledTooltip>
                </div>
            </div>
        )
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(AdminHome));