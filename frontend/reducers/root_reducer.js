import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import projectsReducer from './projects_reducer';
import projectDetailReducer from './project_detail_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  projects: projectsReducer,
  projectDetail: projectDetailReducer
});

export default RootReducer;
