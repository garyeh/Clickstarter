import { RECEIVE_PROJECT_DETAIL } from '../actions/project_actions';
import { merge } from 'lodash';

const projectDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_PROJECT_DETAIL:
      return action.project;
    default:
      return state;
  }
};

export default projectDetailReducer;
