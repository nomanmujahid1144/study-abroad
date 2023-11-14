import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

const initialState = {
    formSubmission: {},
    formSubmissions: [],
};

const formSubmissionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_NEW_FORM_SUBMISSION: {
            return {
                ...state,
                formSubmission: action.payload,
            };
        }
        case ACTION_TYPES.GET_ALL_FORM_SUBMISSION: {
            return {
                ...state,
                formSubmissions: action.payload,
            };
        }
        case ACTION_TYPES.UPDATE_FORM_SUBMISSION: {
            return {
                ...state,
                formSubmission: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
export default formSubmissionReducer;