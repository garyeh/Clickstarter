import { RECEIVE_PROJECTS } from '../actions/project_actions';
import { merge } from 'lodash';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_PROJECTS:
      return action.projects;
    default:
      return state;
  }
};

export default projectsReducer;
