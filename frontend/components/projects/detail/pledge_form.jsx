import React from 'react';
import { Route, Link } from 'react-router-dom';

class PledgeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backer_id: this.props.currentUser.id,
      reward_id: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.clearPledgeErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newState = Object.assign({}, this.state);
    
    this.props.createPledge(newState)
      .then(() => {
        this.props.fetchProjectDetail(this.props.detail.id);
        this.props.clearPledgeErrors();
        this.props.closeModal();
        scroll(0,0);
      });
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<p key={error}>{error}</p>);
        })
      );
    }
  }

  render() {
    return (
      <form className="pledgeForm">
        <h2>Make a pledge</h2>
        <select onChange={this.update('reward_id')} value={this.state.reward_id}>
          <option key="0" disabled="disabled">Select</option>
          {
            this.props.detail.rewards.map(reward => (
            <option key={reward.id} value={reward.id} >
              {`$${reward.amount} - ${reward.title}`}
            </option>
          ))}
        </select>
        <input type="submit" onClick={this.handleSubmit} value="Submit pledge" />
        <div className="pledgeErrors">
          {this.props.errors.length !== 0 ?
            "You have already claimed this reward" : ""
          }
        </div>
      </form>
    );
  }
}

export default PledgeForm;
