import React from 'react';
import { Button } from 'reactstrap';
import './ReviewsListComponent.css'

class ReviewsList extends React.Component {


    render() {
        const reviews = this.props.reviews.map((item, index) => {
            return (
                <div key={index} className="review-content">
                    <div  className="list-item">{item.givenBy}</div>
                    <div  className="list-item">
                        <Button color="primary" onClick={()=>this.props.viewReview(item.givenBy)}>View Review</Button>
                    </div>
                    <div  className="list-item">
                    <Button color="primary">Submit Feedback</Button>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {reviews}
            </div>
        )

    }
}

export default ReviewsList;