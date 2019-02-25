import React, { Component } from 'react';
import 'whatwg-fetch';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      show_error: false,
      error_msg: '',
    };

    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  signup(event) {
    event.preventDefault();

    if (this.state.username.length < 6) {
      this.setState({
        error_msg: 'Username should have atleast 6 characters',
        show_error: true,
      });
    }
    else if (this.state.password.length < 6) {
      this.setState({
        error_msg: 'Password should have atleast 6 characters',
        show_error: true,
      });
    }
    else {
      this.setState({
        error_msg: '',
        show_error: false,
      });

      fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
          })
        }).then(res => res.json())
        .then(response => {
          if (response.status) {
            window.location = '/login';
          } else {
            console.log('Not signed up');

            this.setState({
              error_msg: response.message,
              show_error: true,
            });
          }
        });
    }
  }

  render () {
    return (
      <div class="auth_box">
        <form class="form-auth">
          <img class="mb-4" src="/assets/img/logo.png" alt="" width="72" height="72" />
          { this.state.show_error ? <div class="alert alert-danger">{this.state.error_msg}</div> : ''}
          <input type="text" name="username" class="form-control" placeholder="Username" onChange={this.handleChange} required autoFocus />
          <input type="password" name="password" class="form-control" placeholder="Password" onChange={this.handleChange} required />
          <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={this.signup}>Sign Up</button>
        </form>
      </div>
    );
  }

}

export default Signup;