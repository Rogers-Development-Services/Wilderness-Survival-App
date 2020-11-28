import React, { component, useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import Location from "./pages/Location";
import Notes from "./pages/Notes";
import Tools from "./pages/Tools";
import "materialize-css";

import { Container, Dropdown, Button, NavItem, SideNav, Navbar, Icon } from 'react-materialize';
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import API from "./utils/API";

function App() {
  return (
    <Router>
      <div>
        <Navbar
          alignLinks="right"
          brand={<a className="brand-logo" href="#">Wilderness Survival App</a>}
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
            preventScrolling: true
          }}
        >
          <NavItem href="/">
            Homepage
  </NavItem>
          <NavItem href="/Location">
            Location
  </NavItem>
          <NavItem href="/Notes">
            Notes
  </NavItem>
          <NavItem href="/Tools">
            Tools
          {/* This is where custom styling and extra tabs would be added to appear within the sidenav */}
          </NavItem>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/Location" component={Location} />
          <Route exact path="/Notes" component={Notes} />
          <Route exact path="/Tools" component={Tools}  />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
