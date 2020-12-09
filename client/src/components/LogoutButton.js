import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function reqLogout() {
    axios.get('/logout').then(function(response) {
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
      });
}

function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <button onClick={() => {
      logout({ reqLogout });
    }}>Log out</button>
  );
}

export default LogoutButton;