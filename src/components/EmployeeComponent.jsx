import React from "react";
import { fetchEmpReviews, fetchReview } from "../redux/ActionCreators";
import { connect } from "react-redux";
import "./EmployeeComponent.css";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import ReviewsList from './ReviewsListComponent'

const mapStateToProps = (state) => {
  return {
    eID: state.UserAuthenticationData.id,
    empReviews: state.ReviewsData.empReviews,
    review: state.ReviewsData.review
  };
};

const mapDispatchToProps = (dispatch) => ({
    fetchEmpReviews: (eID) => dispatch(fetchEmpReviews(eID)),
    fetchReview: (reviewGivenBy, reviewGivenTo) => dispatch(fetchReview(reviewGivenBy, reviewGivenTo))
});

class EmployeeHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isViewReviewModalOpen: false,
    };
    this.toggleViewReviewModal = this.toggleViewReviewModal.bind(this);
    this.viewReview = this.viewReview.bind(this);
  }

  componentDidMount() {
    this.props.fetchEmpReviews(this.props.eID);
  }

  toggleViewReviewModal() {
    this.setState({
        isViewReviewModalOpen: !this.state.isViewReviewModalOpen,
    });
  }

  viewReview(adminID) {
    this.props.fetchReview(adminID, this.props.eID);
    this.toggleViewReviewModal();
  }

  render() {
    return (
      <div className="employee-home-container">
        <h3 className="results-container">
          <b>Reviews Received: </b> {this.props.empReviews.length}
        </h3>
        <div className="reviews-list-header">
          <div className="header-item">Review Given By</div>
          <div className="header-item">View Review</div>
          <div className="header-item">Submit Feedback</div>
        </div>
        <div>
             {this.props.empReviews.length ?
             <ReviewsList reviews={this.props.empReviews} viewReview={this.viewReview}/>
            : ""} 
        </div>
        <Modal
          isOpen={this.state.isViewReviewModalOpen}
          toggle={this.toggleViewReviewModal}
        >
          <ModalHeader toggle={this.toggleViewReviewModal}>
            Performance Review
          </ModalHeader>
          <ModalBody>
            <div>
              <div>
                <textarea
                  rows="10"
                  cols="50"
                  disabled
                  value={this.props.review}
                />
              </div>
                <Button onClick={this.toggleViewReviewModal} color="primary">
                    Close
                </Button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeHome);
