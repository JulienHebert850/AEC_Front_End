import React from "react";
import Button from "react-bootstrap/Button";

export class Deconnexion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.handleDeconnexion = this.handleDeconnexion.bind(this);
    }

  handleDeconnexion() {
    this.props.onClick();
  }

  render() {
    return (
      <Button variant="primary" onClick={this.handleDeconnexion}>
        Déconnexion
      </Button>
    );
  }
}