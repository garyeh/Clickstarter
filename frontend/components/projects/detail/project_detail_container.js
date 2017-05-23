import { connect } from 'react-redux';
import ProjectDetail from './project_detail';
import { fetchProjectDetail, deleteProject } from '../../../actions/project_actions';
import { createReward, deleteReward } from '../../../actions/reward_actions';

const mapStateToProps = ({ projectDetail, session }) => ({
  projectDetail,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchProjectDetail: id => dispatch(fetchProjectDetail(id)),
  deleteProject: project => dispatch(deleteProject(project)),
  createReward: reward => dispatch(createReward(reward)),
  deleteReward: reward => dispatch(deleteReward(reward))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
