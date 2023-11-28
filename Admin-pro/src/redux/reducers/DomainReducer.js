import { ACTION_TYPES } from '../ActionTypes/ActionTypes';

const initialState = {
  domain: {},
  domains: [],
  singleAdminDomains: [],
};

const DomainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_DOMAIN: {
      return {
        ...state,
        domain: action.payload,
      };
    }
    case ACTION_TYPES.UPDATE_DOMAIN: {
      return {
        ...state,
        domain: action.payload,
      };
    }
    case ACTION_TYPES.GET_DOMAINS: {
      return {
        ...state,
        domains: action.payload,
      };
    }
    case ACTION_TYPES.GET_DOMAINS: {
      return {
        ...state,
        domains: action.payload,
      };
    }
    case ACTION_TYPES.GET_SINGLE_DOMAIN: {
      return {
        ...state,
        domain: action.payload,
      };
    }
    // case ACTION_TYPES.DELETE_BLOG: {
    //     return {
    //         ...state,
    //         blogs: state.blog.filter(
    //             (blog) => !action.payload.includes(blog._id)
    //         ),
    //     };
    // }
    default: {
      return state;
    }
  }
};
export default DomainReducer;
