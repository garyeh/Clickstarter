import { RECEIVE_PROJECT_DETAIL, REMOVE_PROJECT } from '../actions/project_actions';
import { merge } from 'lodash';

const projectDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_PROJECT_DETAIL:
      return action.project;
    case REMOVE_PROJECT:
      nextState = merge({}, state);
      delete nextState[action.project];
      return nextState;
    default:
      return state;
  }
};

export default projectDetailReducer;
