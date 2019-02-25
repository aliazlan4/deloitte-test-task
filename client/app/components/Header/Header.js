import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 class="my-0 mr-md-auto font-weight-normal">Deloitte Test Task</h5>
      <a class="btn btn-outline-primary mx-3" href="/login">Login</a>
      <a class="btn btn-primary" href="/signup">Sign up</a>
    </div>
  </header>
);

export default Header;
