import { connect } from 'react-redux';
import ProjectDetail from './project_detail';
import { fetchProjectDetail, deleteProject } from '../../../actions/project_actions';
import { createReward, deleteReward, receiveRewardErrors } from '../../../actions/reward_actions';
import { createPledge, receivePledgeErrors } from '../../../actions/pledge_actions';

const mapStateToProps = ({ projectDetail, session, errors }) => ({
  projectDetail,
  currentUser: session.currentUser,
  errors
});

const mapDispatchToProps = dispatch => ({
  fetchProjectDetail: id => dispatch(fetchProjectDetail(id)),
  deleteProject: project => dispatch(deleteProject(project)),
  createReward: reward => dispatch(createReward(reward)),
  deleteReward: reward => dispatch(deleteReward(reward)),
  createPledge: pledge => dispatch(createPledge(pledge)),
  clearRewardErrors: () => dispatch(receiveRewardErrors([])),
  clearPledgeErrors: () => dispatch(receivePledgeErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
