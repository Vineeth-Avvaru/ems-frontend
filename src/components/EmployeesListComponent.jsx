import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { UncontrolledTooltip } from 'reactstrap';
import './EmployeeListComponent.css'

class EmployeesList extends React.Component {

    render() {
        const employees = this.props.employees.map((item, index) => {
            return (
                <div key={index} className="employee-content">
                    <div  className="list-item">{item.ID}</div>
                    <div  className="list-item">{item.Name}</div>
                    <div  className="list-item">{item.Role}</div>
                    <div  className="list-item action-items">
                        <div>
                            <FontAwesomeIcon icon={faPaperPlane} id="Reviewtooltip" className="action-icon"/>
                            <UncontrolledTooltip placement="left" target="Reviewtooltip">
                            Submit Review
                            </UncontrolledTooltip>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEdit} id="Edittooltip" className="action-icon"/>
                            <UncontrolledTooltip placement="bottom" target="Edittooltip">
                            Edit
                            </UncontrolledTooltip>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faTrash} id="Deletetooltip" className="action-icon"/>
                            <UncontrolledTooltip placement="right" target="Deletetooltip">
                            Delete
                            </UncontrolledTooltip>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {employees}
            </div>
        )

    }
}

export default EmployeesList;