import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import projectsReducer from './projects_reducer';
import projectDetailReducer from './project_detail_reducer';
import ErrorsReducer from './errors_reducer';
import rewardReducer from './reward_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  projects: projectsReducer,
  projectDetail: projectDetailReducer,
  errors: ErrorsReducer,
  reward: rewardReducer
});

export default RootReducer;
