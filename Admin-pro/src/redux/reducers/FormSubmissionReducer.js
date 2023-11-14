import { ACTION_TYPES } from '../ActionTypes/ActionTypes';

const initialState = {
  formSubmission: {},
  formSubmissionsContacted: [],
  formSubmissionsUnContacted: [],
};

const formSubmissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_ALL_UNCONTACTED_FORM_SUBMISSION: {
      return {
        ...state,
        formSubmissionsUnContacted: action.payload,
      };
    }
    case ACTION_TYPES.GET_ALL_CONTACTED_FORM_SUBMISSION: {
      return {
        ...state,
        formSubmissionsContacted: action.payload,
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
