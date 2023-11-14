import { ACTION_TYPES } from '../ActionTypes/ActionTypes';

const initialState = {
  counts: {},
};

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_DASHBOARD_DATA: {
      return {
        ...state,
        counts: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export default DashboardReducer;
