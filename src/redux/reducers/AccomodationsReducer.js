import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

const initialState = {
    accomodation: {},
    accomodations: [],
};

const accomodationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_ACCOMODATION: {
            return {
                ...state,
                accomodation: action.payload,
            };
        }
        case ACTION_TYPES.GET_ACCOMODATIONS: {
            return {
                ...state,
                accomodations: action.payload,
            };
        }
        case ACTION_TYPES.UPDATE_ACCOMODATION: {
            return {
                ...state,
                accomodations: action.payload,
            };
        }
        case ACTION_TYPES.DELETE_ACCOMODATION: {
            return {
                ...state,
                accomodations: state.accomodations.filter(
                    (accomodation) => !action.payload.includes(accomodation._id)
                ),
            };
        }
        default: {
            return state;
        }
    }
};
export default accomodationReducer;