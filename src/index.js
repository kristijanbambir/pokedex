import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { teal400, cyan900 } from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { useScroll } from 'react-router-scroll';
import routes from './config/routes';
import './index.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal400,
    primary2Color: cyan900
  }
});

class Theme extends React.Component {

  constructor() {
    super();
    injectTapEventPlugin();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router
          history={browserHistory}
          routes={routes}
          render={applyRouterMiddleware(useScroll())}
        />
      </MuiThemeProvider>
    );
  }

}

ReactDOM.render(
  <Theme />,
  document.getElementById('root')
);
