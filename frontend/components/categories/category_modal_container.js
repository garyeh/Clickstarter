import { connect } from 'react-redux';
import { Router, withRouter } from 'react-router-dom';
import CategoryModal from '../categories/category_modal';
import { fetchCategoryProjects } from '../../actions/project_actions';

const mapDispatchToProps = dispatch => ({
  fetchCategoryProjects: (category) => dispatch(fetchCategoryProjects(category))
});

export default withRouter(connect(null, mapDispatchToProps)(CategoryModal));
