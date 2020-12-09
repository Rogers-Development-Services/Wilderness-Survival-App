import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
    <h3>Practical help for the great outdoors.</h3>,
    <button onClick={() => loginWithRedirect()}>Lets Get Started!</button>)
};

export default LoginButton;