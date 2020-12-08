import React from "react";
import Homepage from "./pages/Homepage";
import Location from "./pages/Location";
import Notes from "./pages/Notes";
import Tools from "./pages/Tools";
import Checklist from "./pages/Checklistpage";
import "materialize-css";

import { /*Container, Dropdown, Button,*/ NavItem, /*SideNav,*/ Navbar, Icon } from 'react-materialize';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import API from "./utils/API";

import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';
import { createBrowserHistory } from 'history';
import Profile from './components/Profile';

export const history = createBrowserHistory();

const ProtectedRoute = ({ component, ...args }) => (
  <Route component={withAuthenticationRequired(component)} {...args} />
);

const onRedirectCallback = (appState) => {
  // Use the router's history module to replace the url
  history.replace(appState.returnTo || window.location.pathname);
};


function App() {
  return (
    <Auth0Provider
      domain="dev-qajxs-8o.us.auth0.com"
      clientId="HxkBw2D995h4Okr9JDCjo3uAEEz8BdD0"
      redirectUri={window.location.origin}
    >
      <Router history={history}>
        <div>
          <Navbar
            alignLinks="right"
            brand={<img className="responsive-img" src="/assets/mountain.svg" />}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
              draggable: true,
              edge: 'left',
              inDuration: 250,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 200,
              preventScrolling: true,
            }}
            fixed={true}
            centerLogo={true}

          >
            <NavItem href="/">Homepage</NavItem>
            <NavItem href="/Location">Location</NavItem>
            <NavItem href="/Notes">Notes</NavItem>
            <NavItem href="/Tools">Tools
          {/* This is where custom styling and extra tabs would be added to appear within the sidenav */}</NavItem>
            <NavItem href="/Checklist">Checklist</NavItem>
          </Navbar>

          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Location" component={Location} />
            <Route exact path="/Notes" component={Notes} />
            <Route exact path="/Tools" component={Tools} />
            <Route exact path="/Checklist" component={Checklist} />
            <ProtectedRoute path="/profile" component={Profile} />
          </Switch>
        </div>
      </Router>
    </Auth0Provider>
  );
}

export default App;
