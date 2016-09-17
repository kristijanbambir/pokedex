import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link, withRouter } from 'react-router';
import { Grid } from 'react-bootstrap';

const HOME_PATH = '/';
const MY_POKEMON_PATH = '/my';

const DRAWER_DOCKED_MIN_WINDOW_WIDTH = 992;
const DRAWER_WIDTH = 200;

const menuItemStyle = {
  width: `${DRAWER_WIDTH}px`
}

const activeMenuItemStyle = {
  color: '#D32F2F',
  width: `${DRAWER_WIDTH}px`
};

const appBarStyle = {
  position: 'fixed',
  top: 0,
  right: 0
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      drawerDocked: this.shouldBeDocked(),
      drawerOpen: this.shouldBeOpen(),
      drawerZDepth: this.zDepth()
    };
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }

  handleDrawerClose() {
    this.setState({ drawerOpen: this.shouldBeOpen() })
  }

  handleDrawerToggle() {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  isMobile() {
    return window.innerWidth < DRAWER_DOCKED_MIN_WINDOW_WIDTH;
  }

  shouldBeDocked() {
    return !this.isMobile();
  }

  shouldBeOpen() {
    return !this.isMobile();
  }

  zDepth() {
    return this.isMobile() ? 1 : 0;
  }

  screenStyle() {
    return {
      paddingTop: 72,
      paddingLeft: this.shouldBeDocked() ? `${DRAWER_WIDTH}px` : ''
    };
  }

  render() {
    return (
      <div>
        <AppBar
          onLeftIconButtonTouchTap={this.handleDrawerToggle}
          style={appBarStyle}
          title='Pokédex'
        />
        <Drawer
          docked={this.state.drawerDocked}
          open={this.state.drawerOpen}
          onRequestChange={(open) => this.setState({ drawerOpen: open })}
          width={DRAWER_WIDTH}
          zDepth={this.state.drawerZDepth}
        >
          <AppBar
            showMenuIconButton={false}
            title='Pokédex'
            titleStyle={{ textAlign: 'center' }}
          />
          <Menu autoWidth={false}>
            <MenuItem
              onTouchTap={this.handleDrawerClose}
              containerElement={<Link to={HOME_PATH} activeClassName='active' onlyActiveOnIndex />}
              primaryText='All Pokémons'
              style={this.props.location.pathname === HOME_PATH ? activeMenuItemStyle : menuItemStyle}
            />
            <MenuItem
              onTouchTap={this.handleDrawerClose}
              containerElement={<Link to={MY_POKEMON_PATH} activeClassName='active' />}
              primaryText='My Pokémons'
              style={this.props.location.pathname === MY_POKEMON_PATH ? activeMenuItemStyle : menuItemStyle}
            />
          </Menu>
        </Drawer>
        <div style={this.screenStyle()}>
          <Grid fluid>
            {this.props.children}
          </Grid>
        </div>
      </div>
    );
  }

}

export default withRouter(App);
