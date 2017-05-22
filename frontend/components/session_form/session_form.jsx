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
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <div>
        <span>New to Clickstarter?</span>&nbsp;&nbsp;
        <span onClick={this.props.clearErrors}><Link to="/signup">Sign up!</Link></span>
        </div>;
    } else {
      return <div>
        <span>Have an account?</span>&nbsp;&nbsp;
        <span onClick={this.props.clearErrors}><Link to="/login">Log in</Link></span>
        </div>;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user})
    .then(res => this.props.history.push('/'));
  }

  handleGuestLogin(e) {
    e.preventDefault();
    let user = { username: "Guest", password: "password" };
    this.props.guestLogin({user})
    .then(res => this.props.history.push('/'));
  }

  submitButton() {
    if (this.props.formType === 'login') {
      return <div>
        <input type="submit"
        onClick={this.handleSubmit} value="Log me in!" />
        <br/>
        <input type="submit"
        onClick={this.handleGuestLogin} value="Log in as guest" />
        </div>;
    } else {
      return <div>
        <input type="submit"
        onClick={this.handleSubmit} value="Create account" />
        <br/>
        <input type="submit"
        onClick={this.handleGuestLogin} value="Log in as guest" />
      </div>;
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
        <div className="login-box-wrapper">
          <form  className="login-form-box">
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
      </div>
    );
  }
}

export default withRouter(SessionForm);
