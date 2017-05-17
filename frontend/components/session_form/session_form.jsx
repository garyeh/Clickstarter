import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <div>
              <span>New to Clickstarter?</span>&nbsp;&nbsp;
              <span><Link to="/signup">Sign up!</Link></span>
            </div>;
    } else {
      return <div>
              <span>Have an account?</span>&nbsp;&nbsp;
              <span><Link to="/login">Log in</Link></span>
            </div>;
    }
  }

  submitButton() {
    if (this.props.formType === 'login') {
      return <input type="submit"
              className="login-submit"
              value="Log me in!" />;
    } else {
      return <input type="submit"
              className="login-submit"
              value="Create account" />;
    }
  }

  titleText() {
    if (this.props.formType === 'login') {
      return <p>Log in</p>;
    } else {
      return <p>Sign up</p>;
    }
  }

  renderErrors() {
    return (
      <ul className="login-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="redirect">{this.navLink()}</div>
          <div className="login-form">
          {this.titleText()}
            <label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
              />
            </label>
            <br/>
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            </label>
            <br/>
            {this.submitButton()}
          </div>
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
