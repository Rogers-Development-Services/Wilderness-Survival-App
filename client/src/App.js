import React from "react";
import FunctionalNotes from "./pages/FunctionalNotes";
import Homepage from "./pages/Homepage";
import Location from "./pages/Location";
// import Notes from "./pages/Notes";
import Tools from "./pages/Tools";
import Checklist from "./pages/Checklistpage";
import localforage from "localforage";
// import Forage from "react-localforage";
import "materialize-css";
import Footer from './components/footer';
import { NavItem, Navbar, Icon } from 'react-materialize';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';
import Profile from './components/Profile';

const ProtectedRoute = ({ component, ...args }) => (
  <Route component={withAuthenticationRequired(component)} {...args} />
);

function App() {
  localforage.setItem('key', 'value').then(function () {
    return localforage.getItem('key');
  }).then(function (value) {
    console.log(value);
    // we got our value
  }).catch(function (err) {
    // we got an error
    console.log(err);
  });
    
  return (
    <Auth0Provider
      domain="dev-qajxs-8o.us.auth0.com"
      // clientId="YG74ZPNcrWeh30VknRhK74NFfF6qvnDm"
      clientId="HxkBw2D995h4Okr9JDCjo3uAEEz8BdD0"
      redirectUri={window.location.origin}
    >
      <Router>
        <div className="fullscreen-container center-align">
          <Navbar
            alignLinks="right"
            brand={<a className="brand-logo" href="/">
                    <img id="header-img" className="responsive-img test" src="/assets/Nomad-home-button.jpg" alt="brand-home-button"/>
                  </a>}
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
            <NavItem href="/Location">Location</NavItem>
            <NavItem href="/Notes">Notes</NavItem>
            <NavItem href="/Tools">Tools
          {/* This is where custom styling and extra tabs would be added to appear within the sidenav */}</NavItem>
            <NavItem href="/Checklist">Checklist</NavItem>
          </Navbar>

          <div className="not-footer center-align">

            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/Location" component={Location} />
              <ProtectedRoute exact path="/Notes" component={FunctionalNotes} />
              <Route exact path="/Tools" component={Tools} />
              <Route exact path="/Checklist" component={Checklist} />
              <ProtectedRoute path="/profile" component={Profile} />
            </Switch>
          </div>
          <div className="is-footer">
            <Footer />
          </div>


        </div>
      </Router>
    </Auth0Provider>
  );
}

export default App;
