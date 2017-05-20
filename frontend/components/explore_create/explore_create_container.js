import { connect } from 'react-redux';
import ExploreCreate from './explore_create';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

export default connect(mapStateToProps, null)(ExploreCreate);
