import { connect } from 'react-redux';
import { createPledge, receivePledgeErrors } from '../../../actions/pledge_actions';
import { fetchProjectDetail } from '../../../actions/project_actions';
import PledgeForm from './pledge_form';

const mapDispatchToProps = dispatch => ({
  fetchProjectDetail: id => dispatch(fetchProjectDetail(id)),
  createPledge: pledge => dispatch(createPledge(pledge)),
  clearPledgeErrors: () => dispatch(receivePledgeErrors([]))
});

export default connect(null, mapDispatchToProps)(PledgeForm);
