import * as APIUtil from '../util/reward_api_util';

export const RECEIVE_REWARD = 'RECEIVE_REWARD';
export const REMOVE_REWARD = 'REMOVE_REWARD';
export const RECEIVE_REWARD_ERRORS = 'RECEIVE_REWARD_ERRORS';

export const receiveReward = reward => ({
  type: RECEIVE_REWARD,
  reward
});

export const removeReward = reward => ({
  type: REMOVE_REWARD,
  reward
});

export const receiveRewardErrors = errors => ({
  type: RECEIVE_REWARD_ERRORS,
  errors
});

export const createReward = reward => dispatch => (
  APIUtil.createReward(reward)
    .then(res => dispatch(receiveReward(res)))
);

export const deleteReward = reward => dispatch => (
  APIUtil.deleteReward(reward)
    .then(res => dispatch(removeReward(res)))
);
