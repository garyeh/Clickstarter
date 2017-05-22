import { connect } from 'react-redux';
import ExploreCreate from './explore_create';
import { receiveErrors } from '../../actions/session_actions';
import { receiveProjectErrors } from '../../actions/project_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(receiveErrors([])).then(dispatch(receiveProjectErrors([])))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExploreCreate);
