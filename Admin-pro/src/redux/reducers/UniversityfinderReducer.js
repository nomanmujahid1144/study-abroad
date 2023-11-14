import { ACTION_TYPES } from '../ActionTypes/ActionTypes';

const initialState = {
  universityFinder: {},
  universityFinders: [],
  singleUserUniversityFinders: [],
  singleUserUniversityFindersById: [],
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
    case ACTION_TYPES.GET_ALL_SINGLE_USER_UNIVERSITY_FINDERS: {
      return {
        ...state,
        singleUserUniversityFinders: action.payload,
      };
    }
    case ACTION_TYPES.GET_ALL_SINGLE_USER_UNIVERSITY_FINDERS_BY_ID: {
      return {
        ...state,
        singleUserUniversityFindersById: action.payload,
      };
    }
    case ACTION_TYPES.GET_UNIVERSITY_FINDER: {
      return {
        ...state,
        universityFinder: action.payload,
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
          (universityFinder) => !action.payload.includes(universityFinder._id),
        ),
      };
    }
    default: {
      return state;
    }
  }
};
export default universityFinderReducer;
