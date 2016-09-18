import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class PokemonDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const actions = [
      this.props.toggleInListAction,
      <FlatButton
        label='Close'
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];

    return (
      <span>
        <FlatButton label='View details' onTouchTap={this.handleOpen} />
        <Dialog
          title={this.props.name}
          actions={actions}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {`Stats for ${this.props.name}`}
        </Dialog>
      </span>
    );
  }

}

export default PokemonDetails;
