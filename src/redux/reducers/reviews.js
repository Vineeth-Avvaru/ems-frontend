import * as ActionTypes from '../ActionTypes';

export const initialReviewData = {
    review: "null",
    allReviews : []
}

export const ReviewsData = (state = initialReviewData, action) => {
    switch(action.type) {
        case ActionTypes.SET_REVIEW:
            return {...state, review: action.payload}
        default:
            return state;
    }
}
