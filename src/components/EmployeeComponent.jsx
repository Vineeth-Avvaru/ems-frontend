import React from "react";
import { fetchEmpReviews, fetchReview, fetchFeedback, setFeedback, updateFeedback, addFeedback } from "../redux/ActionCreators";
import { connect } from "react-redux";
import "./EmployeeComponent.css";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import ReviewsList from './ReviewsListComponent'

const mapStateToProps = (state) => {
  return {
    eID: state.UserAuthenticationData.id,
    empReviews: state.ReviewsData.empReviews,
    review: state.ReviewsData.review,
    feedback: state.FeedbacksData.feedback,
    initialFeedback: state.FeedbacksData.initialFeedback
  };
};

const mapDispatchToProps = (dispatch) => ({
    fetchEmpReviews: (eID) => dispatch(fetchEmpReviews(eID)),
    fetchReview: (reviewGivenBy, reviewGivenTo) => dispatch(fetchReview(reviewGivenBy, reviewGivenTo)),
    fetchFeedback: (feedbackGivenBy, feedbackGivenTo) => dispatch(fetchFeedback(feedbackGivenBy, feedbackGivenTo)),
    setFeedback: (feedback) => dispatch(setFeedback(feedback)),
    updateFeedback: (feedbackBody) => dispatch(updateFeedback(feedbackBody)),
    addFeedback: (feedbackBody) => dispatch(addFeedback(feedbackBody))
});

class EmployeeHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isViewReviewModalOpen: false,
        isFeedbackModalOpen: false,
        editFeedbackAdminID: ""
    };
    this.toggleViewReviewModal = this.toggleViewReviewModal.bind(this);
    this.toggleFeedbackModal = this.toggleFeedbackModal.bind(this);
    this.viewReview = this.viewReview.bind(this);
    this.onFeedbackClick = this.onFeedbackClick.bind(this);
    this.handleSubmitFeedback = this.handleSubmitFeedback.bind(this);
  }

  componentDidMount() {
    this.props.fetchEmpReviews(this.props.eID);
  }

  toggleViewReviewModal() {
    this.setState({
        isViewReviewModalOpen: !this.state.isViewReviewModalOpen,
    });
  }

  toggleFeedbackModal() {
    this.setState({
      isFeedbackModalOpen: !this.state.isFeedbackModalOpen
    })
  }

  viewReview(adminID) {
    this.props.fetchReview(adminID, this.props.eID);
    this.toggleViewReviewModal();
  }

  onFeedbackClick(adminID) {
    this.props.fetchReview(adminID, this.props.eID);
    this.props.fetchFeedback(this.props.eID, adminID);
    this.setState({
      editFeedbackAdminID: adminID
    })
    this.toggleFeedbackModal();
  }

  handleSubmitFeedback(){
    let feedbackBody = {
      givenBy: this.props.eID,
      givenTo: this.state.editFeedbackAdminID,
      feedback: this.props.feedback,
    };
    if (this.props.initialFeedback !== "null") {
      this.props.updateFeedback(feedbackBody);
    }
    else {
      this.props.addFeedback(feedbackBody);
    }
    this.toggleFeedbackModal();
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
             <ReviewsList reviews={this.props.empReviews} viewReview={this.viewReview} onFeedbackClick={this.onFeedbackClick}/>
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
        <Modal
          isOpen={this.state.isFeedbackModalOpen}
          toggle={this.toggleFeedbackModal}
        >
          <ModalHeader toggle={this.toggleFeedbackModal}>
            Feedback
          </ModalHeader>
          <ModalBody>
            <div>
              <div>
                <label>Performance Review</label>
                <textarea
                  rows="10"
                  cols="50"
                  disabled
                  value={this.props.review}
                />
              </div>
              <label>Feedback</label>
              <div>
              <textarea
                  rows="5"
                  cols="50"
                  onChange={(event) => this.props.setFeedback(event.target.value)}
                  value={this.props.feedback}
                />
              </div>
              <Button onClick={this.handleSubmitFeedback} color="primary">
                    Submit Feedback
                </Button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeHome);
