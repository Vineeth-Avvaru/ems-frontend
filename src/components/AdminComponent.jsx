import React from 'react';
import { fetchEmployees } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import './AdminComponent.css';
import EmployeesList from './EmployeesListComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { UncontrolledTooltip, Modal, ModalHeader, ModalBody } from 'reactstrap';

const mapStateToProps = state => {
    return {
        employeesData: state.EmployeesData.employees,
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchEmployees: () => dispatch(fetchEmployees()),
})

class AdminHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAddEmployeeModalOpen : false
        }

        this.toggleAddEmployeeModal = this.toggleAddEmployeeModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchEmployees();
    }

    toggleAddEmployeeModal() {
        this.setState({
            isAddEmployeeModalOpen: !this.state.isAddEmployeeModalOpen
        })
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
                <FontAwesomeIcon icon={faPlusCircle} id="Addtooltip" className="add-employee" onClick={this.toggleAddEmployeeModal} />
                <UncontrolledTooltip placement="bottom" target="Addtooltip">
                    Add Employee
                </UncontrolledTooltip>
                </div>

                <Modal isOpen={this.state.isAddEmployeeModalOpen} toggle={this.toggleAddEmployeeModal}>
                    <ModalHeader toggle={this.toggleAddEmployeeModal}></ModalHeader>
                    <ModalBody>
                        Add An Employee
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(AdminHome));