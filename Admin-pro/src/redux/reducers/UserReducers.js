import { ACTION_TYPES } from '../ActionTypes/ActionTypes';

const initialState = {
  userbyid: {},
  user: {},
  adminUsers: [],
  websiteUsers: [],
  unapprovedUser: [],
  deactivateUser: [],
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_ADMIN_CREATED_USERS: {
      return {
        ...state,
        adminUsers: action.payload,
      };
    }
    case ACTION_TYPES.GET_WEBSITE_USERS: {
      return {
        ...state,
        websiteUsers: action.payload,
      };
    }
    case ACTION_TYPES.GET_UNAPPROVED_USERS: {
      return {
        ...state,
        unapprovedUser: action.payload,
      };
    }
    case ACTION_TYPES.GET_DEACTIVATE_USERS: {
      return {
        ...state,
        deactivateUser: action.payload,
      };
    }
    case ACTION_TYPES.GET_SINGLE_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case ACTION_TYPES.GET_SINGLE_USER_BY_ID: {
      return {
        ...state,
        userbyid: action.payload,
      };
    }
    case ACTION_TYPES.UPDATE_USER_STATUS: {
      return state;
    }
    default: {
      return state;
    }
  }
};
export default UsersReducer;
