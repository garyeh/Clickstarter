import { RECEIVE_PROJECT_ERRORS } from '../actions/project_actions';
import { RECEIVE_REWARD_ERRORS } from '../actions/reward_actions';

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_PROJECT_ERRORS:
      return [...action.errors];
    case RECEIVE_REWARD_ERRORS:
      return [...action.errors];
    default:
      return state;
  }
};

export default ErrorsReducer;
