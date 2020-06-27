import * as ActionTypes from '../ActionTypes';

export const initialReviewData = {
    review: "null",
    initialReview: "null",
    allReviews : []
}

export const ReviewsData = (state = initialReviewData, action) => {
    switch(action.type) {
        case ActionTypes.SET_REVIEW:
            return {...state, review: action.payload}
        case ActionTypes.SET_INITIAL_REVIEW:
            return {...state, review: action.payload, initialReview: action.payload}
        default:
            return state;
    }
}
