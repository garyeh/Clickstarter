import { connect } from 'react-redux';
import ProjectDetail from './project_detail';
import { fetchProjectDetail } from '../../actions/project_actions';

const mapStateToProps = ({ projectDetail }) => ({
  projectDetail
});

const mapDispatchToProps = dispatch => ({
  fetchProjectDetail: id => dispatch(fetchProjectDetail(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
