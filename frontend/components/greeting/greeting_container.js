import { connect } from 'react-redux';
import { logout, receiveErrors } from '../../actions/session_actions';
import Greeting from './greeting';
import { fetchSearchProjects } from '../../actions/project_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(receiveErrors([])),
  fetchSearchProjects: (value) => dispatch(fetchSearchProjects(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
