import * as ActionTypes from '../ActionTypes';

export const initialFeedbackData = {
    feedback: "null",
    initialFeedback: "null",
}

export const FeedbacksData = (state = initialFeedbackData, action) => {
    switch(action.type) {
        case ActionTypes.SET_FEEDBACK:
            return {...state, feedback: action.payload}
        case ActionTypes.SET_INITIAL_FEEDBACK:
            return {...state, feedback: action.payload, initialFeedback: action.payload}
        default:
            return state;
    }
}