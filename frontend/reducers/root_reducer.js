import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import projectsReducer from './projects_reducer';
import projectDetailReducer from './project_detail_reducer';
import searchReducer from './search_reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  projects: projectsReducer,
  search: searchReducer,
  projectDetail: projectDetailReducer,
  errors: ErrorsReducer
});

export default RootReducer;
