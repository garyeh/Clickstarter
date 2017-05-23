import { REMOVE_REWARD } from '../actions/reward_actions';
import { merge } from 'lodash';

const rewardReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case REMOVE_REWARD:
      nextState = merge({}, state);
      delete nextState[action.reward];
      return nextState;
    default:
      return state;
  }
};

export default rewardReducer;
