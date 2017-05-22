import { connect } from 'react-redux';
import { updateProject, receiveProjectErrors } from '../../actions/project_actions';
import ProjectEdit from './project_edit';

const mapStateToProps = ({ session, errors }) => ({
  currentUser: session.currentUser,
  errors
});

const mapDispatchToProps = dispatch => ({
  updateProject: project => dispatch(updateProject(project)),
  clearErrors: () => dispatch(receiveProjectErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectEdit);
