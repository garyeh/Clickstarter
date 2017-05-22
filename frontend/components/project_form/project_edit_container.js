import { connect } from 'react-redux';
import { updateProject, receiveProjectErrors, fetchProjectDetail } from '../../actions/project_actions';
import ProjectEdit from './project_edit';

const mapStateToProps = ({ session, errors, projectDetail }) => ({
  currentUser: session.currentUser,
  projectDetail,
  errors
});

const mapDispatchToProps = dispatch => ({
  updateProject: project => dispatch(updateProject(project)),
  clearErrors: () => dispatch(receiveProjectErrors([])),
  fetchProjectDetail: id => dispatch(fetchProjectDetail(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectEdit);
