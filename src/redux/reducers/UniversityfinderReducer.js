import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

const initialState = {
    universityFinder: {},
    universityFinders: [],
};

const universityFinderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_UNIVERSITY_FINDER: {
            return {
                ...state,
                universityFinder: action.payload,
            };
        }
        case ACTION_TYPES.GET_UNIVERSITY_FINDERS: {
            return {
                ...state,
                universityFinders: action.payload,
            };
        }
        case ACTION_TYPES.UPDATE_UNIVERSITY_FINDER: {
            return {
                ...state,
                universityFinder: action.payload,
            };
        }
        case ACTION_TYPES.DELETE_UNIVERSITY_FINDERS: {
            return {
                ...state,
                universityFinders: state.universityFinders.filter(
                    (universityFinder) => !action.payload.includes(universityFinder._id)
                ),
            };
        }
        default: {
            return state;
        }
    }
};
export default universityFinderReducer;