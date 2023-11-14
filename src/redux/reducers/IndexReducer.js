import ProgressBarReducer from "./ProgressBarReducer";
import ProfileReducer from "./ProfileReducer";
import userReducer from "./UserReducers";
import customerMessagesReducer from "./CustomerMessagesReducer";
import universityFinderReducer from "./UniversityfinderReducer";
import scholarshipReducer from "./ScholarshipReducer";
import accomodationReducer from "./AccomodationsReducer";
import blogReducer from './BlogReducer';
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  ProgressBarReducer,
  ProfileReducer,
  userReducer,
  customerMessagesReducer,
  universityFinderReducer,
  scholarshipReducer,
  accomodationReducer,
  blogReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default store;
