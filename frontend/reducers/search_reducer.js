import { RECEIVE_SEARCH_PROJECTS } from '../actions/project_actions';
import { merge } from 'lodash';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_SEARCH_PROJECTS:
      return action.search;
    default:
      return state;
  }
};

export default searchReducer;
