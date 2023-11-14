import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

const initialState = {
    scholarship: {},
    scholarships: [],
};

const scholarshipReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_SCHOLARSHIP: {
            return {
                ...state,
                scholarship: action.payload,
            };
        }
        case ACTION_TYPES.GET_SCHOLARSHIPS: {
            return {
                ...state,
                scholarships: action.payload,
            };
        }
        case ACTION_TYPES.UPDATE_SCHOLARSHIP: {
            return {
                ...state,
                scholarships: action.payload,
            };
        }
        case ACTION_TYPES.DELETE_SCHOLARSHIP: {
            return {
                ...state,
                scholarships: state.scholarships.filter(
                    (scholarship) => !action.payload.includes(scholarship._id)
                ),
            };
        }
        default: {
            return state;
        }
    }
};
export default scholarshipReducer;