import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../services/user-service';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      submitted: false,
      error: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;
    const { history } = this.props;
    this.setState({ submitted: true });

    if (username && password) {
      login(username, password)
        .then(res => {
          if (res) {
            history.push('/');
            this.props.login(res);
          } else {
            this.setState({ submitted: false, error: "Username & password incorrect" });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  render() {
    const { username, password, submitted, error } = this.state;

    return (
      <div className="login-form" >
        <h2>Login</h2>
        {error && <span className="main-error">{error}</span>}
        <form name="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
            {submitted && !username && <span className="error">Username is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
            {submitted && !password && <span className="error">Password is required</span>}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">{submitted ? 'Login...' : 'Login'}</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch({ type: 'LOGIN', isLoggedIn: true, user: user })
  }
};

export default connect(null, mapDispatchToProps)(Login);