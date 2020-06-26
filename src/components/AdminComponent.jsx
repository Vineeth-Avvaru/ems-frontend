import React from 'react';
import { fetchEmployees, addEmployee, deleteEmployee } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import './AdminComponent.css';
import EmployeesList from './EmployeesListComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { UncontrolledTooltip, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

const mapStateToProps = state => {
    return {
        employeesData: state.EmployeesData.employees,
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchEmployees: () => dispatch(fetchEmployees()),
    addEmployee: (employeeData) => dispatch(addEmployee(employeeData)),
    deleteEmployee: (deleteID) => dispatch(deleteEmployee(deleteID))
})

class AdminHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAddEmployeeModalOpen: false,
            isDeleteEmployeeModalOpen: false,
            addEmployeeData: {
                id: "",
                name: "",
                password: "",
                role: "",
                description: ""
            },
            deleteEmployeeID: ""
        }

        this.toggleAddEmployeeModal = this.toggleAddEmployeeModal.bind(this);
        this.toggleDeleteEmployeeModal = this.toggleDeleteEmployeeModal.bind(this);
        this.handleAddEmployee = this.handleAddEmployee.bind(this);
        this.addEmpID = this.addEmpID.bind(this);
        this.addEmpName = this.addEmpName.bind(this);
        this.addEmpPassword = this.addEmpPassword.bind(this);
        this.addEmpRole = this.addEmpRole.bind(this);
        this.addEmpDescription = this.addEmpDescription.bind(this);
        this.handleDeleteEmployee = this.handleDeleteEmployee.bind(this);
        this.onDeleteIconClick = this.onDeleteIconClick.bind(this);

    }

    componentDidMount() {
        this.props.fetchEmployees();
    }

    toggleAddEmployeeModal() {
        this.setState({
            isAddEmployeeModalOpen: !this.state.isAddEmployeeModalOpen
        })
    }

    toggleDeleteEmployeeModal() {
        this.setState({
            isDeleteEmployeeModalOpen: !this.state.isDeleteEmployeeModalOpen
        })
    }

    onDeleteIconClick(id) {
        this.setState({
            deleteEmployeeID: id
        })
        this.toggleDeleteEmployeeModal();
    }

    handleDeleteEmployee() {
        let deleteID = {
            id : this.state.deleteEmployeeID
        }

        this.props.deleteEmployee(deleteID);
        this.toggleDeleteEmployeeModal();
    }
    
    addEmpID(val) {
        this.setState({
            addEmployeeData: {
                ...this.state.addEmployeeData,
                id: val
            }
        })
    }

    addEmpName(val) {
        this.setState({
            addEmployeeData: {
                ...this.state.addEmployeeData,
                name: val
            }
        })
    }

    addEmpPassword(val) {
        this.setState({
            addEmployeeData: {
                ...this.state.addEmployeeData,
                password: val
            }
        })
    }

    addEmpRole(val) {
        this.setState({
            addEmployeeData: {
                ...this.state.addEmployeeData,
                role: val
            }
        })
    }

    addEmpDescription(val) {
        this.setState({
            addEmployeeData: {
                ...this.state.addEmployeeData,
                description: val
            }
        })
    }

    handleAddEmployee(event) {
        let initialAddEmployeeData = {
            id: "",
            name: "",
            password: "",
            role: "",
            description: ""
        }

        event.preventDefault();
        this.props.addEmployee(this.state.addEmployeeData);
        this.toggleAddEmployeeModal();
        this.setState({
            addEmployeeData: {...initialAddEmployeeData}
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
                    {this.props.employeesData.length ? <EmployeesList employees={this.props.employeesData} onDeleteIconClick = {this.onDeleteIconClick} /> : ""}
                </div>
                <div>
                    <FontAwesomeIcon icon={faPlusCircle} id="Addtooltip" className="add-employee" onClick={this.toggleAddEmployeeModal} />
                    <UncontrolledTooltip placement="bottom" target="Addtooltip">
                        Add Employee
                    </UncontrolledTooltip>
                </div>

                <Modal isOpen={this.state.isAddEmployeeModalOpen} toggle={this.toggleAddEmployeeModal}>
                    <ModalHeader toggle={this.toggleAddEmployeeModal}> Add Employee</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.handleAddEmployee}>
                            <div>
                                <label className="login-label">ID</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="ID"
                                    onChange={(event) => this.addEmpID(event.target.value)}
                                    value={this.state.addEmployeeData.id}
                                />
                            </div>
                            <div>
                                <label className="login-label">Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Name"
                                    onChange={(event) => this.addEmpName(event.target.value)}
                                    value={this.state.addEmployeeData.name}
                                />
                            </div>
                            <div>
                                <label className="login-label">Password</label>
                                <input
                                    required
                                    type="password"
                                    placeholder="Password"
                                    onChange={(event) => this.addEmpPassword(event.target.value)}
                                    value={this.state.addEmployeeData.password}
                                />
                            </div>
                            <div>
                                <label className="login-label">Employee Role</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Employee Role"
                                    onChange={(event) => this.addEmpRole(event.target.value)}
                                    value={this.state.addEmployeeData.role}
                                />
                            </div>
                            <div>
                                <label className="login-label">Description</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Description"
                                    onChange={(event) => this.addEmpDescription(event.target.value)}
                                    value={this.state.addEmployeeData.description}
                                />
                            </div>
                            <div>
                                <button type="submit" className="login-submit">Add Employee</button>
                            </div>
                        </form>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isDeleteEmployeeModalOpen} toggle={this.toggleDeleteEmployeeModal}>
                        <ModalHeader toggle={this.toggleDeleteEmployeeModal}>Delete Employee</ModalHeader>
                        <ModalBody>
                            <div>
                                <h3>Do you really want to delete employee {this.state.deleteEmployeeID} ?</h3>
                                <div>
                                    <Button onClick={this.handleDeleteEmployee} color="primary">Confirm</Button>
                                    <Button onClick={this.toggleDeleteEmployeeModal} color="danger">Cancel</Button>
                                </div>
                            </div>
                        </ModalBody>
                    </Modal>
            </div>
        )
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(AdminHome));