import React, { Component } from 'react';

class Header extends Component {
  logout() {
    fetch('/api/auth/logout', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(response => {
      if (response.status) {
        localStorage.removeItem('user');
        window.location = '/login';
      }
    });
  }

  render() {
    return (
      <header>
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <h5 class="my-0 mr-md-auto font-weight-normal">Deloitte Test Task</h5>
          {
            localStorage.getItem('user') ?
              <button class="btn btn-outline-primary mx-3" onClick={this.logout}>Logout</button>
              :
              <div><a class="btn btn-outline-primary mx-3" href="/login">Login</a>
              <a class="btn btn-primary" href="/signup">Sign up</a></div>
          }
        </div>
      </header>
    );
  }
}

export default Header;
