import { RECEIVE_PROJECT_ERRORS } from '../actions/project_actions';
import { RECEIVE_REWARD_ERRORS } from '../actions/reward_actions';
import { RECEIVE_PLEDGE_ERRORS } from '../actions/pledge_actions';

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_PROJECT_ERRORS:
    case RECEIVE_REWARD_ERRORS:
    case RECEIVE_PLEDGE_ERRORS:
      return [...action.errors];
    default:
      return state;
  }
};

export default ErrorsReducer;
