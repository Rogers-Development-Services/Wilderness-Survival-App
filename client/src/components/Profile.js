import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
  const { user } = useAuth0();

  console.log(user);

  console.log(user.sub);

  return <div>Hello {user.name}</div>;
}

export default Profile;