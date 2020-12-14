import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Icon } from 'react-materialize';
import axios from 'axios';

function reqLogout() {
    axios.get('/logout');
}

function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <Button
    className="functional-buttons"
    id="log-out-button"
    node="button"
    type="submit"
    waves="light"
    onClick={() => {
      logout({ reqLogout });
    }}
    >
      Log Out
      <Icon right>person</Icon>
    </Button>
  );
}

export default LogoutButton;