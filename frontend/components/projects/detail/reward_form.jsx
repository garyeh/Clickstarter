import React from 'react';
import { withRouter } from 'react-router';

class RewardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      amount: "",
      limit: "",
      project_id: this.props.match.params.projectId
    };

    this.props.clearRewardErrors();
    this.currentDate = (new Date()).toJSON().slice(0,10);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newState = Object.assign({}, this.state);

    this.props.createReward(newState).then(() => {
      this.props.fetchProjectDetail(this.state.project_id);
      this.props.closeModal();
      scroll(100,0);
    });
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }

  render() {
    return (
      <form className="reward-create-form">
        <button onClick={this.props.closeModal}>
          <img src="http://res.cloudinary.com/ds1qfel8a/image/upload/v1495687648/Stock/x-categories_jlstnk.png" />
        </button>
        <h2>Create a reward</h2>

        <div><span>Title</span>
          <input type="text" placeholder="Title" onChange={this.update('title')} value={this.state.title} />
        </div>

        <div><span>Description</span>
          <textarea name="Description" className="reward-description" placeholder="Description" onChange={this.update('description')} value={this.state.description}></textarea>
        </div>

        <div><span>Amount</span>
          <input type="text" placeholder="Amount" onChange={this.update('amount')} value={this.state.amount} />
        </div>

        <div><span>Backer limit</span>
          <input type="text" placeholder="Limit" onChange={this.update('limit')} value={this.state.limit} />
        </div>

        <div><span>Deliver date</span>
          <input type="date" id="rewardDate" name="Deliver_date" onChange={this.update('deliver_date')} value={this.state.deliver_date} min={this.currentDate}/>
        </div>

        <ul className="rewardErrors">
          {this.errors()}
        </ul>

        <input onClick={this.handleSubmit} type="submit" value="Save" />

      </form>
    );
  }
}

export default withRouter(RewardForm);
