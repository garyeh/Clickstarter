import { connect } from 'react-redux';
import { createProject, receiveProjectErrors, updateProject, fetchProjectDetail } from '../../actions/project_actions';
import ProjectForm from './project_form';

const mapStateToProps = ({ session, errors, projectDetail }) => ({
  currentUser: session.currentUser,
  projectDetail,
  errors
});

const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project)),
  updateProject: project => dispatch(updateProject(project)),
  fetchProjectDetail: id => dispatch(fetchProjectDetail(id)),
  clearErrors: () => dispatch(receiveProjectErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
