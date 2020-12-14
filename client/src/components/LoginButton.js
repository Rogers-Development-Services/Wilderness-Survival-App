import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Icon } from 'react-materialize';

function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    <Button
    className="functional-buttons"
    id="log-in-button"
    node="button"
    type="submit"
    waves="light"
    onClick={loginWithRedirect}>
      Log in
      <Icon right>person</Icon>
    </Button>
  );
}

export default LoginButton;