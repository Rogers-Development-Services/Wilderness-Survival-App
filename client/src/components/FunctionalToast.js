import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Button, Icon } from 'react-materialize';
import API from "../utils/API";

function FunctionalToast() {

    return (
        <Button
        id="make-new"
        node="button"
        type="submit"
        waves="light"
        onClick={this.test}
      >
        Save
        <Icon right>save</Icon>
      </Button>
    )
}

export default FunctionalToast;