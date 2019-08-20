/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../services/user-service';

function Nav(props) {
  const onLogout = e => {
    e.preventDefault();
    logout();
    props.logout();
    props.history.push('/');
  };

  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <a className="navbar-brand" href="#">Xebia</a>
      {localStorage.getItem('user')
        && <div>{'Welcome, ' + (props.user.name && props.user.name)} <a className="navbar-brand logout" href="#" onClick={onLogout}>Logout</a></div>}
    </nav>
  );
}

const mapStoreToProps = store => {
  return {
    user: store.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch({ type: 'LOGOUT', isLoggedIn: false })
  }
};

export default withRouter(connect(mapStoreToProps, mapDispatchToProps)(Nav));